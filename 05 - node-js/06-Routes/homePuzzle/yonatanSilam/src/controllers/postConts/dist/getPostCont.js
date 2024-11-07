"use strict";
exports.__esModule = true;
exports.getPost = void 0;
var postModel_1 = require("../../models/postModel");
function getPost(req, res) {
    res.send({ allPosts: postModel_1.allPosts });
}
exports.getPost = getPost;
