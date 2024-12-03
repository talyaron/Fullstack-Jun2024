"use strict";

exports.__esModule = true;
exports.deletePost = void 0;

var postModel_1 = require("../../model/post/postModel");

function deletePost(req, res) {
  try {
    var id_1 = req.body.id;
    var postIndex = postModel_1.posts.findIndex(function (p) {
      return p.id === id_1;
    });

    if (postIndex === -1) {
      return res.status(404).json({
        error: "Post not found"
      });
    }

    postModel_1.posts.splice(postIndex, 1);
    console.log('Deleted post:', postModel_1.posts[postIndex]);
    res.status(200).json({
      message: "Post deleted successfully"
    });
    console.log("Post deleted successfully");
    console.log(postModel_1.posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while deleting the post"
    });
  }
}

exports.deletePost = deletePost;