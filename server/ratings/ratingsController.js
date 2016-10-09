var Ratings = require('./ratingsModel.js');
var Users = require('../users/usersModel.js');
var Restaurants = require('../restaurants/restaurantsModel.js');

module.exports = {
  postRating: function(req, res) {
    Ratings.findOne({
      where: {
         $and: {
           user_id: req.body.user_id,
           restaurant_id: req.body.restaurant_id
         }
      }
    })
    .then(function(rating) {
      if (!rating) {
        Ratings.create({
          rating: req.body.rating,
          user_id: req.body.user_id,
          restaurant_id: req.body.restaurant_id
        })
        .then(function(rating) {
          res.json(rating);
        });
      } else {
        res.json({
          msg: "User user has already rated this restaurant",
        });
      }
    });
  }, 
  getAvgRating: function(req, res) {
    //return avg rating an num of ratings
    Ratings.findAll({
      where: {
        restaurant_id: req.body.restaurant_id,
      }
    })
    .then(function(ratings) {
      res.json({
        num: ratings.length,
        data: ratings,
      })
    });
  }
};