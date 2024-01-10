const express = require('express');
const imageControllers = require('../controllers/image.controllers');
const imageUploded = require('../helper/image-uploded');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/uploads', checkAuth.checkAuth, imageUploded.upload.single('images'), imageControllers.upload);

module.exports = router;
 