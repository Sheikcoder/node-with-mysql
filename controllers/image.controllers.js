function upload(req, res) {
    if (req.file && req.file.filename) {
        res.status(200).json({
            message: "Image Uploaded Successfully",
            filename: req.file.filename
        });
    } else {
        res.status(500).json({
            message: "Image not uploaded, something went wrong!"
        });
    }
}

module.exports = {
    upload: upload
};
