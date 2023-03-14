const express = require("express");
const { updateUser } = require("../controllers/updateUser.controller");

const router = express.Router();

router.route("/").patch(updateUser);

module.exports = router;
