"use strict";

module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Profile.associate = function (models) {
    Profile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Profile;
};