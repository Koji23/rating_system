var Sequelize = require('sequelize');
var s = require('./secrets.js');

var db = new Sequelize(s.database,  s.username, s.password, {
  host: s.host,
  port: s.port,
  timezone: '-07:00',
});

db.authenticate()
.then(function(msg) {
  console.log('Connection has been established successfully.', msg);
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

module.exports = db;