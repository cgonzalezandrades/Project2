'use strict';
module.exports = function(sequelize, DataTypes) {
  var login = sequelize.define('login', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return login;
};