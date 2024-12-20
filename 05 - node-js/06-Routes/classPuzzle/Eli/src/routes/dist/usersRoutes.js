"use strict";
exports.__esModule = true;
var express_1 = require("express");
var getPostsCont_1 = require("../controllers/posts/getPostsCont");
var setPostsCont_1 = require("../controllers/posts/setPostsCont");
var setUser_1 = require("../controllers/user/setUser");
var router = express_1["default"].Router();
router.post('/add-post', setPostsCont_1.addPost);
router.get('/get-posts', getPostsCont_1.getPosts);
router.get('/set-user', setUser_1.setUser);
exports["default"] = router;
