"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addPostCont_1 = require("../controllers/postConts/addPostCont");
var getPostCont_1 = require("../controllers/postConts/getPostCont");
var updateImageCont_1 = require("../controllers/postConts/updateImageCont");
var deleteCont_1 = require("../controllers/postConts/deleteCont");
var updateTitleCont_1 = require("../controllers/postConts/updateTitleCont");
var updateTextCont_1 = require("../controllers/postConts/updateTextCont");
var router = express_1["default"].Router();
router.post('/send-post', addPostCont_1.addPost);
router.get('/get-posts', getPostCont_1.getPost);
router.patch('/updateImage-post', updateImageCont_1.updateImagePost);
router["delete"]('/delete-post', deleteCont_1.deletePost);
router.patch('/updateText-post', updateTextCont_1.updateText);
router.patch('/updateTitle-post', updateTitleCont_1.updateTitle);
exports["default"] = router;
