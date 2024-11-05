"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
var posts = [];
app.post("/api/add-post", function (req, res) {
    try {
        var post = req.body.post;
        // ודא שהנתונים מכילים פוסט
        if (!post)
            throw new Error("No post found");
        // הוספת הפוסט למערך
        posts.push(post);
        console.log({ post: post });
        res.send({ message: "Post created", post: post });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.listen(port, function () {
    console.log("Server listening on: https://localhost:" + port);
});
