'use strict';
module.exports = (sequelize, DataTypes) => {
  var beerlist = sequelize.define('beerlist', {
    brewery_name: DataTypes.STRING,
    city_name: DataTypes.STRING,
    beer_name: DataTypes.STRING,
    beer_type: DataTypes.STRING
  }, {});
  beerlist.associate = function(models) {
    // associations can be defined here
  };
  return beerlist;
};