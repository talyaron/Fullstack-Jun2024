"use strict";
exports.__esModule = true;
exports.updatePost = void 0;
var postsModel_1 = require("../../models/postsModel");
function updatePost(req, res) {
    try {
        var _a = req.body, id_1 = _a.id, title = _a.title, desc = _a.desc, img = _a.img;
        var foundPost = postsModel_1.posts.find(function (post) { return post.id === id_1; });
        if (!foundPost) {
            res.json({ error: "No such post found" });
            return;
        }
        if (title !== foundPost.title) {
            foundPost.title = title;
        }
        if (desc !== foundPost.description) {
            foundPost.description = desc;
        }
        if (img && foundPost.img !== img) {
            foundPost.img = img;
        }
        res.json({
            message: "Updated Post " + foundPost.id + " " + foundPost.img + " - " + img + " "
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
} ///update-post
exports.updatePost = updatePost;
