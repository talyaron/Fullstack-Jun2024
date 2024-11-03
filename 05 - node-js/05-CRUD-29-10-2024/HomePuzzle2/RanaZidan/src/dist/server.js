"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var cors = require('cors');
app.use(cors());
var posts = [];
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.post('/api/add-post', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields are required" });
    }
    posts.push({ title: title, text: text, imageURL: imageURL });
    res.status(201).json({ message: "Post added successfully" });
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.put('/api/update-post/:index', function (req, res) {
    var index = parseInt(req.params.index);
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    if (isNaN(index) || index < 0 || index >= posts.length) {
        return res.status(400).json({ error: "Invalid index" });
    }
    if (title)
        posts[index].title = title;
    if (text)
        posts[index].text = text;
    if (imageURL)
        posts[index].imageURL = imageURL;
    res.status(200).json({ message: "Post updated successfully" });
});
app["delete"]('/api/delete-post/:index', function (req, res) {
    var index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= posts.length) {
        return res.status(400).json({ error: "Invalid index" });
    }
    posts.splice(index, 1);
    res.status(200).json({ message: "Post deleted successfully" });
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
