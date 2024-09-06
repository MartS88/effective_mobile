const express = require('express');
const router = express.Router();
const InventoryService = require('../../express/service/inventoryService');


router.post('/products', async (req, res) => {
  try {
    const { plu, name } = req.body;
    const newProduct = await InventoryService.createProduct(plu, name);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.post('/inventory', async (req, res) => {
  try {
    const { productId, storeId, quantityOnShelf, quantityInOrder } = req.body;
    const newInventory = await InventoryService.createInventory(productId, storeId, quantityOnShelf, quantityInOrder);
    res.status(201).json(newInventory);
  } catch (error) {
    console.log('error server', error);
    res.status(400).json({ message: error.message });
  }
});


router.patch('/inventory/increase', async (req, res) => {
  try {
    const { plu, storeId, amount } = req.body;
    const updatedInventory = await InventoryService.increaseInventory(plu, storeId, amount);
    res.status(200).json(updatedInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.patch('/inventory/decrease', async (req, res) => {
  try {
    const { plu, storeId, amount } = req.body;
    const updatedInventory = await InventoryService.decreaseInventory(plu, storeId, amount);
    res.status(200).json(updatedInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/inventory', async (req, res) => {
  try {
    const filters = {};

    if (req.query.productId) {
      filters.productId = req.query.productId;
    }
    if (req.query.storeId) {
      filters.storeId = req.query.storeId;
    }
    if (req.query.quantityOnShelf) {
      filters.quantityOnShelf = req.query.quantityOnShelf;
    }

    const inventories = await InventoryService.getInventories(filters);

    res.status(200).json(inventories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




router.get('/products', async (req, res) => {
  try {
    const filters = req.query;
    const products = await InventoryService.getProducts(filters);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
