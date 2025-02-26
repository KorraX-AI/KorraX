const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
  try {
    const { plan } = req.body;
    const subscription = new Subscription({ plan });
    await subscription.save();
    res.status(201).json({ message: 'Subscription created', subscription });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription', error });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscriptions', error });
  }
};