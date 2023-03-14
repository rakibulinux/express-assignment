const fs = require("fs");
const path = require("path");

module.exports.saveUser = (req, res) => {
  const { gender, name, contact, address, photoUrl } = req.body;
  if (!gender || !name || !contact || !address || !photoUrl) {
    res.status(400).send("Missing required fields");
    return;
  }

  // Read the users JSON file
  const usersFilePath = path.join("users.json");
  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse the JSON data
    const users = JSON.parse(data);

    // Generate a unique ID for the new user
    const Id = users.length + 1;

    // Create a new user object
    const newUser = {
      Id,
      gender,
      name,
      contact,
      address,
      photoUrl,
    };

    // Add the new user to the array of users
    users.push(newUser);

    // Write the updated users array to the JSON file
    fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      // Return the new user object in the response
      res.send(newUser);
    });
  });
};
