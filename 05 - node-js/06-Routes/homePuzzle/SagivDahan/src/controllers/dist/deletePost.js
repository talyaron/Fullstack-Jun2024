"use strict";
exports.__esModule = true;
exports.deletePost = void 0;
var posts_1 = require("../models/posts");
function deletePost(req, res) {
    var postId = req.params.id;
    var postIndex = posts_1.posts.findIndex(function (post) { return post.id === postId; });
    if (postIndex !== -1) {
        posts_1.posts.splice(postIndex, 1);
        res.send({ message: "Post deleted successfully." });
    }
    else {
        res.status(404).send({ message: "Post not found." });
    }
}
exports.deletePost = deletePost;
