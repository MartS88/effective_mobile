'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inventories', [
      {
        productId: '123',
        storeId: 1,
        quantityOnShelf: 10,
        quantityInOrder: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: '456',
        storeId: 2,
        quantityOnShelf: 20,
        quantityInOrder: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: '789',
        storeId: 3,
        quantityOnShelf: 40,
        quantityInOrder: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inventories', null, {});
  },
};
