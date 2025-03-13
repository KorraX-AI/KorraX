const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/upload', authMiddleware, pdfController.uploadPDF);
router.get('/', authMiddleware, pdfController.getPDFs);

module.exports = router;