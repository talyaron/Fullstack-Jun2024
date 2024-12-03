"use strict";

exports.__esModule = true;
exports.editTextPost = void 0;

var postsModels_1 = require("../../model/posts/postsModels");

function editTextPost(req, res) {
  try {
    var _a = req.body,
        id_1 = _a.id,
        text = _a.text;
    var post = postsModels_1.posts.find(function (p) {
      return p.id === id_1;
    });

    if (post) {
      post.text = text;
      console.log('Updated text post:', post);
      res.status(200).json({
        message: "Post text updated successfully"
      });
      console.log("Post updated successfully");
      console.log(postsModels_1.posts);
    } else {
      res.status(404).json({
        error: "Post not found"
      });
    }
  } catch (error) {
    console.error('Error in editTextPost:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
}

exports.editTextPost = editTextPost;