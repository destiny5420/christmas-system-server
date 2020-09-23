var express = require('express');
var router = express.Router();
var database = require('../third-plugin/firebase');

// Index
router.get('/', function (request, response) {
  console.log(database.ref());
  response.send('Welcome to Christmas Server!!');
});

module.exports = router;
