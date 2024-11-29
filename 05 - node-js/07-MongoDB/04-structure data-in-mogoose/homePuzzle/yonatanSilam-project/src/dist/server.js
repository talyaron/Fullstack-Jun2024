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
var dbUrl = "mongodb+srv://yonatans02424:NB0YtPMbc0p8GkDS@cluster0.zsbrf.mongodb.net";
var database = 'homePuzzle-appointment';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
var userRoutes_1 = require("./routes/userRoutes");
app.use("/api/users", userRoutes_1["default"]);
var sPRoutes_1 = require("./routes/sPRoutes");
app.use("/api/sP", sPRoutes_1["default"]);
var appointmentRoutes_1 = require("./routes/appointmentRoutes");
app.use("/api/appointment", appointmentRoutes_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
