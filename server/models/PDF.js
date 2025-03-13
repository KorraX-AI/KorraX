const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PDF = sequelize.define('PDF', {
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uploadedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = PDF;