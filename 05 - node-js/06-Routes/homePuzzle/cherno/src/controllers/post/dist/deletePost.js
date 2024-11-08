"use strict";
exports.__esModule = true;
exports.deletePost = void 0;
var posts_1 = require("../../models/posts");
var usersPosts_1 = require("../../models/usersPosts");
function deletePost(req, res) {
    try {
        var id_1 = req.body.id;
        var postIndex = posts_1.posts.findIndex(function (post) { return post.id === id_1; });
        if (postIndex === -1)
            throw new Error("Post not found");
        usersPosts_1.usersPosts.forEach(function (up, index) { if (up.postId === id_1)
            usersPosts_1.usersPosts.splice(index, 1); });
        posts_1.posts.splice(postIndex, 1);
        res.send({ message: "Post deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
}
exports.deletePost = deletePost;
