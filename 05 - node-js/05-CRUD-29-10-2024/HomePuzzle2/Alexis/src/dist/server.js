"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var crypto_1 = require("crypto");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var posts = [];
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.post('/api/add-post', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, image = _a.image;
    if (!title || !text || !image) {
        return res.status(400).json({ error: "All fields (title, text, image) are required" });
    }
    var id = crypto_1.randomBytes(16).toString("hex");
    posts.push({ id: id, title: title, text: text, image: image });
    res.status(201).json({ message: "Post added successfully" });
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.put('/api/edit-post', function (req, res) {
    var _a = req.body, id = _a.id, title = _a.title, text = _a.text, image = _a.image;
    var post = posts.find(function (p) { return p.id === id; });
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    if (title !== undefined)
        post.title = title;
    if (text !== undefined)
        post.text = text;
    if (image !== undefined)
        post.image = image;
    res.status(200).json({ message: "Post updated successfully" });
});
app["delete"]('/api/delete-post', function (req, res) {
    var id = req.body.id;
    var index = posts.findIndex(function (p) { return p.id === id; });
    if (index === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    posts.splice(index, 1);
    res.status(200).json({ message: "Post deleted successfully" });
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
