// set up ======================================================================
var http = require('http');
//var https = require('https');
var app = require('./app');					// create our app w/ express
var port = process.env.PORT || 3000; 	  // set our port
var host = process.env.HOST || '0.0.0.0'; // For Heroku to run successfully	

// configuration ===============================================================
// mongoose.connect(database.localUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

// var con = mysql.createConnection({
//   host: database.host,
//   user: database.user,
//   password: database.password,
//   database: database.database
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("SELECT * FROM monan", function (err, result, fields) {
//           if (err) throw err;
//           console.log((result));
//         });
// });



http.createServer(app).listen(port, host, () => {
	console.log("Server ready at http://" + host + ":" + port);
});


