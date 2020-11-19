const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Category, { as: 'category' });
      Task.belongsTo(models.User, { as: 'owner', foreignKey: { allowNull: false } });
      Task.belongsTo(models.User, { as: 'assignee' });
    }
  }

  Task.init(
    {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      isAssigned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Task',
    },
  );
  return Task;
};
