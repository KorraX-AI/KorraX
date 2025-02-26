
const express = require('express');
const router = express.Router();
const { createSubscription, getSubscriptions } = require('../controllers/subscriptionController');

router.post('/create', createSubscription);
router.get('/', getSubscriptions);

module.exports = router;