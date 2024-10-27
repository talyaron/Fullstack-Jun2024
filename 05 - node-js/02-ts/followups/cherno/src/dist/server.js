"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log("new user");
});
app.listen(port, onListen);
function onListen() {
    console.log("Server running on port " + port);
}
