const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // static associate(models) {
    //   User.hasMany(models.Task);
    // }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: { isEmail: true },
      },
      first_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: { isAlpha: true },
      },
      last_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: { isAlpha: true },
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
