"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var postsModel_1 = require("../../models/postsModel");
var userModel_1 = require("../../models/userModel");
function getPosts(req, res) {
    try {
        var key_1 = req.body.key;
        var keyOfUser_1 = userModel_1.users.find(function (user) { return user.key === key_1; });
        if (!keyOfUser_1) {
            res.json({ error: "invalid key", throwAway: "bad key" });
            return;
        }
        var postsOfAll = postsModel_1.posts.map(function (post) {
            if (post.creatorId === keyOfUser_1.id) {
                post.userMade = true;
            }
            else {
                post.userMade = false;
            }
            return post;
        });
        res.json({ postsOfAll: postsOfAll });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
} ///
exports.getPosts = getPosts;
