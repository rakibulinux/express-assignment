const express = require("express");
const { saveUser } = require("../controllers/saveUser.controller");

const router = express.Router();

router.route("/").post(saveUser);

module.exports = router;
