"use strict";

module.exports = function (sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Task;
};