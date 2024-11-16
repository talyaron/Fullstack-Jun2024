"use strict";
exports.__esModule = true;
exports.editTitlePost = void 0;
var postsModels_1 = require("../../model/posts/postsModels");
function editTitlePost(req, res) {
    try {
        var _a = req.body, id_1 = _a.id, title = _a.title;
        var post = postsModels_1.posts.find(function (p) { return p.id === id_1; });
        if (post) {
            post.title = title;
            console.log('Updated title post:', post);
            res.status(200).json({ message: "Post title updated successfully" });
            console.log("Post updated successfully");
            console.log(postsModels_1.posts);
        }
        else {
            res.status(404).json({ error: "Post not found" });
        }
    }
    catch (err) {
        console.error("Error in editTitle: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.editTitlePost = editTitlePost;
