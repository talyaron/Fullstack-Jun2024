"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setComments_1 = require("../../controllers/comments/setComments");
var getComments_1 = require("../../controllers/comments/getComments");
var router = express_1["default"].Router();
// Get all comments
// Create a new comment
router.post('/add-comment', setComments_1.addComment);
router.get('/get-comment-by-product-id', getComments_1.getCommentByProductId);
exports["default"] = router;
