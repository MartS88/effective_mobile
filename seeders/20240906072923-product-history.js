'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductHistory', [
      {
        storeId: 1,
        PLU: '123',
        action: 'create',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 2,
        PLU: '456',
        action: 'create',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 3,
        PLU: '789',
        action: 'create',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductHistory', null, {});
  },
};
