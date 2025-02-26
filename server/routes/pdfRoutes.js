const express = require('express');
const router = express.Router();
const { uploadPDF, getPDFs } = require('../controllers/pdfController');

router.post('/upload', uploadPDF);
router.get('/', getPDFs);

module.exports = router;