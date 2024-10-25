"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 5000;
app.get('/', function (req, res) {
    var x = "";
    for (var i = 0; i < 10; i++) {
        x = x + " " + i;
    }
    res.send(x);
});
app.listen(port, function () {
    console.log("Server running on port " + port);
});
