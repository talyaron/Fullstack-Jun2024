"use strict";
exports.__esModule = true;
exports.addPost = void 0;
var postsModel_1 = require("../../models/posts/postsModel");
function addPost(req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL, username = _a.username;
    if (!title || !text || !imageURL || !username) {
        return res.status(400).json({ error: "All fields are required" });
    }
    var id = crypto.randomUUID();
    var newPost = { id: id, title: title, text: text, imageURL: imageURL, username: username };
    postsModel_1.posts.push(newPost);
    console.log("New post added:", newPost);
    res.status(201).json({ message: "Post added successfully", post: newPost });
}
exports.addPost = addPost;
