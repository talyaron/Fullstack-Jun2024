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
var dbUrl = "mongodb+srv://yonatans02424:NB0YtPMbc0p8GkDS@cluster0.zsbrf.mongodb.net";
var database = 'classPuzzlePets';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
//routesD
var usersRoutes_1 = require("./routes/usersRoutes");
app.use("/api/users", usersRoutes_1["default"]);
var petsRoutes_1 = require("./routes/petsRoutes");
app.use("/api/pets", petsRoutes_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
