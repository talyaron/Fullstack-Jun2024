"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postsRoutes_1 = require("./routes/postsRoutes");
var usersRoutes_1 = require("./routes/usersRoutes");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body
app.use(express_1["default"].static("public")); // serve static files from the public folder
// routes
app.use("/api/posts", postsRoutes_1["default"]); // all routes for posts will start with /api/posts
app.use("/api/users", usersRoutes_1["default"]); // all routes for users will start with /api/users
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
