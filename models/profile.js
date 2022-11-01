'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
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
  Profile.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      bio: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'profiles',
      modelName: 'Profile',
    }
  );
  return Profile;
};
