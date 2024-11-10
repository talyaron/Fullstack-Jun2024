"use strict";
exports.__esModule = true;
exports.PostModel = exports.postSchema = exports.upload = void 0;
var multer_1 = require("multer");
var path_1 = require("path");
var crypto_1 = require("crypto");
var mongoose_1 = require("mongoose");
var storage = multer_1["default"].diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, "" + crypto_1["default"].randomUUID() + path_1["default"].extname(file.originalname));
    }
});
exports.upload = multer_1["default"]({ storage: storage });
exports.postSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});
exports.PostModel = mongoose_1.model("Post", exports.postSchema);
