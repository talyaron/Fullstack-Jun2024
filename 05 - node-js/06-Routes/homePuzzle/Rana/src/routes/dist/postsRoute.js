"use strict";
// postsRoute.ts
exports.__esModule = true;
var express = require("express");
var postsController_1 = require("../controller/postsController");
var router = express.Router();
router.post('/add-post', postsController_1.addPost);
router.get('/get-posts', postsController_1.getPosts);
router.put('/update-post/:index', postsController_1.updatePost);
router["delete"]('/delete-post/:index', postsController_1.deletePost);
exports["default"] = router;
