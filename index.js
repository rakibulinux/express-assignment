const express = require("express");
const app = express();
const cors = require("cors");
const randomUser = require("./routes/randomUser.route");
const allUser = require("./routes/allUser.route");
const saveUser = require("./routes/saveUser.route");
const updateUser = require("./routes/updateUser.route");

require("dotenv").config();

// Middleware Connections
app.use(cors());
app.use(express.json());

// Routes
app.use("/user/random", randomUser);
app.use("/user/all", allUser);
app.use("/user/save", saveUser);
app.use("/user/update/:id", updateUser);
app.get("/", (req, res) => {
  res.send(`Server is running on port: ${PORT}`);
});

// For no route
app.all("*", (req, res) => {
  res.send("No Route found for this URL");
});

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
