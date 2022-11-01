'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('profiles', [
      {
        id: 1,
        userId: 1,
        firstName: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userId: 2,
        firstName: 'support',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        userId: 3,
        firstName: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
