var express = require('express');
var router = express.Router();
var path = require('path');

// Index
router.get('/', function (request, response) {
  // const url = '/dist/index.html';
  // response.sendfile(path.join(path.dirname(require.main.filename), url));
  response.send('Hello, this is christmax-v2 server');
});

module.exports = router;
