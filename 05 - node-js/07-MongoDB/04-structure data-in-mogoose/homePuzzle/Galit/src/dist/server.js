"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
// MongoDB connection
var dbUrl = 'mongodb+srv://galitccga:q4wlV111QcHSFkDZ@cluster0.sevm84o.mongodb.net';
var database = 'client-app';
mongoose_1["default"]
    .connect(dbUrl + "/" + database)
    .then(function () {
    console.info('Connected to MongoDB');
})["catch"](function (error) {
    console.error('Error connecting to MongoDB:', error);
});
var ClientRoute_1 = require("./routes/ClientRoute");
app.use("/api/clients", ClientRoute_1["default"]);
var AdminRoute_1 = require("./routes/AdminRoute");
app.use("/api/admins", AdminRoute_1["default"]);
var ServiceRoute_1 = require("./routes/ServiceRoute");
app.use("/api/services", ServiceRoute_1["default"]);
var AppointmentRoute_1 = require("./routes/AppointmentRoute");
app.use("/api/appointments", AppointmentRoute_1["default"]);
app.listen(port, function () {
    console.log("Server is running on port " + port);
});
