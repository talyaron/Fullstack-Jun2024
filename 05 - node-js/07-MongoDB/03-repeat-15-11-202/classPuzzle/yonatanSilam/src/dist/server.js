"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static(path_1["default"].join(__dirname, "../public"))); // ?
app.use(express_1["default"].json());
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
// import postsRoutes from './routes/postRoutes';
// app.use("/api/posts", postsRoutes);
