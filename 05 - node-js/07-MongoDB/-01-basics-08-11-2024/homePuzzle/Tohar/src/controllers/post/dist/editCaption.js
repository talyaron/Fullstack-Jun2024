"use strict";
exports.__esModule = true;
exports.editCaption = void 0;
var postModel_1 = require("../../models/postModel");
function editCaption(req, res) {
    try {
        var _a = req.body, caption = _a.caption, id = _a.id;
        var postId_1 = id;
        var post = postModel_1.posts.find(function (id) { return id.id === postId_1; });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.caption = caption;
        return res.json({ message: 'Caption updated successfully', post: post });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    ;
}
exports.editCaption = editCaption;
;
