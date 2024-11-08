"use strict";
exports.__esModule = true;
exports.createPost = void 0;
var crypto_1 = require("crypto");
var postModel_1 = require("../../models/postModel");
function createPost(req, res) {
    try {
        var _a = req.body, caption = _a.caption, imageURL = _a.imageURL;
        if (!caption || !imageURL) {
            return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
        }
        var id = crypto_1.randomBytes(16).toString("hex");
        postModel_1.posts.push({ id: id, caption: caption, imageURL: imageURL });
        res.status(201).json({ message: "Post added successfully" });
    }
    catch (error) {
        console.error("Error in /api/add-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.createPost = createPost;
