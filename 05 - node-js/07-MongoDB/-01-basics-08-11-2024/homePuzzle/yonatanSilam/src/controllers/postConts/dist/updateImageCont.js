"use strict";
exports.__esModule = true;
exports.updateImagePost = void 0;
var postModel_1 = require("../../models/postModel");
function updateImagePost(req, res) {
    try {
        var _a = req.body, imageUrl = _a.imageUrl, id_1 = _a.id;
        if (!imageUrl || !id_1)
            throw new Error("Missing title ");
        var uPost = postModel_1.allPosts.find(function (post) { return post.id == id_1; });
        if (!uPost)
            throw new Error("not find post");
        uPost.imageUrl = imageUrl;
        res.send({ message: "Post received", allPosts: postModel_1.allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
}
exports.updateImagePost = updateImagePost;
