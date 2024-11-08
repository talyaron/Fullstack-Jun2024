"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body
app.use(express_1["default"].static('public'));
//DB
var dbUrl = "mongodb+srv://tal:k8w0S6ztTx3zowGW@cluster0.0hzknon.mongodb.net/";
var database = 'fs-jun24';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
});
//routesD
var postssRoutes_1 = require("./routes/postssRoutes");
app.use("/api/users", postssRoutes_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
