"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var postRoutes_1 = require("./routes/postRoutes"); // Import your post routes
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
var dbUrl = "mongodb+srv://alexisv:Preobra30@cluster0.fqmwt.mongodb.net";
var database = 'fs-jun24';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error("DB connection failed:", err);
});
// Use the postRoutes for handling routes related to posts
app.use("/api/posts", postRoutes_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
