const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets/images"); // Save files to this directory
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`); // Create a unique filename
  },
});

const upload = multer({ storage });

module.exports = upload;

console.log("multer is okkkkkkkkkkk");


