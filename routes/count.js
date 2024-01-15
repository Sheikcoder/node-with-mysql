const express = require('express');
const countController = require("../controllers/count.controllers");
const allCountController = require("../controllers/allcount.controllers");
const router = express.Router();

router.get("/postcounts",countController.getPostCount);
router.get("/categoriescounts",countController.getcategoriesCount);
router.get("/addresscounts",countController.getaddressCount);
router.get('/allcount', allCountController.getAllCounts);

module.exports = router;   