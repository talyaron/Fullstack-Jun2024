"use strict";

exports.__esModule = true;

var express_1 = require("express");

var setPostContoller_1 = require("../controllers/posts/setPostContoller");

var getPostController_1 = require("../controllers/posts/getPostController");

var deletePostController_1 = require("../controllers/posts/deletePostController");

var editTitlePostController_1 = require("../controllers/posts/editTitlePostController");

var editTextPostController_1 = require("../controllers/posts/editTextPostController");

var router = express_1["default"].Router();
router.post('/add-post', setPostContoller_1.addPost);
router.get('/get-post', getPostController_1.getPost);
router["delete"]('/delete-post', deletePostController_1.deletePost);
router.patch('/editTitle-post', editTitlePostController_1.editTitlePost);
router.patch('/editText-post', editTextPostController_1.editTextPost);
exports["default"] = router;