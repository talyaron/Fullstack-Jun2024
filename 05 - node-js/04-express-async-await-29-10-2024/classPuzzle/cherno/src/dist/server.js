"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static('public')); //middleware
//event handler of get method
app.get('/api/press', function (req, res) {
    try {
        res.send({ number: Math.floor(Math.random() * 16777215) });
        ;
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
