"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static((path_1["default"].join(__dirname, '../public')))); // ?
app.use(express_1["default"].json());
var allPosts = [];
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
app.get('/api/get-posts', function (req, res) {
    res.send({ allPosts: allPosts });
});
app.post("/api/send-post", function (req, res) {
    try {
        var _a = req.body, imageUrl = _a.imageUrl, text = _a.text;
        if (!imageUrl || !text)
            throw new Error("Missing imageUrl or text");
        var newPost = { imageUrl: imageUrl, text: text };
        allPosts.push(newPost);
        res.send({ message: "Post received", allPosts: allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
});
