"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var postsModel_1 = require("../../models/posts/postsModel");
function getPosts(req, res) {
    res.json({ posts: postsModel_1.posts });
}
exports.getPosts = getPosts;
