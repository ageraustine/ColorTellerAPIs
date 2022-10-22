const multer = require('multer');
const router = require('express').Router();
const modelController = require('../controllers/mlmodel.controller');

// color routings
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post('/', upload.single('image'), modelController.getColor);

module.exports = router