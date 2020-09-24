
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
// Load Express Session Module
var session = require('express-session');

/* var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); */
var consign = require('consign');
var app = express();

app.use(cors());
app.options('*', cors());

// view engine setup
app.set('views', path.join('app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Setup Session Middleware
app.use(session({ 
  secret: "ngFOmdPuj73WUGnk4d3a5XvZWIa310baH5Qii9SCTbsET78NzA2M40m7nnALWgxH",
  saveUninitialized: false,
  resave: false
}));
consign()

  .include('app/routes')
  .include('app/models')
  .include('app/controllers')
  .include('app/helpers')
  .include('config/dbConn.js')
  .include('config/dbSyncSql.js')
  .into(app);
module.exports = app;