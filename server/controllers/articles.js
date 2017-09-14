const Article = require('../models/articles')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

module.exports = {
  createArticle: (req, res) => {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    })
    .then(data => {
      res.send({
        msg: 'data created',
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
  },
  getAllArticles: (req, res) => {
    Article.find({})
    .then(data => {
      res.send({
        msg: 'data found',
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
  },
  getArticleById: (req, res) => {
    Article.findOne({
      _id: req.params.id
    })
    .then(data => {
      res.send({
        msg: 'data found',
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
  },
  getArticlesByAuthor: (req, res) => {
    Article.find({
      author: req.params.id
    })
    .then(data => {
      res.send({
        msg: 'data found',
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
}
