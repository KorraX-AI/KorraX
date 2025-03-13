const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // or 'mysql'
  logging: (msg) => console.log(`[Sequelize] ${msg}`), // Enable detailed logging
  dialectOptions: {
    connectTimeout: 60000 // Increase connection timeout
  }
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
