const fs = require("fs");
module.exports.getARandomUser = (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      const users = JSON.parse(data);
      const randomUser = users[Math.floor(Math.random() * users.length)];
      res.send(randomUser);
    }
  });
};
