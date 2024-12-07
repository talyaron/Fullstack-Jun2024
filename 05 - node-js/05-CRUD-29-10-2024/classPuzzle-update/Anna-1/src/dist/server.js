"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var posts = [];
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.post('/api/add-post', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log('Received POST request:', req.body);
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log('Current posts:', posts);
    res.status(201).json({ message: "Post added successfully" });
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.patch('/api/edit-posts', function (req, res) {
    try {
        var _a = req.body, id_1 = _a.id, title = _a.title;
        if (!id_1)
            throw new Error("id not found");
        if (!title)
            throw new Error("title not found");
        var post = posts.find(function (post) { return post.id === id_1; });
        if (!post) {
            throw new Error("post not found");
        }
        post.title = title;
        console.log(posts);
        res.send({ message: "post updated", posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app["delete"]('/api/delete-posts', function (req, res) {
    try {
        var id_2 = req.body.id;
        console.log('current posts', posts);
        console.log('deleted post id', id_2);
        if (!id_2)
            throw new Error("Post not found");
        var deleteIndex = posts.findIndex(function (post) { return post.id === id_2; });
        if (deleteIndex == -1) {
            throw new Error("post not found");
        }
        console.log(deleteIndex);
        posts.splice(deleteIndex, 1);
        console.log('After delete posts', posts);
        res.json("post delete succsesfully");
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
