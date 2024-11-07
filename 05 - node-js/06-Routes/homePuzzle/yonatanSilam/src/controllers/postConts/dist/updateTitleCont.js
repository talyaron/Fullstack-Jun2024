"use strict";
exports.__esModule = true;
exports.updateTitle = void 0;
var postModel_1 = require("../../models/postModel");
function updateTitle(req, res) {
    try {
        var _a = req.body, title = _a.title, id_1 = _a.id;
        if (!title || !id_1)
            throw new Error("Missing title ");
        var uPost = postModel_1.allPosts.find(function (post) { return post.id == id_1; });
        if (!uPost)
            throw new Error("not find post");
        uPost.title = title;
        res.send({ message: "Post received", allPosts: postModel_1.allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
}
exports.updateTitle = updateTitle;
