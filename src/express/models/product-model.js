const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Product = sequelize.define('Product', {
  PLU: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Products'
});

module.exports = Product;
