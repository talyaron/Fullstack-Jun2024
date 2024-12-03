"use strict";
exports.__esModule = true;
exports.editPost = void 0;
var posts_1 = require("../../models/posts");
function editPost(req, res) {
    try {
        var data = req.body;
        if (!data)
            throw new Error("No data found");
        var postId_1 = data.postId;
        var type = data.type;
        var content = data.content;
        var postIndex = posts_1.posts.findIndex(function (post) { return post.id === postId_1; });
        if (postIndex === -1)
            throw new Error("Post not found");
        if (type === "title")
            posts_1.posts[postIndex].title = content;
        else if (type === "text")
            posts_1.posts[postIndex].text = content;
        else if (type === "image")
            posts_1.posts[postIndex].image = content;
        else
            throw new Error("Invalid type");
        res.send({ message: "Post updated successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
}
exports.editPost = editPost;
