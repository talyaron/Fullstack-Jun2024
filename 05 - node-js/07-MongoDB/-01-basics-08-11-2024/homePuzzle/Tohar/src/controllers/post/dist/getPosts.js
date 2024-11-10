"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var postModel_1 = require("../../models/postModel");
function getPosts(req, res) {
    postModel_1.PostModel.find({})
        .then(function (posts) {
        res.json({ posts: posts });
    });
}
exports.getPosts = getPosts;
;
