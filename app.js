//jshint version : 6

const express= require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
//Comment


app.listen(3000, function (params) {
    console.log("Server started on port 3000");
})