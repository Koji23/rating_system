const Restaurants = require('./restaurantsModel.js');

module.exports = {
  getAllRestaurants: function(req, res) {
    Restaurants.findAll()
    .then(function(restaurants){
       res.json(restaurants);
    })
    .catch(function(err){
      console.log(err);
    });
  }
}