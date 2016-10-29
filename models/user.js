'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    points: DataTypes.INTEGER
  },  {
    freezeTableName: true
  },  {
    classMethods: {
      classMethods: {
        associate: function(models) {
          User.hasMany(models,beer, {
            onDelete: "CASCADE",
            hooks: true,
            foreignKey: {
              allowNull: false
            }
          })
        }
      }
    }
  });
  return user;
};