var mysql = require('mysql');
var connection = require('./connection');

//get tat cac cac user
var user = function (req, res) {
    var sql = "SELECT * FROM storydb.user; ";
    connection.query(sql, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(results));
        }

    });
};
module.exports.user = user;
