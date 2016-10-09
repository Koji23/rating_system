const path = require('path');
const usersController = require('../users/usersController');

module.exports = function(app, express) {
  app.post('/api/signup', function(req, res) {
    usersController.signup(req, res)
  });
  app.put('/api/login', function(req, res) {
    usersController.login(req, res)
  });
  app.get('/api/restaurants', function(req, res){

  });
  app.post('./api/rating', function(req, res) {

  });
  app.get('/api/rating', function(req, res) {

  });
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
  });
}