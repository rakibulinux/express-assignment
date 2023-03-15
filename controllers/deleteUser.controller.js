const fs = require("fs");

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;

  // Check if ID is valid (positive integer)
  if (!Number.isInteger(+id) || +id <= 0) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  // Read existing users data from file
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    let users = JSON.parse(data);

    // Check if user with specified ID exists
    const userIndex = users.findIndex((user) => user.id === +id);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Remove user with specified ID from array
    users.splice(userIndex, 1);

    // Write updated users data to file
    fs.writeFile("users.json", JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }

      return res.status(204).end();
    });
  });
};
