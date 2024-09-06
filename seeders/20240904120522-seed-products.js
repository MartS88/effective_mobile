'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        PLU: '123',
        name: 'IPHONE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        PLU: '456',
        name: 'TV-BOX',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        PLU: '789',
        name: 'APPLE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
