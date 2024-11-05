"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.updatePost = void 0;
var posts_1 = require("../model/posts/posts");
function updatePost(req, res) {
    try {
        var id_1 = req.params.id;
        var _a = req.body, title = _a.title, text = _a.text, image = _a.image;
        var postIndex = posts_1.posts.findIndex(function (post) { return post.id === id_1; });
        if (postIndex === -1)
            return res.status(404).send('Post not found');
        posts_1.posts[postIndex] = __assign(__assign({}, posts_1.posts[postIndex]), { title: title, text: text, image: image });
        res.send({ message: 'Post successfully updated', posts: posts_1.posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
}
exports.updatePost = updatePost;
