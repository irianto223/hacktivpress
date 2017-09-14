var express = require('express');
var router = express.Router();
const article = require('../controllers/articles')

router.post('/', article.createArticle)

module.exports = router
