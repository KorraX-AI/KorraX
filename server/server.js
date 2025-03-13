const express = require('express');
const cors = require('cors');
const path = require('path'); // Add this line
const { Sequelize } = require('sequelize');
const authRoutes = require('./routes/authRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to connect

// Initialize Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres' // or 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

app.use('/api/auth', authRoutes);
app.use('/api/pdfs', pdfRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/products', productRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build'))); // Add this line

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => { // Add this block
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});