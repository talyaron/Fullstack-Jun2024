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
router.get('/get-posts', function (req, res) {
    res.json({ posts: postsModel_1.posts });
});
exports["default"] = router;
