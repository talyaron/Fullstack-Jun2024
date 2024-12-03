"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var userRoutes_1 = require("./routes/userRoutes");
var userModel_1 = require("./models/userModel");
app.use("/api/users", userRoutes_1["default"]);
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.post('/api/add-post', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log('Received POST request:', req.body);
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    userModel_1.posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log('Current posts:', userModel_1.posts);
    res.status(201).json({ message: "Post added successfully" });
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: userModel_1.posts });
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
