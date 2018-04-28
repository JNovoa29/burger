var mysql = require('mysql')
var config = mysql.createConnection({
    database: "burgers_db"
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306
});

config.connect(function(e) {
    if (e) throw e
    console.log(r)
});

module.exports = config;