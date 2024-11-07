"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userModels_1 = require("../models/userModels");
var router = express_1["default"].Router();
router.post('/add-post', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log('Recieved POST request:', req.body);
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All the fields are empty" });
    }
    var id = crypto.randomUUID();
    userModels_1.posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log('Current posts:', userModels_1.posts);
    res.status(201).json({ message: "Post has been added successfully" });
});
router.get('/get-posts', function (req, res) {
    res.json({ posts: userModels_1.posts });
});
exports["default"] = router;
