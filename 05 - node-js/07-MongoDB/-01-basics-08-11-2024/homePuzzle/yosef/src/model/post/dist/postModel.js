"use strict";
exports.__esModule = true;
exports.PostModel = exports.PostSchema = exports.posts = void 0;
var mongoose_1 = require("mongoose");
exports.posts = [];
exports.PostSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    imageURL: { type: String, required: true }
});
exports.PostModel = mongoose_1.model("Post", exports.PostSchema);
