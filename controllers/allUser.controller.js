const fs = require("fs");
module.exports.allUsers = (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      const users = JSON.parse(data);

      // Check for query parameter
      const limit = req.query.limit;
      if (limit && !isNaN(limit)) {
        const limitedUsers = users.slice(0, parseInt(limit));
        res.send(limitedUsers);
      } else {
        res.send(users);
      }
    }
  });
};
