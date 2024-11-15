"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRoutes_1 = require("./routes/userRoutes");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.use("/api/users/", userRoutes_1.userRoutes);
var dataurl = 'mongodb+srv://rrrgrg304:R6pZjl029YQvhaSi@cluster0.pw3xh.mongodb.net';
var dbname = 'fs-jun24';
mongoose_1["default"].connect(dataurl + "/" + dbname).then(function () {
    console.log("DataBase: " + dbname + " is connected!");
})["catch"](function (error) {
    console.log(error);
});
app.listen(port, function () {
    console.log("Server running on " + port);
});
// הערות לטל
// טל פתחתי לך את הקישור תוכל להתחבר, ותיקנתי את הדברים שאמרת לי גם מהעבודה הקודמת להשתמש ב UpdateOne || router.patch
// כמובן שזה גם קוד חדש כן, לקחתי רעיונות טיפה מהקוד הקודם שלי 
// ולא היה לי מושג מה זה השלב האחרון 
