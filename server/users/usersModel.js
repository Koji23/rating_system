var Sequelize = require('sequelize');
var db = require('../config/database.js');

var Users = db.define('user', {
  username: {type: Sequelize.STRING(20), unique: true},
  password: {type: Sequelize.STRING(25)},
});

Users.sync({force : false});

module.exports = Users;
