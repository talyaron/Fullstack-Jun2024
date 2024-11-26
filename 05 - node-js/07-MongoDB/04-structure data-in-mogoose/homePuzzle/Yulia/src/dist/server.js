"use strict";
exports.__esModule = true;
var express_1 = require("express");
var clientRoutes_1 = require("./routes/clientRoutes/clientRoutes");
var mongoose_1 = require("mongoose");
var appointmentRouters_1 = require("./routes/appointmentsRouters/appointmentRouters");
var serviceProviderRouters_1 = require("./routes/serviceProviderRouters/serviceProviderRouters");
var serviceRouters_1 = require("./routes/serviceRouters/serviceRouters");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
app.get("/", function (req, res) {
    res.send("Hello World!");
});
var dbURI = "mongodb+srv://Yulia:1XZsJjMngOQqqtTF@cluster0.gl27q.mongodb.net";
var database = "clients";
mongoose_1["default"]
    .connect(dbURI + "/" + database)
    .then(function () {
    console.log("Connected to the database");
})["catch"](function (err) {
    console.log("Failed to connect to the database", err);
});
// routes
app.use("/api/clients", clientRoutes_1.clientRouter);
app.use("/api/appointments", appointmentRouters_1["default"]);
app.use("/api/service-providers", serviceProviderRouters_1["default"]);
app.use("/api/services", serviceRouters_1["default"]);
app.listen(port, function () {
    console.log("App listening on port " + port);
});
