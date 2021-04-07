var express = require('express');
var router = express.Router();

var cheerio = require('cheerio');
var got = require('got');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
