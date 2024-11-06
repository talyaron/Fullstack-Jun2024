"use strict";
exports.__esModule = true;
exports.deletePost = void 0;
var posts_1 = require("../model/posts/posts");
function deletePost(req, res) {
    try {
        var id_1 = req.params.id;
        var postIndex = posts_1.posts.findIndex(function (post) { return post.id === id_1; });
        if (postIndex === -1)
            return res.status(404).send('Post not found');
        posts_1.posts.splice(postIndex, 1);
        res.send({ message: 'Post successfully deleted', posts: posts_1.posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
}
exports.deletePost = deletePost;
