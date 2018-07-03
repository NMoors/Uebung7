var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.use(express.static('HTML'));
app.use(express.static('./'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/HTML/Index.html'));

  request('https://api/location/search/?query=london', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  obj = JSON.parse(body);
  console.log(obj.title);
});

res.render('/HTML/Index.html', {data: obj});

});




app.listen(8080);