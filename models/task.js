const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Category);
      Task.belongsTo(models.User, { as: 'owner', onDelete: 'CASCADE' });
      // Task.belongsTo(models.User, { as: 'owner', foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
      Task.belongsTo(models.User, { as: 'assignee' });
    }
  }

  Task.init(
    {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
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
