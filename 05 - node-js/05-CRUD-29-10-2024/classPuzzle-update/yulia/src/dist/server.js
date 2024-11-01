"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var crypto_1 = require("crypto");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var posts = [];
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static("public"));
console.log("Server code is running");
// add a new post
app.post("/api/add-post", function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log("Received POST request:", req.body);
    if (!title || !text || !imageURL) {
        return res
            .status(400)
            .json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto_1["default"].randomUUID();
    posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log("Current posts:", posts);
    res.status(201).json({ message: "Post added successfully" });
});
// get all posts
app.get("/api/get-posts", function (req, res) {
    res.json({ posts: posts });
});
// renew the title of a post
app.patch("/api/update-title", function (req, res) {
    console.log("Received request to update title");
    var _a = req.body, id = _a.id, title = _a.title;
    if (!id || !title)
        throw new Error("id and title are required");
    var post = posts.find(function (post) { return post.id === id; });
    if (!post) {
        console.log("Post not found with id:", id);
        return res.status(404).json({ error: "Post not found" });
    }
    post.title = title;
    console.log("Updated post title:", post);
    res.status(200).json({ message: "Title updated successfully" });
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
