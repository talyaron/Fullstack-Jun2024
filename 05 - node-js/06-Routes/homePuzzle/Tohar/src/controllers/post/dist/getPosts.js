"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var postModel_1 = require("../../models/postModel");
function getPosts(req, res) {
    res.json({ posts: postModel_1.posts });
}
exports.getPosts = getPosts;
;
