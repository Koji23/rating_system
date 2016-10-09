var Sequelize = require('sequelize');
var db = require('../config/database.js');
var Users = require('../users/usersModel.js');
var Restaurants = require('../restaurants/restaurantsModel.js');

var Ratings = db.define('ratings', {
  rating: { type: Sequelize.INTEGER, defaultValue: 0 },
  user_id: { type: Sequelize.INTEGER, defaultValue: null },
  restaurant_id: { type: Sequelize.INTEGER, defaultValue: null },
});

Ratings.sync({force : false});
  
module.exports = Ratings;