var express = require('express');
var router = express.Router();

// Index
router.get('/', function (request, response) {
  response.send('Welcome to Christmas Server!!');
});

module.exports = router;
