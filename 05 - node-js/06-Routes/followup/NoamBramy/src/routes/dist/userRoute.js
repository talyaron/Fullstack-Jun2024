"use strict";
exports.__esModule = true;
var express_1 = require("express");
var posts_1 = require("../model/posts/posts");
var router = express_1["default"].Router();
router.post('/add-post', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log('Received POST request:', req.body);
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    posts_1["default"].push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log('Current posts:', posts_1["default"]);
    res.status(201).json({ message: "Post added successfully" });
});
router.get('/get-posts', function (req, res) {
    res.json({ posts: posts_1["default"] });
});
exports["default"] = router;
