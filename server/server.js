const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to connect

mongoose.connect('mongodb://127.0.0.1:27017/portfolio-ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/pdfs', pdfRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/products', productRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});