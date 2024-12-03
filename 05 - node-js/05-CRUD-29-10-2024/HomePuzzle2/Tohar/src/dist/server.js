"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var crypto_1 = require("crypto");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var posts = [];
var users = [];
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.post('/api/add-user', function (req, res) {
    try {
        var _a = req.body, userName = _a.userName, email = _a.email, password = _a.password, phoneNumber = _a.phoneNumber;
        if (!userName || !email || !password || !phoneNumber) {
            return res.status(400).json({ error: "All fields are required" });
        }
        var id = crypto_1.randomBytes(16).toString("hex");
        var posts_1 = [];
        users.push({ userName: userName, id: id, email: email, password: password, phoneNumber: phoneNumber, posts: posts_1 });
        console.log(users);
        res.status(201).json({ message: "User added successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while adding the user" });
    }
});
app.post('/api/login', function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        var user = users.find(function (user) { return user.email === email_1; });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        if (user.password !== password) {
            return res.status(400).json({ error: "Incorrect password" });
        }
    }
    catch (error) {
        console.error("Error in /api/login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// app.get('/api/get-user', (req:any, res:any) => {
//     const { email } = req.query;
//     const user = users.find(user => user.email === email);
//     if (!user) {
//         return res.status(400).json({ error: "User not found" });
//     }
//     res.json(user);
// });
app.get('/api/get-user', function (req, res) {
    var _a = req.query, email = _a.email, password = _a.password;
    var user = users.find(function (user) { return user.email === email; });
    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }
    var passwordNotCorrect = user.password !== password;
    if (user.password !== password) {
        return res.status(400).json({ error: "Incorrect password" });
    }
    res.json({ exists: passwordNotCorrect });
});
app.get('/api/user-exists', function (req, res) {
    var email = req.query.email;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    var userExists = users.some(function (user) { return user.email === email; });
    console.log('userExists', userExists);
    res.json({ exists: userExists });
});
app.post('/api/add-post', function (req, res) {
    try {
        var _a = req.body, caption = _a.caption, imageURL = _a.imageURL;
        if (!caption || !imageURL) {
            return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
        }
        var id = crypto_1.randomBytes(16).toString("hex");
        posts.push({ id: id, caption: caption, imageURL: imageURL });
        res.status(201).json({ message: "Post added successfully" });
    }
    catch (error) {
        console.error("Error in /api/add-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
//updates the post's caption
app.patch('/api/update-post', function (req, res) {
    try {
        var _a = req.body, caption = _a.caption, id = _a.id;
        var postId_1 = id;
        var post = posts.find(function (id) { return id.id === postId_1; });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.caption = caption;
        return res.json({ message: 'Caption updated successfully', post: post });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.patch('/api/update-post-image', function (req, res) {
    try {
        var _a = req.body, image = _a.image, id = _a.id;
        var postId_2 = id;
        console.log('id', id);
        var post = posts.find(function (id) { return id.id === postId_2; });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.imageURL = image;
        return res.json({ message: 'image updated successfully', post: post });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app["delete"]('/api/delete-post', function (req, res) {
    try {
        var id = req.body.id;
        var postId_3 = id;
        var index = posts.findIndex(function (id) { return id.id === postId_3; });
        console.log('index', index);
        if (index === -1) {
            return res.status(404).json({ message: 'Post not found' });
        }
        posts.splice(index, 1);
        //find the post in the array and delete it
        return res.json({ message: 'Post deleted successfully', posts: posts });
    }
    catch (error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
