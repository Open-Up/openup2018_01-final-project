// Get dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
require('./api/models/index');

// Get our API
const errorHanler = require('./api/server/middleware/error-handler');
const urlNotFound = require('./api/server/middleware/url-notFound');
const successHandler = require('./api/server/middleware/success-handler');

//api student review
const studentReviewRouter = require('./api/routes/studentreview.route');

//api teacher
const teacherRouter = require('./api/routes/teacher.route');

//api course
const courseRouter = require('./api/routes/course.route');

//api numbebresult
const numbebresultRouter = require('./api/routes/numberresult.route');

app.use(function (req, res, next) {
  res.setHeader('accessToken', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors());
// Point static path to dist
app.use(bodyParser.json({limit: "50mb"})); // support json encoded bodies
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000})); // support encoded bodies

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/views')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/public/views/index.html'));
})
app.use('/api/reviews', studentReviewRouter);
app.use('/api/teachers', teacherRouter);
app.use('/api/course', courseRouter);
app.use('/api/numberresults', numbebresultRouter);

app.use(urlNotFound());
app.use(successHandler());
app.use(errorHanler());

/**
 * Get port from environment and store in Express.
 */

console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr
const port = process.env.PORT || '9000';
console.log('port', process.env.NODE_ENV, port)
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app, (req, res) => res.end('test'));

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('listening', () => console.log('ok, server is running'))
server.listen(port, () => console.log(`API running on localhost:${port}`));
