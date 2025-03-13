const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, productController.createProduct);
router.get('/', productController.getProducts);

module.exports = router;
