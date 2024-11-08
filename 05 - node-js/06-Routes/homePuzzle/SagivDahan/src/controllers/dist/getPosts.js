"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var posts_1 = require("../models/posts");
function getPosts(req, res) {
    try {
        res.json({ posts: posts_1.posts });
    }
    catch (error) {
        console.error("cannot load posts", error);
    }
}
exports.getPosts = getPosts;
