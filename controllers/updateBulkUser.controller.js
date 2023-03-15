const fs = require("fs");

//Try with this josn it will update multiple data
// {
//     "userIds": [1, 2, 3],
//     "updatedData": {
//           "gender": "M",
//       "name": "MD Rakibul Islam ALL",
//       "contact": "+8801983904081",
//       "address": "122 Powell Trace Suite 016, Lloydport, SC 08074",
//       "photoUrl": "https://avatars.githubusercontent.com/u/59226530?v=4"
//       }
//     }

module.exports.updateBulkUser = (req, res) => {
  const userIds = req.body.userIds;
  const updatedData = req.body.updatedData;

  // Validate the request body
  if (!userIds || !Array.isArray(userIds) || !updatedData) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  // Read the users from the JSON file
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      const users = JSON.parse(data);

      // Update the specified users
      userIds.forEach((id) => {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          users[userIndex] = { ...users[userIndex], ...updatedData };
        }
      });

      // Write the updated users back to the JSON file
      fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        } else {
          res.send(users);
        }
      });
    }
  });
};
