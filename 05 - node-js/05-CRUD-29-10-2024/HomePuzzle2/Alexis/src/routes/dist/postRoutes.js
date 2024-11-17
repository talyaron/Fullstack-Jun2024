"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postController_1 = require("../controllers/postController");
var router = express_1["default"].Router();
router.post("/add-post", postController_1.addPost);
router.get("/get-posts", postController_1.getPosts);
exports["default"] = router;
