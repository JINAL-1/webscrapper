var express = require('express');
var router = express.Router();

var cheerio = require('cheerio');
var got = require('got');
//instead of request-promise 

const jsdom = require("jsdom");
//useful for testing and scraping real-world web applications.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
