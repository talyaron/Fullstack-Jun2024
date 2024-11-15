"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postsController_1 = require("../controller/postsController");
var router = express_1["default"].Router();
router.post('/add-post', postsController_1.addPost);
router.get('/get-posts', postsController_1.getPosts);
router["delete"]('/delete-post/:id', postsController_1.deletePost);
router.put('/edit-post/:id', postsController_1.editPost);
exports["default"] = router;
