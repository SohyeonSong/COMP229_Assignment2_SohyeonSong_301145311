/*
Student's Name: Sohyeon Song
StudentID: 301145311
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholders');
});

module.exports = router;