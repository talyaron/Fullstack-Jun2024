"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postRoutes_1 = require("./routes/postRoutes");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
// טל עשיתי שאתה יכול להתחבר עם 0.0.0.0 הכול טוב.
var databaseUrl = 'mongodb+srv://rrrgrg304:R6pZjl029YQvhaSi@cluster0.pw3xh.mongodb.net';
var database = 'fs-jun24';
mongoose_1["default"].connect(databaseUrl + "/" + database).then(function () {
    console.log("Database: " + database + " is connected !");
})["catch"](function (error) {
    console.error(error);
});
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.use("/api/users/", postRoutes_1.postRoutes);
app.listen(port, function () {
    console.log("Server running on " + port);
});
