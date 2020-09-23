var express = require('express');
var app = express();


var path = require('path');
var cookieParser = require('cookie-parser');


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// router
var loginRouter = require('./router/login');
var signup = require('./router/signup');
app.use("/api/login", loginRouter);
app.use("/api/signup", signup);

// AddListener
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});