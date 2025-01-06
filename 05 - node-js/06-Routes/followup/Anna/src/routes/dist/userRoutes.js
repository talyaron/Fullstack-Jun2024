"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setPostCon_1 = require("../controller/setPostCon");
var getPostCon_1 = require("../controller/getPostCon");
var router = express_1["default"].Router();
router.post('/add-post', setPostCon_1.addPosts);
router.get('/get-posts', getPostCon_1.getPosts);
exports["default"] = router;
