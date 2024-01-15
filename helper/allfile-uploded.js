const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploades');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
  
        cb(null, true); 
}

const uploadfile = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});

module.exports = {
    uploadfile: uploadfile
};
