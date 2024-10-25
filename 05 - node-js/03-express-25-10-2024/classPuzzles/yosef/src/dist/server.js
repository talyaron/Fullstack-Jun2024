"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
console.log("Hi from typescript");
var x = 5;
console.log(x);
app.use(express_1["default"].static('public')); //middleware
//get = a method of http
//route '/' 
//req = request
//res = response
//event handler of get method
app.get('/main', function (req, res) {
    console.log("<h1 style='color: blue'>hello world</h1>");
    var x = '';
    for (var i = 0; i < 10; i++) {
        x += i + " ,";
    }
    res.send("<h1 style='color: blue'>hello world</h1><h2>from express</h2><p>" + x + "</p>");
});
app.get('/about', function (req, res) {
    res.send("<h1 style='color: green'>About us</h1>");
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
