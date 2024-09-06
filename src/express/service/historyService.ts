
const ProductHistory = require('../models/product-history-model');
import {Transaction} from 'sequelize'

class HistoryService {
  async addHistory(storeId:string,PLU:string,action:string,transaction:Transaction){
    try {
    const newProductHistory = await ProductHistory.create({storeId,PLU,action},{transaction})
    return newProductHistory
    }
    catch (error){
      throw new Error('Error adding product history');
    }
  }

  async getHistory(filters:any){
    console.log('filters:', filters);
    try {
      const history = await ProductHistory.findAll({ where: filters });
      if (!history) {
        console.log('No history found for the given filters');
      }
      return history;
    } catch (error) {
      console.error('Error fetching history:', error.message, error);
      throw new Error('Error fetching history from the database');
    }
  }


}



module.exports = new HistoryService();