"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postRouter_1 = require("./routers/postRouter");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
app.use("/api/users", postRouter_1["default"]);
var dbUrl = "mongodb+srv://annapetrovitsky:CUA5rKNGRSDqqUOE@course.l5x0p.mongodb.net";
var database = 'instaPuzzle';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
