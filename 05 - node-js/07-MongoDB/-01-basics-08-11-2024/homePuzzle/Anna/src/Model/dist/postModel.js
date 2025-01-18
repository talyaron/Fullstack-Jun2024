"use strict";
exports.__esModule = true;
exports.PostModel = exports.PostSchema = exports.posts = void 0;
var mongoose_1 = require("mongoose");
exports.posts = [];
exports.PostSchema = new mongoose_1.Schema({
    title: String,
    des: String,
    img: String
});
exports.PostModel = mongoose_1.model('Post', exports.PostSchema);
