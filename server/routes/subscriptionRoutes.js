const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, subscriptionController.createSubscription);
router.get('/', authMiddleware, subscriptionController.getSubscriptions);

module.exports = router;