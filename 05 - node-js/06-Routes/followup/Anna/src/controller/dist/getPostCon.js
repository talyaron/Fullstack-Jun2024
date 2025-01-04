"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var posts_1 = require("../Model/posts");
function getPosts(req, res) {
    res.json({ posts: posts_1.posts });
}
exports.getPosts = getPosts;
;
