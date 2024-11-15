"use strict";
exports.__esModule = true;
exports.editPost = void 0;
var postsModel_1 = require("../../models/posts/postsModel");
function editPost(req, res) {
    var id = req.params.id;
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL, username = _a.username; // get username from request body to check authorization
    console.log("Received username:", username); // log the username to check if it is received
    console.log("Post ID:", id);
    var post = postsModel_1.posts.find(function (post) { return post.id === id; });
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    console.log("Post found:", post);
    console.log("Post owner username:", post.username); // log the post owner's username
    // check if the user is the owner of the post
    if (post.username !== username) {
        console.log("Authorization failed: user is not the owner of the post"); // log the authorization failure
        return res
            .status(403)
            .json({ error: "You are not authorized to edit this post" });
    }
    // replace the post with the updated data
    if (title)
        post.title = title;
    if (text)
        post.text = text;
    if (imageURL)
        post.imageURL = imageURL;
    console.log("Updated post:", post); // log the updated post
    res.json({ message: "Post updated successfully", post: post });
}
exports.editPost = editPost;
