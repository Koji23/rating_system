var Sequelize = require('sequelize');
var db = require('../config/database.js');

var Restaurants = db.define('restaurants', {
  name: {type: Sequelize.STRING(20), unique: true},
  imageURL: {type: Sequelize.STRING(200)},
});

Restaurants.sync({force : false});
  
module.exports = Restaurants;