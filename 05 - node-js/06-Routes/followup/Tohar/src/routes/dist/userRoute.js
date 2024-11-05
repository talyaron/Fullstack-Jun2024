"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postsModel_1 = require("../models/postsModel");
var router = express_1["default"].Router();
router.post('/add-post', function (req, res) {
    var _a = req.body, caption = _a.caption, imageURL = _a.imageURL;
    console.log('Received POST request:', req.body);
    if (!caption || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    postsModel_1.posts.push({ id: id, caption: caption, imageURL: imageURL });
    console.log('Current posts:', postsModel_1.posts);
    res.status(201).json({ message: "Post added successfully" });
});
router.get('/get-posts', function (req, res) {
    res.json({ posts: postsModel_1.posts });
});
exports["default"] = router;
