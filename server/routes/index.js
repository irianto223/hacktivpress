var express = require('express');
var router = express.Router();
const user = require('../controllers/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', user.register)
router.post('/login', user.login)

module.exports = router;
