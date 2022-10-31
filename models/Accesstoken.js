'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccessToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  AccessToken.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: 'accessTokens',
      modelName: 'AccessToken',
    }
  );
  return AccessToken;
};
