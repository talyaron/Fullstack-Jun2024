"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var userRouter_1 = require("./routers/userRouter");
var app = express_1["default"]();
var port = 3002;
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var dbUrl = "mongodb+srv://matan_benoon:Mhfc1913@cluster0.q0nio.mongodb.net";
var database = 'practice';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
app.use("/api/users", userRouter_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
