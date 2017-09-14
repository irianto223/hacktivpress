const Article = require('../models/articles')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

module.exports = {
  createArticle: (req, res) => {
    if (req.headers.token) {
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
    }
    else {
      res.send({
        msg: 'unauthenticated'
      })
    }
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
  },
  getArticlesByCategory: (req, res) => {
    Article.find({
      category: req.body.category
    })
    .then(data =>{
      res.send({
        msg: 'data found',
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
  },
  deleteArticle: (req, res) => {
    Article.remove({
      _id: req.params.id
    })
    .then(data => {
      res.send({
        msg: 'data removed',
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
  },
  editArticle: (req, res) => {
    Article.update({
      _id: req.params.id
    }, {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    })
    .then(data => {
      res.send({
        msg: 'data updated',
        data: data
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
}
