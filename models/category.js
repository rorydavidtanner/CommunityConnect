const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Task);
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Category',
    },
  );
  return Category;
};
