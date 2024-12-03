"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
console.log("Server On");
app.use(express_1["default"].static('public'));
//get = a method of http
//route '/' 
//req = request
//res = response
//event handler of get method
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
