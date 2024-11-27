"use strict";
exports.__esModule = true;
exports.dbUrl = void 0;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
require("dotenv/config");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
exports.dbUrl = process.env.DB_URL;
var database = 'fs-jun24';
mongoose_1["default"].connect(exports.dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
var clientRoutes_1 = require("./routes/clientRoutes");
app.use("/api/client", clientRoutes_1["default"]);
var providerRoutes_1 = require("./routes/providerRoutes");
app.use("/api/provider", providerRoutes_1["default"]);
var appointmentRoutes_1 = require("./routes/appointmentRoutes");
app.use("/api/appointment", appointmentRoutes_1["default"]);
app.listen(port, function () {
    console.log("server listening on port " + port + " ");
});
