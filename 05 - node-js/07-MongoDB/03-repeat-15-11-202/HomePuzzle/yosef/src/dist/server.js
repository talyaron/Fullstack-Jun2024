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
//DB
var dbUrl = "mongodb+srv://yosefib88:FYdIUMhMIwGscX4y@cluster0.b5vsm.mongodb.net";
var database = 'Clients & Service Provider & Appoitments';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
//routes
var clientRoutes_1 = require("./routes/clientsRoutes/clientRoutes");
app.use("/api/clients", clientRoutes_1["default"]);
var serviceProviderRoutes_1 = require("./routes/serviceProvider/serviceProviderRoutes");
app.use("/api/serviceProviders", serviceProviderRoutes_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
