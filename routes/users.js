var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/main', function(req, res, next) {
  console.log(test);
  res.send('main.pug', {title: 'Nandas Blog'});
});


module.exports = router;
