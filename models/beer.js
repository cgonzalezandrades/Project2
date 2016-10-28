'use strict';
module.exports = function (sequelize, DataTypes) {
    var beer = sequelize.define('beer', {
        name: DataTypes.STRING,
        alcohol_level: DataTypes.FLOAT,
        preferred: DataTypes.STRING,
        organic: DataTypes.BOOLEAN,
        availability: DataTypes.STRING,
        origin: DataTypes.STRING,
        origin_id: DataTypes.INTEGER,
        url_image: DataTypes.STRING,
        points: DataTypes.INTEGER,
        description: DataTypes.INTEGER

    }, {
        timestamps: false,
        freezeTableName: true
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return beer;
};