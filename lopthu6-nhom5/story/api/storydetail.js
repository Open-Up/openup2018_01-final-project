var mysql = require('mysql');
var connection = require('./connection');

//get noi dung cua truyen qua id
var storydetail = function (req, res) {
    var sql = "SELECT * FROM storydb.story where storyid= " + req.params.id;
    connection.query(sql, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            res.send(results);
        }

    });
};
module.exports.storydetail = storydetail;