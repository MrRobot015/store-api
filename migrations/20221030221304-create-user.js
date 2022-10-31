'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
          notNull: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  },
};
