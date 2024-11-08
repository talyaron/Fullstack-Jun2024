"use strict";
exports.__esModule = true;
exports.updatePosts = void 0;
var posts_1 = require("../models/posts");
function updatePosts(req, res) {
    var postId = req.params.id;
    var post = req.body.post;
    var postIndex = posts_1.posts.findIndex(function (p) { return p.id === postId; });
    if (postIndex !== -1) {
        posts_1.posts[postIndex] = post;
        res.send({ message: "Post updated successfully", post: post });
    }
    else {
        res.status(404).send({ message: "Post not found." });
    }
}
exports.updatePosts = updatePosts;
