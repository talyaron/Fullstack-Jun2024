"use strict";
exports.__esModule = true;
exports.getPost = void 0;
var posts_1 = require("../model/posts/posts");
function getPost(req, res) {
    try {
        var postsData = posts_1.posts.map(function (post) { return ({
            id: post.id,
            title: post.title,
            text: post.text,
            image: post.image
        }); });
        res.send(postsData);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving posts');
    }
}
exports.getPost = getPost;
;
