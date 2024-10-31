"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var crypto = require('crypto');
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var posts = [];
//route
app.get('/api/get-posts', function (req, res) {
    try {
        var postsData = posts.map(function (post) { return ({
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
function addPost(id, title, text, image) {
    return { id: id, title: title, text: text, image: image };
}
app.post("/api/send-form", function (req, res) {
    try {
        var data = req.body;
        if (!data.title || !data.text || !data.image)
            throw new Error("Missing post data");
        posts.push(addPost(crypto.randomUUID(), data.title, data.text, data.image));
        console.log(posts);
        res.send({ message: "Post successfully received", posts: posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error receiving post data" });
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
