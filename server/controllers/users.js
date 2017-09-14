const User = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

module.exports = {
  register: (req, res) => {
    let salt = bcrypt.genSaltSync(8)
    let password = bcrypt.hashSync(req.body.password, salt)

    User.create({
      name: req.body.name,
      username : req.body.username,
      password: password
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  },
  login: (req, res) => {
    User.findOne({
      username: req.body.username
    })
    .then(data => {
      if (data != null) {

        if (bcrypt.compareSync(req.body.password, data.password)) {
          let token = jwt.sign({
            id: data._id,
            name: data.name,
            username: data.username
          }, process.env.TOKEN_SECRET)

          res.send({
            msg: 'login success',
            token: token
          })
        }
        else {
          res.send({
            msg: 'password incorrect'
          })
        }

      }
      else {
        res.send({
          msg: 'username not found'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
  }
}
