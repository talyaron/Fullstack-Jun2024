"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
var posts = [];
app.post("/api/add-post", function (req, res) {
    try {
        var post = req.body.post;
        if (!post)
            throw new Error("No post found");
        posts.push(post);
        console.log({ post: post });
        res.send({ message: "Post created", post: post });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
});
app["delete"]("/api/delete-post/:id", function (req, res) {
    var postId = req.params.id;
    var postIndex = posts.findIndex(function (post) { return post.id === postId; });
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.send({ message: "Post deleted successfully." });
    }
    else {
        res.status(404).send({ message: "Post not found." });
    }
});
app.put("/api/update-post/:id", function (req, res) {
    var postId = req.params.id;
    var post = req.body.post;
    var postIndex = posts.findIndex(function (p) { return p.id === postId; });
    if (postIndex !== -1) {
        posts[postIndex] = post;
        res.send({ message: "Post updated successfully", post: post });
    }
    else {
        res.status(404).send({ message: "Post not found." });
    }
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.listen(port, function () {
    console.log("Server listening on: https://localhost:" + port);
});
