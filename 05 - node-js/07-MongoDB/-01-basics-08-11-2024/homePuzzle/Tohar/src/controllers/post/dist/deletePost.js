"use strict";
exports.__esModule = true;
exports.deletePost = void 0;
var postModel_1 = require("../../models/postModel");
function deletePost(req, res) {
    var id = req.body.id;
    var postId = id;
    postModel_1.PostModel.deleteOne({ id: postId })["catch"](function (err) {
        console.error('Error deleting post:', err);
    });
    return res.json({ message: 'Post deleted successfully', posts: postModel_1.posts });
}
exports.deletePost = deletePost;
;
