"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static('public'));
app.get('/05 - node-js/03-express-25-10-2024/HomePuzzles/Rana', function (req, res) {
    console.log("Rana zidan!");
    res.sendFile(path_1["default"].resolve('public', 'index.html'));
});
app.listen(port, function () {
    console.log("Server listening on port" + port);
});
