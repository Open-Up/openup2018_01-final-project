'use strict';
var app = require('../app');
var http = require('http');

var server = http.createServer(app);
server.listen(8080, function() {
  console.log('server running');
});
