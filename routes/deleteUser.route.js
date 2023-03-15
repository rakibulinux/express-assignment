const express = require("express");
const { deleteUser } = require("../controllers/deleteUser.controller");

const router = express.Router();

router.route("/:id").delete(deleteUser);

module.exports = router;
