"use strict";
exports.__esModule = true;
exports.updateText = void 0;
var postModel_1 = require("../../models/postModel");
function updateText(req, res) {
    try {
        var _a = req.body, text = _a.text, id_1 = _a.id;
        if (!text || !id_1)
            throw new Error("Missing title ");
        var uPost = postModel_1.allPosts.find(function (post) { return post.id == id_1; });
        if (!uPost)
            throw new Error("not find post");
        uPost.text = text;
        res.send({ message: "Post received", allPosts: postModel_1.allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
}
exports.updateText = updateText;
