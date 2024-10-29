"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var counter = 0;
app.use(express_1["default"].static('public')); //middleware
//event handler of get method
app.get('/api/press-button', function (req, res) {
    try {
        counter++;
        res.send({ message: "I was pressed " + counter + " times!" });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
