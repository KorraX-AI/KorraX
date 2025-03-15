const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to connect

// Initialize Sequelize
sequelize.sync()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error connecting to DB:', err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/pdf', pdfRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/products', productRoutes);

// Serve static frontend files
const buildPath = path.join(__dirname, 'client', 'build');
app.use(express.static(buildPath));

// Catch-all route for React frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
