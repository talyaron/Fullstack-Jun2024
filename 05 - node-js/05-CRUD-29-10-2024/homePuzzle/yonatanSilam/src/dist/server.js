"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
// import { userConnect } from '../public/index';
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static(path_1["default"].join(__dirname, "../public"))); // ?
app.use(express_1["default"].json());
var allPosts = [];
var allPostUser = [];
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
app.get("/api/get-posts", function (req, res) {
    res.send({ allPosts: allPosts });
});
app.post("/api/send-post", function (req, res) {
    try {
        var _a = req.body, imageUrl = _a.imageUrl, text = _a.text, title_1 = _a.title;
        if (!imageUrl || !text || !title_1)
            throw new Error("Missing imageUrl or text");
        var id = crypto.randomUUID();
        var newPost = { imageUrl: imageUrl, text: text, title: title_1, id: id };
        allPosts.push(newPost); //?
        // const postUser: PostUser = { newPost, userConnect };
        // allPostUser.push(postUser)
        res.send({ message: "Post received", allPosts: allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
});
app.patch("/api/update-post", function (req, res) {
    try {
        var _a = req.body, title_2 = _a.title, id_1 = _a.id;
        if (!title_2 || !id_1)
            throw new Error("Missing title ");
        var uPost = allPosts.find(function (post) { return post.id == id_1; });
        if (!uPost)
            throw new Error("not find post");
        uPost.title = title_2;
        res.send({ message: "Post received", allPosts: allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
});
app.patch("/api/updateText-post", function (req, res) {
    try {
        var _a = req.body, text = _a.text, id_2 = _a.id;
        if (!text || !id_2)
            throw new Error("Missing title ");
        var uPost = allPosts.find(function (post) { return post.id == id_2; });
        if (!uPost)
            throw new Error("not find post");
        uPost.text = text;
        res.send({ message: "Post received", allPosts: allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
});
app.patch("/api/updateImage-post", function (req, res) {
    try {
        var _a = req.body, imageUrl = _a.imageUrl, id_3 = _a.id;
        if (!imageUrl || !id_3)
            throw new Error("Missing title ");
        var uPost = allPosts.find(function (post) { return post.id == id_3; });
        if (!uPost)
            throw new Error("not find post");
        uPost.imageUrl = imageUrl;
        res.send({ message: "Post received", allPosts: allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
});
app["delete"]("/api/delete-post", function (req, res) {
    try {
        var id_4 = req.body.id;
        if (!id_4)
            throw new Error("Missing title ");
        var uPostIndex = allPosts.findIndex(function (post) { return post.id == id_4; });
        if (uPostIndex == -1)
            throw new Error("not find post");
        allPosts.splice(uPostIndex, 1);
        res.send({ message: "Post received", allPosts: allPosts });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + error.message });
    }
});
