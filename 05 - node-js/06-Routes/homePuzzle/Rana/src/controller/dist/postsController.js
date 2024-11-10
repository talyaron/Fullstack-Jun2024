"use strict";
// postsController.ts
exports.__esModule = true;
exports.deletePost = exports.updatePost = exports.getPosts = exports.addPost = void 0;
var postsModel_1 = require("../models/postsModel");
exports.addPost = function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields are required" });
    }
    postsModel_1.posts.push({ title: title, text: text, imageURL: imageURL });
    console.log("Post added successfully");
    res.status(201).json({ message: "Post added successfully" });
};
exports.getPosts = function (req, res) {
    res.json({ posts: postsModel_1.posts });
};
exports.updatePost = function (req, res) {
    var index = parseInt(req.params.index);
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    if (isNaN(index) || index < 0 || index >= postsModel_1.posts.length) {
        return res.status(400).json({ error: "Invalid index" });
    }
    if (title)
        postsModel_1.posts[index].title = title;
    if (text)
        postsModel_1.posts[index].text = text;
    if (imageURL)
        postsModel_1.posts[index].imageURL = imageURL;
    console.log("Post updated successfully");
    res.status(200).json({ message: "Post updated successfully" });
};
exports.deletePost = function (req, res) {
    var index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= postsModel_1.posts.length) {
        return res.status(400).json({ error: "Invalid index" });
    }
    postsModel_1.posts.splice(index, 1);
    console.log("Post deleted successfully");
    res.status(200).json({ message: "Post deleted successfully" });
};
