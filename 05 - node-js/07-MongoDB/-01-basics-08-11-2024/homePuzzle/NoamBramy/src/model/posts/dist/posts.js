"use strict";
exports.__esModule = true;
exports.upload = exports.posts = void 0;
var multer_1 = require("multer");
var path_1 = require("path");
var crypto_1 = require("crypto");
exports.posts = [];
var storage = multer_1["default"].diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, "" + crypto_1["default"].randomUUID() + path_1["default"].extname(file.originalname));
    }
});
exports.upload = multer_1["default"]({ storage: storage });
