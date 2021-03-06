var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'mysupersecret',
    resave: true,
    saveUninitialized: true,
  }),
);

app.all('*', function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-control-Allow-Headers', 'xCors,Content-Type');
  response.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH,OPTIONS,HEAD,FETCH');
  next();
});

// router
var indexRouter = require('./router/index');
var loginRouter = require('./router/login');
app.use('/', indexRouter);
app.use('/api/login', loginRouter);

// AddListener
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
