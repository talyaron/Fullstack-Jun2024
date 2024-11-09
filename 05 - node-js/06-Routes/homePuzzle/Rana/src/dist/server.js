"use strict";
// server.ts
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var postsRoute_1 = require("./routes/postsRoute");
var userRoute_1 = require("./routes/userRoute");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(cors_1["default"]());
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
// שימוש בקבצי הנתיבים
app.use(postsRoute_1["default"]);
app.use(userRoute_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
