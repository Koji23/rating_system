const path = require('path');
const usersController = require('../users/usersController');
const restaurantsController = require('../restaurants/restaurantsController.js');
const ratingsController = require('../ratings/ratingsController.js');

module.exports = function(app, express) {
  app.post('/api/signup', function(req, res) {
    usersController.signup(req, res)
  });
  app.put('/api/login', function(req, res) {
    usersController.login(req, res)
  });
  app.get('/api/restaurants', function(req, res){
    restaurantsController.getAllRestaurants(req, res);
  });
  app.post('/api/rating', function(req, res) {
    ratingsController.postRating(req, res);
  });
  app.put('/api/ratingAvg', function(req, res) {
    ratingsController.getAvgRating(req, res);
  });
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
  });
}