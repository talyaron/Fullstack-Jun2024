"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
//DB
var dbUrl = "";
var database = 'apointme';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
//routes
var clientRoutes_1 = require("./routes/client/clientRoutes");
app.use("/api/clients", clientRoutes_1["default"]);
var apointmentRoutes_1 = require("./routes/apointment/apointmentRoutes");
app.use("/api/apointments", apointmentRoutes_1["default"]);
app.listen(port, function () {
    console.log("app listening on port " + port);
});
