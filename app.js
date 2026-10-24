require('dotenv').config({ quiet: true });
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1/golang2026';
mongoose.connect(mongoUrl);
var session = require('express-session');
var { MongoStore } = require('connect-mongo');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var topicsRouter = require('./routes/topics');

var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.topicStyle = require('./topicStyles.js');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 60 * 1000 },
  proxy: true,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: mongoUrl })
}));

app.use(function(req, res, next) {
  req.session.counter = req.session.counter + 1 || 1;
  next();
});
app.use(require('./middlewares/createMenu.js'));
app.use(require('./middlewares/createUser.js'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/topics', topicsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.status = err.status || 500;

  // render the error page
  res.status(res.locals.status);
  res.render('error', { title: 'Ошибка ' + res.locals.status });
});

module.exports = app;
