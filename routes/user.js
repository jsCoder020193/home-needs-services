const express = require("express");
const Router = express.Router();

const mysqlConnection = require("../connection");

Router.get("/",(req, res)=>{
    mysqlConnection.query("select * from user;",(err, rows, fields)=>{
        if(!err){
            res.send(rows[0].first_name);
        }else{
            console.log(err);
        }
    })
})

module.exports = Router;