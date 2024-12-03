"use strict";

exports.__esModule = true;

var express_1 = require("express"); // import { getPosts } from '../controllers/posts/getPostsCont';


var setPostsCont_1 = require("../controllers/posts/setPostsCont");

var router = express_1["default"].Router();
router.post('/add-post', setPostsCont_1.addPost); // router.get('/get-posts', getPosts);

exports["default"] = router;