"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postsModel_1 = require("../models/postsModel");
var crypto_1 = require("crypto");
var router = express_1["default"].Router();
router.post('/add-post', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, image = _a.image;
    if (!title || !text || !image) {
        return res.status(400).json({ error: "All fields (title, text, image) are required" });
    }
    var id = crypto_1.randomUUID();
    postsModel_1.posts.push({ id: id, title: title, text: text, image: image });
    res.status(201).json({ message: "Post added successfully" });
});
router.get('/get-posts', function (_req, res) {
    res.json({ posts: postsModel_1.posts });
});
router["delete"]('/delete-post', function (req, res) {
    var id = req.body.id;
    if (!id) {
        return res.status(400).json({ error: "Post ID is required" });
    }
    var postIndex = postsModel_1.posts.findIndex(function (post) { return post.id === id; });
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    postsModel_1.posts.splice(postIndex, 1);
    res.status(200).json({ message: "Post deleted successfully" });
});
router.put('/edit-post', function (req, res) {
    var _a = req.body, id = _a.id, title = _a.title, text = _a.text, image = _a.image;
    if (!id) {
        return res.status(400).json({ error: "Post ID is required" });
    }
    var post = postsModel_1.posts.find(function (post) { return post.id === id; });
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
exports["default"] = router;
