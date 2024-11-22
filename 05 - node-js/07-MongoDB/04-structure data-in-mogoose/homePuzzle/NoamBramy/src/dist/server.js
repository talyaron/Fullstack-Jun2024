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
var dataurl = 'mongodb+srv://rrrgrg304:R6pZjl029YQvhaSi@cluster0.pw3xh.mongodb.net';
var dbname = 'fs-jun24';
mongoose_1["default"].connect(dataurl + "/" + dbname).then(function () {
    console.log("DataBase: " + dbname + " is connected!");
})["catch"](function (error) {
    console.log(error);
});
app.listen(port, function () {
    console.log("Server running on " + port);
});
//routes
var clientRoutes_1 = require("./routes/clients/clientRoutes");
app.use("/api/clients", clientRoutes_1["default"]);
var appointmentRoutes_1 = require("./routes/appointment/appointmentRoutes");
app.use("/api/appointments", appointmentRoutes_1["default"]);
var serviceProviderRoutes_1 = require("./routes/serviceprovider/serviceProviderRoutes");
app.use("/api/serviceprovider", serviceProviderRoutes_1["default"]);
