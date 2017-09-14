const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true
  },
  password: String
})

const User = mongoose.model('users', user_schema)

module.exports = User
