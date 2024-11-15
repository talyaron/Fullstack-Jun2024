"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var path_1 = require("path");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static(path_1["default"].join(__dirname, "../public"))); // ?
app.use(express_1["default"].json());
var dbUrl = "mongodb+srv://yonatans02424:NB0YtPMbc0p8GkDS@cluster0.zsbrf.mongodb.net";
var database = 'homePuzzle11-11';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
var postRoutes_1 = require("./routes/postRoutes");
app.use("/api/posts", postRoutes_1["default"]);
