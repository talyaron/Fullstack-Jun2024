"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var mongoose_1 = require("mongoose");
var usersRouter_1 = require("./routes/usersRouter");
var appointmentsRouter_1 = require("./routes/appointmentsRouter");
require("dotenv/config");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.use("/api/user", usersRouter_1["default"]);
app.use("/api/appointment", appointmentsRouter_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
var dbUrl = process.env.DB_URL;
var database = 'booking';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
