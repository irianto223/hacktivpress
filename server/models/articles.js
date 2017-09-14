const mongoose = require('mongoose')

const article_schema = mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
})

const Article = mongoose.model('articles', article_schema)

module.exports = Article
