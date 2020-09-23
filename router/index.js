var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../third-plugin/firebase_admin');
var firebase = require('../third-plugin/firebase');

// Index
router.get('/', function (request, response) {
  response.send('Welcome to Christmas Server!!');
});

module.exports = router;
