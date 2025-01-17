"use strict";
exports.__esModule = true;
exports.editImgPost = exports.deletePosts = exports.editPostText = exports.editPostTitle = exports.sendPost = void 0;
var postModel_1 = require("../../Model/postModel");
function sendPost(req, res) {
    try {
        var postData = req.body;
        if (!postData.dataTitle)
            throw new Error("Title not found");
        if (!postData.dataDes)
            throw new Error("Des not found");
        postModel_1.posts.push({ title: postData.dataTitle, des: postData.dataDes, img: postData.dataImg, id: postData.id });
        res.send({ message: "Post add seccusefuly", posts: postModel_1.posts });
        console.log('Updated posts:', postModel_1.posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
}
exports.sendPost = sendPost;
;
function editPostTitle(req, res) {
    try {
        var _a = req.body, id_1 = _a.id, title = _a.title, des = _a.des;
        if (!id_1 || !title)
            throw new Error("post not found");
        var post = postModel_1.posts.find(function (post) { return post.id === id_1; });
        if (!post) {
            console.log("post not found", id_1);
            return res.status(404).json({ success: false, message: "Post with id " + id_1 + " not found." });
        }
        post.title = title;
        console.log('Updated post:', post, title);
        res.send({ message: "Title updated successfully", posts: postModel_1.posts });
    }
    catch (error) {
        console.error(error);
    }
}
exports.editPostTitle = editPostTitle;
;
function editPostText(req, res) {
    try {
        var _a = req.body, id_2 = _a.id, des = _a.des;
        if (!id_2 || !des)
            throw new Error("post not found");
        var post = postModel_1.posts.find(function (post) { return post.id === id_2; });
        if (!post) {
            console.log("post not found", id_2);
            return res.status(404).json({ success: false, message: "Post with id " + id_2 + " not found." });
        }
        post.des = des;
        console.log('Updated post:', post, des);
        res.send({ message: "Title updated successfully", posts: postModel_1.posts });
    }
    catch (error) {
        console.error(error);
    }
}
exports.editPostText = editPostText;
;
function deletePosts(req, res) {
    var id = req.body.id;
    if (!id)
        throw new Error("post not found");
    var deletedIndex = postModel_1.posts.findIndex(function (post) { return post.id === id; });
    if (deletedIndex == -1) {
        throw new Error("Post not found");
    }
    postModel_1.posts.splice(deletedIndex, 1);
    res.json("Post deleted from the server");
}
exports.deletePosts = deletePosts;
;
function editImgPost(req, res) {
    try {
        var _a = req.body, id_3 = _a.id, newImg = _a.newImg;
        if (!id_3)
            throw new Error("post not found");
        var post = postModel_1.posts.find(function (post) { return post.id === id_3; });
        if (!post) {
            console.log("post not found", id_3);
            return res.status(404).json({ success: false, message: "Post with id " + id_3 + " not found." });
        }
        post.img = newImg;
        console.log('Updated post:', post, newImg);
        res.send({ message: "Img updated successfully", posts: postModel_1.posts });
    }
    catch (error) {
        console.error(error);
    }
}
exports.editImgPost = editImgPost;
;
