"use strict";
exports.__esModule = true;
exports.getPosts = void 0;
var postModel_1 = require("../../Model/postModel");
function getPosts(req, res) {
    try {
        console.log('Currect posts', postModel_1.posts);
        res.send({ existPost: "posts send to client", posts: postModel_1.posts });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getPosts = getPosts;
;
