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
// Middleware to parse JSON and serve static files
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
app.get("/", function (req, res) {
    res.redirect("/clients"); // redirect to the clients page
});
// Serve static pages for different sections
app.get("/clients", function (req, res) {
    res.sendFile("index.html", { root: "public/clients" });
});
app.get("/appointments", function (req, res) {
    res.sendFile("index.html", { root: "public/appointments" });
});
app.get("/service-providers", function (req, res) {
    res.sendFile("index.html", { root: "public/serviceProviders" });
});
app.get("/services", function (req, res) {
    res.sendFile("index.html", { root: "public/services" });
});
// MongoDB connection
var dbURI = "mongodb+srv://Yulia:1XZsJjMngOQqqtTF@cluster0.gl27q.mongodb.net";
var database = "clients";
mongoose_1["default"]
    .connect(dbURI + "/" + database)
    .then(function () {
    console.log("Connected to the database");
})["catch"](function (err) {
    console.log("Failed to connect to the database", err);
});
// API routes
app.use("/api/clients", clientRoutes_1.clientRouter);
app.use("/api/appointments", appointmentRouters_1["default"]);
app.use("/api/service-providers", serviceProviderRouters_1["default"]);
app.use("/api/services", serviceRouters_1["default"]);
// Start the server
app.listen(port, function () {
    console.log("App listening on port " + port);
});
