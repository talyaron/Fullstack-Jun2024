"use strict";
exports.__esModule = true;
exports.removePost = void 0;
var postsModel_1 = require("../../models/postsModel");
function removePost(req, res) {
    try {
        var postId_1 = req.body.postId;
        var foundPostIndex = postsModel_1.posts.findIndex(function (post) { return post.id === postId_1; });
        if (foundPostIndex !== -1) {
            postsModel_1.posts.splice(foundPostIndex, 1);
            res.json({ message: "Post removed successfully" });
        }
        else {
            res.status(404).json({ error: "Post not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
} //
exports.removePost = removePost;
