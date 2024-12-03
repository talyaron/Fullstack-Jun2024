"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postRoutes_1 = require("./routes/postRoutes");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.use("/api/users/", postRoutes_1.postRoutes);
app.listen(port, function () {
    console.log("Server running on " + port);
});
