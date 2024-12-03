"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cookie_parser_1 = require("cookie-parser");
var clientRoutes_1 = require("./routes/clients/clientRoutes");
var productRoute_1 = require("./routes/products/productRoute");
var commentsRoute_1 = require("./routes/comments/commentsRoute");
var purchaseRouter_1 = require("./routes/purchase/purchaseRouter");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.use(cookie_parser_1["default"]());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//DB
var dbUrl = "mongodb+srv://toharkenin:Q9cij3M4GHk%409Sx@cluster0.bbpiv.mongodb.net";
var database = 'fs-jun24';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
//routes
app.use("/api/clients", clientRoutes_1["default"]);
app.use("/api/products", productRoute_1["default"]);
app.use("/api/comments", commentsRoute_1["default"]);
app.use("/api/purchase", purchaseRouter_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
