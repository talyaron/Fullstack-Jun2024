"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var posts = [];
app.post("/api/send-posts", function (req, res) {
    try {
        var postData = req.body;
        if (!postData.dataTitle)
            throw new Error("Title not found");
        if (!postData.dataDes)
            throw new Error("Des not found");
        posts.push({ title: postData.dataTitle, des: postData.dataDes, img: postData.dataImg, id: postData.id });
        res.send({ message: "Post add seccusefuly", posts: posts });
        console.log('Updated posts:', posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
});
app.patch("/api/edit-title", function (req, res) {
    try {
        var _a = req.body, id_1 = _a.id, title_1 = _a.title, des = _a.des;
        if (!id_1 || !title_1)
            throw new Error("post not found");
        var post = posts.find(function (post) { return post.id === id_1; });
        if (!post) {
            console.log("post not found", id_1);
            return res.status(404).json({ success: false, message: "Post with id " + id_1 + " not found." });
        }
        post.title = title_1;
        console.log('Updated post:', post, title_1);
        res.send({ message: "Title updated successfully", posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app.patch("/api/edit-text", function (req, res) {
    try {
        var _a = req.body, id_2 = _a.id, des = _a.des;
        if (!id_2 || !des)
            throw new Error("post not found");
        var post = posts.find(function (post) { return post.id === id_2; });
        if (!post) {
            console.log("post not found", id_2);
            return res.status(404).json({ success: false, message: "Post with id " + id_2 + " not found." });
        }
        post.des = des;
        console.log('Updated post:', post, des);
        res.send({ message: "Title updated successfully", posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app.get("/api/get-posts", function (req, res) {
    try {
        console.log('Currect posts', posts);
        res.send({ existPost: "posts send to client", posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app["delete"]("/api/delete-posts", function (req, res) {
    var id = req.body.id;
    if (!id)
        throw new Error("post not found");
    var deletedIndex = posts.findIndex(function (post) { return post.id === id; });
    if (deletedIndex == -1) {
        throw new Error("Post not found");
    }
    posts.splice(deletedIndex, 1);
    res.json("Post deleted from the server");
});
app.patch("/api/editImg-posts", function (req, res) {
    try {
        var _a = req.body, id_3 = _a.id, newImg = _a.newImg;
        if (!id_3)
            throw new Error("post not found");
        var post = posts.find(function (post) { return post.id === id_3; });
        if (!post) {
            console.log("post not found", id_3);
            return res.status(404).json({ success: false, message: "Post with id " + id_3 + " not found." });
        }
        post.img = newImg;
        console.log('Updated post:', post, newImg);
        res.send({ message: "Img updated successfully", posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
