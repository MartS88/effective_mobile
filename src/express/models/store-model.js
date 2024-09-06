const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Store = sequelize.define('Store', {
  store_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Stores'
});

module.exports = Store;
