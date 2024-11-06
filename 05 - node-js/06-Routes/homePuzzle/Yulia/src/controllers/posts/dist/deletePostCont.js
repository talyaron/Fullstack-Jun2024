"use strict";
exports.__esModule = true;
exports.deletePost = void 0;
var postsModel_1 = require("../../models/posts/postsModel");
function deletePost(req, res) {
    var id = req.params.id;
    var index = postsModel_1.posts.findIndex(function (post) { return post.id === id; });
    if (index !== -1) {
        postsModel_1.posts.splice(index, 1);
        res.json({ message: "Post deleted successfully" });
    }
    else {
        res.status(404).json({ message: "Post not found" });
    }
}
exports.deletePost = deletePost;
