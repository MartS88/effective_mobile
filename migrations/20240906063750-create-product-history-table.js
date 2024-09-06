'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductHistory', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Stores',
          key: 'store_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      PLU: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      action: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductHistory');
  }
};
