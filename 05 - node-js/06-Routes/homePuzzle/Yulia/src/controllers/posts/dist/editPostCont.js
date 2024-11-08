"use strict";
exports.__esModule = true;
exports.editPost = void 0;
var postsModel_1 = require("../../models/posts/postsModel");
function editPost(req, res) {
    var id = req.params.id;
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL, username = _a.username; // Get the post data from the request body
    var post = postsModel_1.posts.find(function (post) { return post.id === id; });
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    // Check if the user is authorized to edit the post
    if (post.username !== username) {
        return res
            .status(403)
            .json({ error: "You are not authorized to edit this post" });
    }
    // Update the post data if new data is provided in the request body 
    if (title)
        post.title = title;
    if (text)
        post.text = text;
    if (imageURL)
        post.imageURL = imageURL;
    res.json({ message: "Post updated successfully", post: post });
}
exports.editPost = editPost;
