"use strict";

exports.__esModule = true;

var express_1 = require("express");

var body_parser_1 = require("body-parser");

var app = express_1["default"]();
var port = process.env.PORT || 3000;
var posts = [];
app.use(body_parser_1["default"].json());
app.use(express_1["default"]["static"]('public'));
app.post('/api/add-posts', function (req, res) {
  var _a = req.body,
      title = _a.title,
      text = _a.text,
      imageURL = _a.imageURL;
  console.log('Received POST request:', req.body);

  if (!title || !text || !imageURL) {
    return res.status(400).json({
      error: "All fields (title, text, imageURL) are required"
    });
  }

  var id = crypto.randomUUID();
  posts.push({
    id: id,
    title: title,
    text: text,
    imageURL: imageURL
  });
  console.log('Current posts:', posts);
  res.status(201).json({
    message: "Post added successfully"
  });
});
app.get('/api/get-posts', function (req, res) {
  res.json({
    posts: posts
  });
});
app.patch('/api/update', function (req, res) {
  var _a = req.body,
      id = _a.id,
      title = _a.title;
  var post = posts.find(function (p) {
    return p.id === id;
  });

  if (post) {
    post.title = title;
    console.log('Updated post:', post);
    res.status(200).json({
      message: "Post updated successfully"
    });
    console.log("Post updated successfully");
    console.log(posts);
  } else {
    res.status(404).json({
      error: "Post not found"
    });
  }
});
app.listen(port, function () {
  console.log("Server listening on port " + port);
});