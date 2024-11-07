"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var posts_1 = require("../../models/posts");
function getPosts(req, res) {
    try {
        res.send({ posts: posts_1.posts });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getPosts = getPosts;
