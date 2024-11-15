"use strict";
exports.__esModule = true;
exports.getPost = void 0;
var postModel_1 = require("../../model/post/postModel");
function getPost(req, res) {
    res.json({ posts: postModel_1.posts });
}
exports.getPost = getPost;
