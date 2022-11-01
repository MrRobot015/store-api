const uuidv4 = require('uuid/v4');

('use strict');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        userId: uuidv4(),
        email: 'admin@email.com',
        password: '$2b$10$kLzBSN/mLBrUJbEMKKclXOeaD1coa3bD8tQS9ET8UPHzIVP.RRk/e', //?pass=test
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userId: uuidv4(),
        email: 'support@email.com',
        password: '$2b$10$kLzBSN/mLBrUJbEMKKclXOeaD1coa3bD8tQS9ET8UPHzIVP.RRk/e',
        role: 'support',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        userId: uuidv4(),
        email: 'customer@email.com',
        password: '$2b$10$kLzBSN/mLBrUJbEMKKclXOeaD1coa3bD8tQS9ET8UPHzIVP.RRk/e',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
