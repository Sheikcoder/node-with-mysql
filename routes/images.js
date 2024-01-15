const express = require('express');
const imageControllers = require('../controllers/image.controllers');
const fileControllers = require('../controllers/file.controllers');
const imageUploded = require('../helper/image-uploded');
const uploadAllfile = require('../helper/allfile-uploded');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/uploads', checkAuth.checkAuth, imageUploded.upload.single('image'), imageControllers.upload);
router.post('/fileuploads', checkAuth.checkAuth, uploadAllfile.uploadfile.single('emifile'), fileControllers.handleFileUpload);

module.exports = router;

 