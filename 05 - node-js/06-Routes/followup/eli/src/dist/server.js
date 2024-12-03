"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static("public"));
var route_1 = require("./routes/route");
app.use("/api/users", route_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
