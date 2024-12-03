"use strict";
exports.__esModule = true;
exports.deletePost = void 0;
var postModel_1 = require("../../models/postModel");
function deletePost(req, res) {
    try {
        var id = req.body.id;
        var postId_1 = id;
        var index = postModel_1.posts.findIndex(function (id) { return id.id === postId_1; });
        console.log('index', index);
        if (index === -1) {
            return res.status(404).json({ message: 'Post not found' });
        }
        postModel_1.posts.splice(index, 1);
        //find the post in the array and delete it
        return res.json({ message: 'Post deleted successfully', posts: postModel_1.posts });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.deletePost = deletePost;
