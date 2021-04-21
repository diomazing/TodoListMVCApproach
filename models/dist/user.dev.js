"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };

  User.associate = function (models) {
    User.hasOne(models.Profile, {
      onDelete: "cascade"
    });
  };

  return User;
};