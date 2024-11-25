"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.get('/', function (req, res) {
    res.send("hello world");
});
var dbUrl = 'mongodb+srv://AhmadZakaria:Ziv242242@ahmadzakaria.72bnj.mongodb.net';
var database = 'client';
mongoose_1["default"]
    .connect(dbUrl + "/ " + database)
    .then(function () {
    console.info('connecteing to MongoDB');
})["catch"](function (error) {
    console.error('Error connecting to MongoDB:', error);
});
var ClientsRouter_1 = require("./routes/ClientsRouter");
app.use("/api/clients", ClientsRouter_1["default"]);
var AdminRoute_1 = require("./routes/AdminRoute");
app.use("/api/admins", AdminRoute_1["default"]);
app.listen(port, function () {
    console.log("\uD83D\uDE80Server is running on port " + port);
});
