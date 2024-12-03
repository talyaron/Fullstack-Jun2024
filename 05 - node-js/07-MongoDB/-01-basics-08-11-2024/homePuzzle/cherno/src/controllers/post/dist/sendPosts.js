"use strict";
exports.__esModule = true;
exports.sendPost = void 0;
var posts_1 = require("../../models/posts");
var usersPosts_1 = require("../../models/usersPosts");
function sendPost(req, res) {
    try {
        var data = req.body.data;
        var user = req.body.user;
        if (!data)
            throw new Error("No post found");
        posts_1.posts.push(data);
        console.log(data.image);
        usersPosts_1.usersPosts.push({ userId: user, postId: data.id });
        res.send({ message: "post received" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
}
exports.sendPost = sendPost;
