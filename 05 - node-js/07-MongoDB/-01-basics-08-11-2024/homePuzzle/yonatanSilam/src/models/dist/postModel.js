"use strict";
exports.__esModule = true;
exports.PostModel = exports.PostSchema = exports.allPosts = void 0;
var mongoose_1 = require("mongoose");
exports.allPosts = [];
exports.PostSchema = new mongoose_1.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});
exports.PostModel = mongoose_1.model('Post', exports.PostSchema);
