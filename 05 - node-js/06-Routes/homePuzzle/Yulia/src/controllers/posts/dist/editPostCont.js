"use strict";
exports.__esModule = true;
exports.editPost = void 0;
var postsModel_1 = require("../../models/posts/postsModel");
function editPost(req, res) {
    var id = req.params.id;
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    var post = postsModel_1.posts.find(function (post) { return post.id === id; });
    if (post) {
        // Update only the fields that are provided
        if (title)
            post.title = title;
        if (text)
            post.text = text;
        if (imageURL)
            post.imageURL = imageURL;
        res.json({ message: "Post updated successfully", post: post });
    }
    else {
        res.status(404).json({ message: "Post not found" });
    }
}
exports.editPost = editPost;
