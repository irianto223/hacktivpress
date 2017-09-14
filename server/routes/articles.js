var express = require('express');
var router = express.Router();
const article = require('../controllers/articles')

router.post('/', article.createArticle)
router.get('/', article.getAllArticles)
router.get('/:id', article.getArticleById)
router.get('/author/:id', article.getArticlesByAuthor)

module.exports = router
