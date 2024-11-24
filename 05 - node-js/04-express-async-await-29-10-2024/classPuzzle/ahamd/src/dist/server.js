"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var path_1 = require("path");
var app = express_1["default"]();
app.use(cors_1["default"]());
app.use(express_1["default"].static(path_1["default"].join(__dirname, '../public')));
app.get('/random-number', function (req, res) {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    res.json({ number: randomNumber });
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
