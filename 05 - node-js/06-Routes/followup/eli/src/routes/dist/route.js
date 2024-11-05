"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var model_1 = require("../model/model");
router.post("/api/add-post", function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log("Received POST request:", req.body);
    if (!title || !text || !imageURL) {
        return res
            .status(400)
            .json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    model_1.posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log("Current posts:", model_1.posts);
    res.status(201).json({ message: "Post added successfully" });
});
router.patch("/api/update-post", function (req, res) {
    var _a = req.body, pId = _a.pId, title = _a.title;
    console.log("Received POST request:", req.body);
    if (!title || !pId) {
        return res
            .status(400)
            .json({ error: "All fields (title, text, imageURL) are required" });
    }
    var foundPost = model_1.posts.find(function (post) { return post.id === pId; });
    if (foundPost) {
        foundPost.title = title;
    }
    console.log("Current posts:", model_1.posts);
    res.status(201).json({ message: "Post added successfully" });
});
router["delete"]("/api/delete-post", function (req, res) {
    var pId = req.body.pId;
    console.log("Received POST request:", req.body);
    if (!pId) {
        return res
            .status(400)
            .json({ error: "All fields (id) are required" });
    }
    var indexOfPost = model_1.posts.findIndex(function (post) { return post.id === pId; });
    if (indexOfPost !== -1) {
        model_1.posts.splice(indexOfPost, 1);
    }
    console.log("Current posts:", model_1.posts);
    res.status(201).json({ message: "Post added successfully" });
});
router.get("/api/get-posts", function (req, res) {
    res.json({ posts: model_1.posts });
});
exports["default"] = router;
