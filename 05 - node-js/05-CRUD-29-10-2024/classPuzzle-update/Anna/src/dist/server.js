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
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
});
app.patch("/api/edit-posts", function (req, res) {
    try {
        var _a = req.body, id_1 = _a.id, title_1 = _a.title, allPosts = _a.allPosts;
        if (!id_1 || !title_1)
            throw new Error("post not found");
        var post = posts.find(function (post) { return post.id === id_1; });
        if (!post) {
            console.log("post not found", id_1);
            return res.status(404).json({ success: false, message: "Post with id " + id_1 + " not found." });
        }
        post.title = title_1;
        res.send({ message: "Title updated successfully", posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app.get("/api/get-posts", function (req, res) {
    try {
        res.send({ existPost: "posts send to client", posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
