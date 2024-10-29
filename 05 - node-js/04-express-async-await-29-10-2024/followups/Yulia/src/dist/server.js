"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3001;
console.log("Hi from typescript");
app.use(express_1["default"].static("public")); //middleware
//get = a method of http
//route '/'
//req = request
//res = response
//event handler of get method
app.get("/main", function (req, res) {
    console.log("hello world");
    var x = "";
    for (var i = 0; i < 10; i++) {
        x += i + " ,";
    }
    res.send("<h1>hello world</h1><h2>from express</h2><p>" + x + "</p>");
});
app.get("/about", function (req, res) {
    res.send("<h1>About us</h1>");
});
//route
app.get("/api/get-hello", function (req, res) {
    try {
        res.send({ message: "Hello from express" });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
