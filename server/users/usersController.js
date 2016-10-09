const Users = require('./usersModel.js');

module.exports = {
  signup: function(req, res) {
    Users.findOne({
      where: { username: req.body.username },
    })
    .then(function(user) {
      if (!user) {
        Users.create(req.body)
        .then(function(user) {
            const message = {
            id: user.id,
            username: user.username,
          };
          res.json(message);
        });
      } else {
        res.json({
          msg: "Username is already in use",
        });
      }
    });
  },
  login: function(req, res) {
    Users.findOne({
      where: { username: req.body.username },
    })
    .then(function(user) {
      if(user.password === req.body.password) {
        res.json({
          id: user.id,
          username: user.username,
        })
      } else {
        res.json({
          msg: "IncorrectPassword",
        })
      }
    })
  },
};