"use strict";
exports.__esModule = true;
exports.getUserPosts = void 0;
var posts_1 = require("../../models/posts");
var usersPosts_1 = require("../../models/usersPosts");
function getUserPosts(req, res) {
    try {
        var user_1 = req.query.user;
        if (!user_1)
            throw new Error("User not found");
        var userPostsId = usersPosts_1.usersPosts.filter(function (up) { return up.userId === user_1; });
        var userPosts = userPostsId.map(function (up) { return posts_1.posts.find(function (post) { return post.id === up.postId; }); });
        res.send({ posts: userPosts });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getUserPosts = getUserPosts;
