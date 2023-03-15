const express = require("express");
const { getARandomUser } = require("../controllers/randomUser.controller");

const router = express.Router();

router.route("/").get(getARandomUser);

module.exports = router;
