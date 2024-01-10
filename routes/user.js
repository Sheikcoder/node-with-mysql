const express = require('express');
const UserController = require("../controllers/user.controllers");
const router = express.Router();

router.post("/sign-up", UserController.signup);
router.post("/login", UserController.login);

module.exports = router;  