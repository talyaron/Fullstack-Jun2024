"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static('public'));
app.get('/rana', function (req, res) {
    console.log("rana zidan");
    res.sendFile(path_1["default"].resolve('public', 'index.html'));
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
