var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var database = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(database);
connection.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs       
// instruct express to server up static assets
app.use(express.static('public'));
app.set('jsonp callback name', 'callback');
var apiRouter = require('./routers/api')(express, connection);
// Apply Routes to App
// All of these routes will be prefixed with /api
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.render('index');
});
app.disable('x-powered-by');

module.exports = app;