"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static('public')); // ?
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
app.get('/api/get-hello', function (req, res) {
    try {
        res.send({ message: "Hello from express" });
    }
    catch (error) {
        console.error(error);
    }
});
app.get('/api/get-random-number', function (req, res) {
    try {
        var random = Math.floor(Math.random() * 1000) + 1;
        res.send({ message: "" + random });
    }
    catch (error) {
        console.error(error);
    }
});
