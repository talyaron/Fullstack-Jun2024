"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); // To parse JSON bodies
app.use(express_1["default"].static("public")); //middleware
app.listen(port, function () {
    console.log("Example unstagram app listening on port " + port);
});
