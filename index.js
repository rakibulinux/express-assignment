const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Middleware Connections
app.use(cors());
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send(`Server is running on port: ${PORT}`);
});

app.all("*", (req, res) => {
  res.send("No Route found for this URL");
});
// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
