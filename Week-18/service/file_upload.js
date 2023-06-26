const multer = require('multer');

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = {
    upload
}