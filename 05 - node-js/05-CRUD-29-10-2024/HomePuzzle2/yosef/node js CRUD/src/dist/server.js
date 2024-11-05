"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var path_1 = require("path");
var app = express_1["default"]();
var port = 3000;
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var posts = [];
app.post('/upload-image-endpoint', upload.single('image'), function (req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    // לדוגמה, נחזיר את כתובת ה-URL של התמונה (בהנחה שאתה שומר את התמונה בשרת)
    var imageUrl = "/uploads/" + req.file.filename;
    res.json({ imageUrl: imageUrl });
    console.log('imahe', imageUrl);
});
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.get('/register', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/register', 'register.html'));
});
app.get('/login', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/login', 'index.html'));
});
app.get('/mainPage', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/mainPage', 'main.html'));
});
app.post('/api/add-posts', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log('Received POST request:', req.body);
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log('Current posts:', posts);
    res.status(201).json({ message: "Post added successfully" });
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.patch('/api/updateTitle', function (req, res) {
    var _a = req.body, id = _a.id, title = _a.title;
    var post = posts.find(function (p) { return p.id === id; });
    if (post) {
        post.title = title;
        console.log('Updated title post:', post);
        res.status(200).json({ message: "Post title updated successfully" });
        console.log("Post updated successfully");
        console.log(posts);
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
});
app.patch('/api/updateText', function (req, res) {
    var _a = req.body, id = _a.id, text = _a.text;
    var post = posts.find(function (p) { return p.id === id; });
    if (post) {
        post.text = text;
        console.log('Updated text post:', post);
        res.status(200).json({ message: "Post text updated successfully" });
        console.log("Post updated successfully");
        console.log(posts);
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
});
app["delete"]('/api/delete-post', function (req, res) {
    var id = req.body.id;
    var postIndex = posts.findIndex(function (p) { return p.id === id; });
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    posts.splice(postIndex, 1);
    console.log('Deleted post:', posts[postIndex]);
    res.status(200).json({ message: "Post deleted successfully" });
    console.log("Post deleted successfully");
    console.log(posts);
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
