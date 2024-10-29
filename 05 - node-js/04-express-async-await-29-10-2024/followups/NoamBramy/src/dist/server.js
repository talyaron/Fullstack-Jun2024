"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
console.log("Hi from typescript");
var x = 5;
console.log(x);
app.use(express_1["default"].static('public'));
app.get('/api/details', function (req, res) {
    try {
        res.send({ message: "Hello, Testing", id: "0123456789" });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
