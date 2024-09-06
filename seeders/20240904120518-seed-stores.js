'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        name: 'Store 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Store 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Store 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
