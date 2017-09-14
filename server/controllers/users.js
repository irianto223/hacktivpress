const User = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
  register: (req, res) => {
    let salt = bcrypt.genSaltSync(10)
    let password = bcrypt.hashSync(req.body.password, salt)

    User.create({
      name: req.body.name,
      username : req.body.username,
      password: req.body.password
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => console.error(err))
  },
  login: (req, res) => {
    //
  }
}
