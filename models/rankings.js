'use strict';
module.exports = function(sequelize, DataTypes) {
  var rankings = sequelize.define('rankings', {
    user_names: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return rankings;
};