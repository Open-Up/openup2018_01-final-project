'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var postRouter = require('./routes/post');
var accountRouter = require('./routes/account');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//setting assets public
app.use(bodyParser.json());
// app.use(bodyParser.urlendcoded({extended: false}));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/components-font-awesome')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use('/angular', express.static(path.join(__dirname, 'node_modules/angular')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery')));


//router
app.use('/', indexRouter);
app.use('/post-layout', postRouter);
app.use('/account', accountRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, eq, res, next) {
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
