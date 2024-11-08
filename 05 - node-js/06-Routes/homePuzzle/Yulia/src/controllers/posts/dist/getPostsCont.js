"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var postsModel_1 = require("../../models/posts/postsModel");
function getPosts(req, res) {
    var username = req.query.username; // Get the username from the query string
    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }
    var userPosts = postsModel_1.posts.filter(function (post) { return post.username === username; });
    res.json({ posts: userPosts });
}
exports.getPosts = getPosts;
