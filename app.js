var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var history = require('connect-history-api-fallback');
var path = require('path');
var cookieParser = require('cookie-parser');
app.use(
  history({
    htmlAcceptHeaders: ['text/html', '/'],
    // htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
  }),
);
app.use(express.static('./dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('mysupersecret'));
app.use(
  session({
    secret: 'mysupersecret',
    resave: true,
    saveUninitialized: true,
  }),
);

app.all('*', function (request, response, next) {
  response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  response.header('Access-Control-Allow-Credentials', 'true');
  response.header('Access-control-Allow-Headers', 'X-Requested-With,xCors,Content-Type');
  response.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH,OPTIONS,HEAD,FETCH');
  next();
});

// router
var indexRouter = require('./router/index');
var loginRouter = require('./router/login');
var userRouter = require('./router/user');
app.use('/', indexRouter);
app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);

// AddListener
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
