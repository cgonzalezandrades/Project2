'use strict';
module.exports = function(sequelize, DataTypes) {
  var groups = sequelize.define('groups', {
    group_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return groups;
};