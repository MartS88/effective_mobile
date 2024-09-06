'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];

    for (let i = 0; i < 1000000; i++) {
      users.push({
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        age: faker.number.int({ min: 1, max: 90 }),
        gender: faker.person.sex(),
        problems:faker.datatype.boolean(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    const batchSize = 10000;
    for (let i = 0; i < users.length; i += batchSize) {
      await queryInterface.bulkInsert('users', users.slice(i, i + batchSize));
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
