"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var posts = [];
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static("public"));
app.post("/api/add-post", function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log("Received POST request:", req.body);
    if (!title || !text || !imageURL) {
        return res
            .status(400)
            .json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log("Current posts:", posts);
    res.status(201).json({ message: "Post added successfully" });
});
app.patch("/api/update-post", function (req, res) {
    var _a = req.body, pId = _a.pId, title = _a.title;
    console.log("Received POST request:", req.body);
    if (!title || !pId) {
        return res
            .status(400)
            .json({ error: "All fields (title, text, imageURL) are required" });
    }
    var foundPost = posts.find(function (post) { return post.id === pId; });
    if (foundPost) {
        foundPost.title = title;
    }
    console.log("Current posts:", posts);
    res.status(201).json({ message: "Post added successfully" });
});
app["delete"]("/api/delete-post", function (req, res) {
    var pId = req.body.pId;
    console.log("Received POST request:", req.body);
    if (!pId) {
        return res
            .status(400)
            .json({ error: "All fields (id) are required" });
    }
    var indexOfPost = posts.findIndex(function (post) { return post.id === pId; });
    if (indexOfPost !== -1) {
        posts.splice(indexOfPost, 1);
    }
    console.log("Current posts:", posts);
    res.status(201).json({ message: "Post added successfully" });
});
app.get("/api/get-posts", function (req, res) {
    res.json({ posts: posts });
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
