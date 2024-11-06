"use strict";
exports.__esModule = true;
exports.addPost = void 0;
var postModel_1 = require("../../models/postModel");
function addPost(req, res) {
    try {
        var _a = req.body, imageUrl = _a.imageUrl, text = _a.text, title = _a.title;
        if (!imageUrl || !text || !title)
            throw new Error("Missing imageUrl or text");
        var id = crypto.randomUUID();
        var newPost = { imageUrl: imageUrl, text: text, title: title, id: id };
        postModel_1.allPosts.push(newPost); //?
        // const postUser: PostUser = { newPost, userConnect };
        // allPostUser.push(postUser)
        res.send({ message: "Post received", allPosts: postModel_1.allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
}
exports.addPost = addPost;
