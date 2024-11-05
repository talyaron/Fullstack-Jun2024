"use strict";

exports.__esModule = true;
exports.addPost = void 0;

var postsModel_1 = require("../../models/posts/postsModel");

function addPost(req, res) {
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
  postsModel_1.posts.push({
    id: id,
    title: title,
    text: text,
    imageURL: imageURL
  });
  console.log('Current posts:', postsModel_1.posts);
  res.status(201).json({
    message: "Post added successfully"
  });
}

exports.addPost = addPost;