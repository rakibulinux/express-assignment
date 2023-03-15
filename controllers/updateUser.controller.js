const fs = require("fs");
module.exports.updateUser = (req, res) => {
  // Validate the request body
  const { gender, name, contact, address, photoUrl } = req.body;
  if (!gender || !name || !contact || !address || !photoUrl) {
    res.status(400).send("Missing required fields");
    return;
  }

  // Read the users JSON file
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse the JSON data
    const users = JSON.parse(data);

    // Find the user to update by ID
    const userToUpdate = users.find((user) => user.id === req.params.id);
    if (!userToUpdate) {
      res.status(404).send("User not found");
      return;
    }

    // Update the user object with the new data
    userToUpdate.gender = gender;
    userToUpdate.name = name;
    userToUpdate.contact = contact;
    userToUpdate.address = address;
    userToUpdate.photoUrl = photoUrl;

    // Write the updated users array to the JSON file
    fs.writeFile("users.json", JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      // Return the updated user object in the response
      res.send(userToUpdate);
    });
  });
};
