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
        var _a = req.body, caption = _a.caption, imageURL = _a.imageURL;
        if (!caption || !imageURL) {
            return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
        }
        var id = crypto_1.randomBytes(16).toString("hex");
        posts.push({ id: id, caption: caption, imageURL: imageURL });
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
        var _a = req.body, caption = _a.caption, id = _a.id;
        var postId_1 = id;
        var post = posts.find(function (id) { return id.id === postId_1; });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.caption = caption;
        return res.json({ message: 'Caption updated successfully', post: post });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app["delete"]('/api/delete-post', function (req, res) {
    try {
        var id = req.body.id;
        var postId_2 = id;
        var index = posts.findIndex(function (id) { return id.id === postId_2; });
        console.log('index', index);
        if (index === -1) {
            return res.status(404).json({ message: 'Post not found' });
        }
        posts.splice(index, 1);
        //find the post in the array and delete it
        return res.json({ message: 'Post deleted successfully', posts: posts });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
