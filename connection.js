const mysql = require("mysql");

var env = process.env.NODE_ENV || 'database';
var config = require('./config')[env];

var mysqlConnection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("DB Connection successful!");
    } else{
        console.log("Connection failed!")
    }
});

module.exports = mysqlConnection;