"use strict";
exports.__esModule = true;
exports.addPost = void 0;
var postModel_1 = require("../../model/post/postModel");
function addPost(req, res) {
    try {
        var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
        console.log('Received POST request:', req.body);
        if (!title || !text || !imageURL) {
            return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
        }
        var id = crypto.randomUUID();
        postModel_1.posts.push({ id: id, title: title, text: text, imageURL: imageURL });
        console.log('Current posts:', postModel_1.posts);
        res.status(201).json({ message: "Post added successfully" });
    }
    catch (error) {
        console.error('Error while adding post:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.addPost = addPost;
