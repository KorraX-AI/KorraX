const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // or 'mysql'
  logging: console.log, // Enable logging
  dialectOptions: {
    connectTimeout: 60000 // Increase connection timeout
  }
});

module.exports = sequelize;
