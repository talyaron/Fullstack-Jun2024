"use strict";

exports.__esModule = true;

var express_1 = require("express");

var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body

app.use(express_1["default"]["static"]('public')); //routesD

var usersRoutes_1 = require("./routes/usersRoutes");

app.use("/api/users", usersRoutes_1["default"]);
app.listen(port, function () {
  console.log("Server listening on port " + port);
});