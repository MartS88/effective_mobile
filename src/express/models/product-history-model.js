const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');
const Store = require('./store-model');

const ProductHistory = sequelize.define('ProductHistory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Store,
      key: 'store_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  PLU: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'ProductHistory'
});

module.exports = ProductHistory;
