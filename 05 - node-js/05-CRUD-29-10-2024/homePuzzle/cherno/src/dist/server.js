"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var users = [];
var posts = [];
var usersPosts = [];
//**********routes*********
app.get('/api/get-posts', function (req, res) {
    try {
        res.send({ posts: posts });
    }
    catch (error) {
        console.error(error);
    }
});
app.get('/api/get-user-posts', function (req, res) {
    try {
        var user_1 = req.query.user;
        if (!user_1)
            throw new Error("User not found");
        var userPostsId = usersPosts.filter(function (up) { return up.userId === user_1; });
        var userPosts = userPostsId.map(function (up) { return posts.find(function (post) { return post.id === up.postId; }); });
        res.send({ posts: userPosts });
    }
    catch (error) {
        console.error(error);
    }
});
app.post("/api/send-post", function (req, res) {
    try {
        var data = req.body.data;
        var user = req.body.user;
        if (!data)
            throw new Error("No post found");
        posts.push(data);
        console.log(data.image);
        usersPosts.push({ userId: user, postId: data.id });
        res.send({ message: "post received" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error" });
    }
});
app.post("/api/register-user", function (req, res) {
    try {
        var data = req.body.data;
        if (!createUser(data.username, data.password))
            res.send({ ifCreated: false });
        else
            res.send({ ifCreated: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error registering user: " + error });
    }
});
app.post("/api/login-user", function (req, res) {
    try {
        var data = req.body.data;
        res.send(loginUser(data.username, data.password));
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error registering user: " + error });
    }
});
app.patch("/api/edit-post", function (req, res) {
    try {
        var data = req.body;
        if (!data)
            throw new Error("No data found");
        var postId_1 = data.postId;
        var type = data.type;
        var content = data.content;
        var postIndex = posts.findIndex(function (post) { return post.id === postId_1; });
        if (postIndex === -1)
            throw new Error("Post not found");
        if (type === "title")
            posts[postIndex].title = content;
        else if (type === "text")
            posts[postIndex].text = content;
        else if (type === "image")
            posts[postIndex].image = content;
        else
            throw new Error("Invalid type");
        res.send({ message: "Post updated successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
});
app["delete"]("/api/delete-post", function (req, res) {
    try {
        var postId_2 = req.body.postId;
        var postIndex = posts.findIndex(function (post) { return post.id === postId_2; });
        if (postIndex === -1)
            throw new Error("Post not found");
        usersPosts.forEach(function (up, index) { if (up.postId === postId_2)
            usersPosts.splice(index, 1); });
        posts.splice(postIndex, 1);
        res.send({ message: "Post deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
function createUser(username, password) {
    if (users.find(function (u) { return u.username === username; }))
        return false;
    var newUser = { id: crypto.randomUUID(), username: username, password: password };
    users.push(newUser);
    return true;
}
function loginUser(username, password) {
    var user = users.find(function (u) { return u.username === username && u.password === password; });
    if (user)
        return { isLoggedIn: true, userId: user.id };
    return { isLoggedIn: false };
}
