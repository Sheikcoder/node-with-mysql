// uploadController.js
const multer = require("multer");

const handleFileUpload = (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    const filePath = req.file.path;
    res.send(`File uploaded successfully. Path: ${filePath}`);
};

module.exports = {
    handleFileUpload: handleFileUpload
};
