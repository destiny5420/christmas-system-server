var express = require('express');
var router = express.Router();

// logout
router.post('/logout', function (request, response) {
  console.log('session id: ', request.session.uid);
  request.session.uid = null;
  response.send({
    success: true,
    message: 'successful logout',
  });
});

// Status Check
router.post('/check', function (request, response) {
  if (request.session.uid) {
    response.send({
      success: true,
    });
  } else {
    response.send({
      success: false,
      message: 'please login again',
    });
  }
});

module.exports = router;
