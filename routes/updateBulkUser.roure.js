const express = require("express");
const { updateBulkUser } = require("../controllers/updateBulkUser.controller");

const router = express.Router();

router.route("/").patch(updateBulkUser);

module.exports = router;
