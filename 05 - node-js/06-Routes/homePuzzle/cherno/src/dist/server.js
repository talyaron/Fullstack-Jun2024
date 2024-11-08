"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRoutes_1 = require("./routes/userRoutes");
var postRoutes_1 = require("./routes/postRoutes");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
app.use("/api/user", userRoutes_1["default"]);
app.use("/api/post", postRoutes_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
