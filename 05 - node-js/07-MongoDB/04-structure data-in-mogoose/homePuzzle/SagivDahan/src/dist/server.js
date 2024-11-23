"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var mongoose_1 = require("mongoose");
var usersRouter_1 = require("./routes/usersRouter");
var servicePvRouter_1 = require("./routes/servicePvRouter");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.use("/api/user", usersRouter_1["default"]);
app.use("/api/provider", servicePvRouter_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
var dbUrl = "mongodb+srv://adhcsvi1:sagiv123@cluster0.qyh2p.mongodb.net";
var database = 'booking';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
