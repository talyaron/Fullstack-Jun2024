"use strict";
exports.__esModule = true;
exports.updateImage = void 0;
var postModel_1 = require("../../models/postModel");
function updateImage(req, res) {
    try {
        var _a = req.body, image = _a.image, id = _a.id;
        var postId_1 = id;
        console.log('id', id);
        var post = postModel_1.posts.find(function (id) { return id.id === postId_1; });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.imageURL = image;
        return res.json({ message: 'image updated successfully', post: post });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.updateImage = updateImage;
;
