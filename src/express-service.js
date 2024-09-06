const express = require('express');
const inventoryRoutes = require('./express/routes/inventoryRoutes');
const historyRoutes = require('./express/routes/historyRoutes');

const router = express.Router();

router.use(express.json());

router.use('/api', inventoryRoutes);
router.use('/api', historyRoutes);

module.exports = router;
