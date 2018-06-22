var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'hacker8899',
    database: 'storydb'
});

module.exports=connection;