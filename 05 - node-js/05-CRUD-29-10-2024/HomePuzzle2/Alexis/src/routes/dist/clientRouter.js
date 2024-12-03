"use strict";
exports.__esModule = true;
var express_1 = require("express");
var getPost_1 = require("../controllers/getPost");
var router = express_1["default"].Router();
router.post("/get-post", getPost_1.addPost);
exports["default"] = router;
