"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
var dbUrl = "mongodb+srv://elizigi876:x3vH4Q9ksJyOKUs9@cluster0.x9hqo.mongodb.net";
var database = 'fs-jun24';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
var clientRoutes_1 = require("./routes/clientRoutes");
app.use("/api/client", clientRoutes_1["default"]);
app.listen(port, function () {
    console.log("server listening on port " + port + " ");
});
