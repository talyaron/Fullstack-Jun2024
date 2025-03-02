"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addPostCont_1 = require("../controllers/postControllers/addPostCont");
var postsGetCont_1 = require("../controllers/postControllers/postsGetCont");
var postsUpdateCont_1 = require("../controllers/postControllers/postsUpdateCont");
var postRemoveCont_1 = require("../controllers/postControllers/postRemoveCont");
var router = express_1["default"].Router();
router.post("/add-post", addPostCont_1.upload.single("image"), addPostCont_1.addPost);
router.post("/get-posts", postsGetCont_1.getPosts);
router.post("/update-post", postsUpdateCont_1.updatePost);
router.post("/remove-post", postRemoveCont_1.removePost);
exports["default"] = router;
