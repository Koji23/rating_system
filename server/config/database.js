var Sequelize = require('sequelize');
var s = require('./secrets.js');

var db = new Sequelize('ratingSystem',  'root', 'abcd1234', {
  host: 'getable.c0eor5cjwn0u.us-west-1.rds.amazonaws.com',
  port: 3306
});

db.authenticate()
.then(function(msg) {
  console.log('Connection has been established successfully.', msg);
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

module.exports = db;