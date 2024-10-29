"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static("public"));
app.get("/", function (req, res) {
    res.sendFile("index.html", { root: "public" });
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:" + port);
});
