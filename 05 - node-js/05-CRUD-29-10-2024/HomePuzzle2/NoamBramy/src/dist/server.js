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
var express_1 = require("express");
var multer_1 = require("multer");
var crypto_1 = require("crypto");
var path_1 = require("path");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
var posts = [];
var storage = multer_1["default"].diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, "" + crypto_1["default"].randomUUID() + path_1["default"].extname(file.originalname));
    }
});
var upload = multer_1["default"]({ storage: storage });
function addPost(_a) {
    var id = _a.id, title = _a.title, text = _a.text, image = _a.image;
    return { id: id, title: title, text: text, image: image };
}
app.get('/api/get-posts', function (req, res) {
    try {
        var postsData = posts.map(function (post) { return ({
            id: post.id,
            title: post.title,
            text: post.text,
            image: post.image
        }); });
        res.send(postsData);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving posts');
    }
});
app.post("/api/send-form", function (req, res) {
    try {
        var _a = req.body, title = _a.title, text = _a.text, image = _a.image;
        if (!title || !text || !image)
            throw new Error("Missing post data");
        var newPost = addPost({ id: crypto_1["default"].randomUUID(), title: title, text: text, image: image });
        posts.push(newPost);
        res.send({ message: "Post successfully created", posts: posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
});
app.put('/api/update-post/:id', function (req, res) {
    try {
        var id_1 = req.params.id;
        var _a = req.body, title = _a.title, text = _a.text, image = _a.image;
        var postIndex = posts.findIndex(function (post) { return post.id === id_1; });
        if (postIndex === -1)
            return res.status(404).send('Post not found');
        posts[postIndex] = __assign(__assign({}, posts[postIndex]), { title: title, text: text, image: image });
        res.send({ message: 'Post successfully updated', posts: posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
});
app["delete"]('/api/delete-post/:id', function (req, res) {
    try {
        var id_2 = req.params.id;
        var postIndex = posts.findIndex(function (post) { return post.id === id_2; });
        if (postIndex === -1)
            return res.status(404).send('Post not found');
        posts.splice(postIndex, 1);
        res.send({ message: 'Post successfully deleted', posts: posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
});
app.post('/api/upload-image', upload.single('image'), function (req, res) {
    try {
        if (!req.file)
            throw new Error('Image upload failed');
        var imageUrl = "/uploads/" + req.file.filename;
        res.send({ message: 'Image successfully uploaded', imageUrl: imageUrl });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error uploading image' });
    }
});
app.listen(port, function () {
    console.log("Server running on " + port);
});
