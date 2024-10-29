"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static(path_1["default"].join(__dirname, 'public')));
app.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});
