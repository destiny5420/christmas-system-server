var express = require('express');
var router = express.Router();
var firebaseAdmin = require('../third-plugin/firebase_admin');
var firebase = require('../third-plugin/firebase');

// Login
router.post('/sign-in', function (request, response) {
  const email = request.body.userEmail;
  const password = request.body.userPassword;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      request.session.uid = result.user.uid;
      console.log('user uid: ', result.user.uid);
      console.log('session: ', request.session);

      response.send({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      response.send({
        success: false,
        code: err.code,
        message: err.message,
      });
    });
});

// Signup
router.post('/sign-up', function (request, response) {
  const name = request.body.userName;
  const email = request.body.userEmail;
  const password = request.body.userPassword;

  console.log('email: ', email);
  console.log('password: ', password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (signupResponse) {
      console.log(signupResponse);

      let userData = {
        email: email,
        name: name,
      };

      firebaseAdmin.ref(`/user/${signupResponse.user.uid}`).set(userData);

      response.send({
        success: true,
      });
    })
    .catch(function (err) {
      console.log(err);
      response.send({
        code: err.code,
        message: err.message,
      });
    });
});

module.exports = router;
