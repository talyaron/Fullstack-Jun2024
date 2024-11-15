"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var dbUrl = "mongodb+srv://alexisv:Preobra30@cluster0.fqmwt.mongodb.net";
var database = 'fs-jun24';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
var clientRoutes_1 = require("./routes/clientRoutes");
app.use("/api/users", clientRoutes_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
