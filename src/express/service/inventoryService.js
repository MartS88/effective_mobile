const Product = require('../models/product-model')
const Inventory = require('../models/inventory-model');
const HistoryService = require('../../express/service/historyService');
const sequelize = require('../../../config/database');

class InventoryService {

  async createProduct(plu, name) {
    try {
      const newProduct = await Product.create({ PLU: plu, name });
      return newProduct;
    } catch (error) {
      throw new Error('Error creating product');
    }
  }

  async createInventory(productId, storeId, quantityOnShelf, quantityInOrder) {
    const transaction = await sequelize.transaction();
    try {
      const newInventory = await Inventory.create(
        { productId, storeId, quantityOnShelf, quantityInOrder },
        { transaction }
      );
      await HistoryService.addHistory(storeId, productId, 'create', transaction);
      await transaction.commit();
      return newInventory;
    } catch (error) {
      await transaction.rollback();
      throw new Error('Error creating inventory');
    }
  }

  async increaseInventory(plu, storeId, amount) {
    const transaction = await sequelize.transaction();
    try {
      const inventory = await Inventory.findOne({
        where: { productId: plu, storeId },
        transaction
      });
      if (!inventory) throw new Error('Inventory not found');
      inventory.quantityOnShelf += amount;
      await inventory.save({ transaction });
      await HistoryService.addHistory(storeId, plu, 'increaseInventory', transaction);

      await transaction.commit();
      return inventory;
    } catch (error) {
      await transaction.rollback();
      throw new Error('Error increasing inventory');
    }
  }

  async decreaseInventory(plu, storeId, amount) {
    const transaction = await sequelize.transaction();
    try {
      const inventory = await Inventory.findOne({
        where: { productId: plu, storeId },
        transaction
      });
      if (!inventory) throw new Error('Inventory not found');
      inventory.quantityOnShelf -= amount;
      await inventory.save({ transaction });
      await HistoryService.addHistory(storeId, plu, 'decreaseInventory', transaction);

      await transaction.commit();
      return inventory;
    } catch (error) {
      await transaction.rollback();
      throw new Error('Error decreasing inventory');
    }
  }

  async getInventories(filters) {
    try {
      const inventories = await Inventory.findAll({ where: filters });
      return inventories;
    } catch (error) {
      throw new Error('Error fetching inventories');
    }
  }

  async getProducts(filters) {
    try {
      const products = await Product.findAll({ where: filters });
      return products;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  }
}

module.exports = new InventoryService();
