const express = require('express');
const TestController = require("../controllers/test.controllers");
const router = express.Router();

router.get("/onetoone", TestController.onetoone);
router.get("/onetomany", TestController.onetomany);
router.get("/manytomany", TestController.manytomany);
module.exports = router;  
