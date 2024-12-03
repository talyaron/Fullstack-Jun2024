"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
//get = a method of http
//route '/' 
//req = request
//res = response
//event handler of get method
app.get('/', function (req, res) {
    console.log("hello world");
    res.send('something');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
