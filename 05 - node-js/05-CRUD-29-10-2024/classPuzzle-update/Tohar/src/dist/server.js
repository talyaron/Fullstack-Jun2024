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
    try {
        var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
        if (!title || !text || !imageURL) {
            return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
        }
        var id = crypto_1.randomBytes(16).toString("hex");
        posts.push({ id: id, title: title, text: text, imageURL: imageURL });
        res.status(201).json({ message: "Post added successfully" });
    }
    catch (error) {
        console.error("Error in /api/add-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
//updates the post's title
app.patch('/api/update-post', function (req, res) {
    try {
        var _a = req.body, title = _a.title, id = _a.id;
        var postId_1 = id;
        var post = posts.find(function (id) { return id.id === postId_1; });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.title = title;
        return res.json({ message: 'Title updated successfully', post: post });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
