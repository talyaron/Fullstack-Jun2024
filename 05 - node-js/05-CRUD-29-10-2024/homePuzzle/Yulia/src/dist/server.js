"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
var posts = [];
app.get("/", function (req, res) {
    res.send("Server is running");
});
app.get("/api/posts", function (req, res) {
    res.json(posts);
});
app.post("/api/posts", function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageUrl = _a.imageUrl;
    if (!title || !text || !imageUrl) {
        return res
            .status(400)
            .json({ error: "Title, text, and image URL are required." });
    }
    var newPost = { id: posts.length + 1, title: title, text: text, imageUrl: imageUrl };
    posts.push(newPost);
    res.status(201).json(newPost);
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});
