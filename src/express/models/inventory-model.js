const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');
const Product = require('./product-model');
const Store = require('./store-model');

const Inventory = sequelize.define('Inventory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Product,
      key: 'PLU'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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
  quantityOnShelf: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  quantityInOrder: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: true,
  tableName: 'Inventories'
});


Product.hasMany(Inventory, { foreignKey: 'productId' });
Store.hasMany(Inventory, { foreignKey: 'storeId' });

Inventory.belongsTo(Product, { foreignKey: 'productId' });
Inventory.belongsTo(Store, { foreignKey: 'storeId' });

module.exports = Inventory;
