const express = require('express');
const router = express.Router();
const HistoryService = require('../../express/service/historyService');

router.get('/history', async (req, res) => {
  try {
    const { storeId, PLU, action } = req.query;

    const filters: {
      storeId?: number;
      PLU?: string;
      action?: string;
    } = {};

    if (storeId) {
      filters.storeId = parseInt(storeId.trim(), 10);
    }
    if (PLU) {
      filters.PLU = PLU.trim()
    }
    if (action) {
      filters.action = action.trim();
    }

    const history = await HistoryService.getHistory(filters);
    console.log('history',history);
    res.status(200).json(history);
  } catch (error) {
    console.log('error',error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;