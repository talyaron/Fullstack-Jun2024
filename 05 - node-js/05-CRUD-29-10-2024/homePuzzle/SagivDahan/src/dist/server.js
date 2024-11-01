"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var posts = [];
// route to send something to the server
app.post("/api/post", function (req, res) {
    try {
        var data = req.body;
        if (!data.posts)
            throw new Error("No post found");
        posts.push('f', data.post);
        console.log(data);
        res.send({ message: "Post created", data: data });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
