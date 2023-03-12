const express = require("express");
const { allUsers } = require("../controllers/allUser.controller");

const router = express.Router();

router.route("/").get(allUsers);

module.exports = router;
