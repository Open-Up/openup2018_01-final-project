var mysql = require('mysql');
var connection = require('./connection');

//get tat cac cac truyen
var story = function (req, res) {
    var sql = "SELECT * FROM storydb.story; ";
    connection.query(sql, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
        }

    });
};
module.exports.story = story;
