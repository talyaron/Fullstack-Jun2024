"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var addPost_1 = require("../controllers/addPost");
var deletePost_1 = require("../controllers/deletePost");
var updatePosts_1 = require("../controllers/updatePosts");
var getPosts_1 = require("../controllers/getPosts");
var createPost_1 = require("../controllers/createPost");
router.post("/add-post", addPost_1.addPost);
router["delete"]("/delete-post/:id", deletePost_1.deletePost);
router.put("/update-post/:id", updatePosts_1.updatePosts);
router.get('/get-posts', getPosts_1.getPosts);
router.post("/api/post/create", createPost_1.createPost);
exports["default"] = router;
