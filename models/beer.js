'use strict';
module.exports = function(sequelize, DataTypes) {
  var beer = sequelize.define('beer', {
    name: DataTypes.STRING,
    style: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return beer;
};