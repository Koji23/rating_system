var Ratings = require('./ratingsModel.js');
var Users = require('../users/usersModel.js');
var Restaurants = require('../restaurants/restaurantsModel.js');

module.exports = {
  postRating: function(req, res) {
    console.log('heard from post Rating!!!!');
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
          msg: "You have already rated this restaurant",
        });
      }
    });
  }, 
  getAvgRating: function(req, res) {
    Ratings.findAll({
      where: {
        restaurant_id: req.body.restaurant_id,
      }
    })
    .then(function(ratings) {
      var averageRating = ratings.length > 0 ? ratings.reduce(function(sum, rating) {
        return sum + rating.rating;
      }, 0) / ratings.length : 0;
      res.json({
        id: req.body.restaurant_id,
        num: ratings.length,
        avg: averageRating,
      })
    });
  }
};