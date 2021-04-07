var express = require('express');
var router = express.Router();

var cheerio = require('cheerio');

var got = require('got');
//instead of request-promise OR reset-promise-native

const jsdom = require("jsdom");
const { html } = require('cheerio');
const {JSDOM}=jsdom;
//useful for testing and scraping real-world web applications.

//https://www.google.com/search?q=easter

function day(term){
  let dom={
    uri:"https://www.google.com/search?q="+term,
    headers:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36"
      //displaying as a browser search so that ip address is not blocked,
      
      };

      console.log(dom.uri);

      (async () => {
        try {
          let {document}=(new JSDOM(html)).window;
         const day=document.querySelector('.zCubwf').textContent;
          const response = await got(dom.uri);
          
      
          console.log("");
          //=> '<!doctype html> ...'
        } catch (error) {
          console.log("error.response.body");
          //=> 'Internal server error ...'
        }
      })();
}

day("Christmas");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*
document.querySelector('.zCubwf').textContent
"Tuesday, April 13"

document.querySelector('div.kno-rdesc > span').textContent
"Chinese New Year, Spring Festival or the Lunar New Year, is the festival that celebrates the beginning of a new year on the traditional lunisolar Chinese calendar."

document.querySelector('h2>span').textContent
"Chinese New Year"

document.querySelector('div[class="wwUB2c PZPZlf"]>span').textContent
"Festivity"

document.querySelector('div[class="ayRjaf"]>div > span > div> div > div>span').textContent
"Canada Day 2021"
*/