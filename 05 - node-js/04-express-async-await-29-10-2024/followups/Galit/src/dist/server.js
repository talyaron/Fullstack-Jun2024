"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3001;
console.log("Hi from TypeScript");
app.use(express_1["default"].static('public'));
app.get('/main', function (req, res) {
    var numberSequence = Array.from({ length: 10 }, function (_, i) { return i; }).join(', ');
    res.send("<h1 style='color: blue'>Hello, world!</h1><h2>From Express</h2><p>" + numberSequence + "</p>");
});
app.get('/about', function (req, res) {
    res.send("<h1 style='color: green'>About Us</h1>");
});
app.get('/api/get-hello', function (req, res) {
    try {
        res.send({ message: "Hello from Express" });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
