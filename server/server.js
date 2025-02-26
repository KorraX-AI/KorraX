const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/portfolio-ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/pdfs', pdfRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});