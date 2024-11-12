"use strict";
exports.__esModule = true;
exports.deletePost = void 0;
var postModel_1 = require("../../models/postModel");
function deletePost(req, res) {
    try {
        var id_1 = req.body.id;
        if (!id_1)
            throw new Error("Missing title ");
        var uPostIndex = postModel_1.allPosts.findIndex(function (post) { return post.id == id_1; });
        if (uPostIndex == -1)
            throw new Error("not find post");
        postModel_1.allPosts.splice(uPostIndex, 1);
        res.send({ message: "Post received", allPosts: postModel_1.allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
}
exports.deletePost = deletePost;
