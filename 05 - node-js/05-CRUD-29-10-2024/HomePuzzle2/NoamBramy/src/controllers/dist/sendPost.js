"use strict";
exports.__esModule = true;
exports.sendPost = void 0;
var posts_1 = require("../model/posts/posts");
var addPost_1 = require("./addPost");
var crypto_1 = require("crypto");
function sendPost(req, res) {
    try {
        var _a = req.body, title = _a.title, text = _a.text, image = _a.image;
        if (!title || !text || !image)
            throw new Error("Missing post data");
        var newPost = addPost_1.addPost({ id: crypto_1["default"].randomUUID(), title: title, text: text, image: image });
        posts_1.posts.push(newPost);
        res.send({ message: "Post successfully created", posts: posts_1.posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
}
exports.sendPost = sendPost;
;
