const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
  try {
    const { plan } = req.body;
    const subscription = await Subscription.create({ plan });
    res.status(201).json({ message: 'Subscription created', subscription });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription', error });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.findAll();
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscriptions', error });
  }
};