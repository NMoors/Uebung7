var express = require('express');
var router = express.Router();
var request = require('request');



/* GET home page. */
router.get('/', function(req, res, next) {
  
  request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // erg = JSON.stringify(obj[i].title);
    //console.log(obj.length);
  const i = Math.floor(Math.random()*20);
  obj = JSON.parse(body);
  console.log(obj[i].title);
  erg = JSON.stringify(obj[i].title);
 });

  res.render('index', { title: 'Nandas Blog', ghibli: erg});
 
});

module.exports = router;
