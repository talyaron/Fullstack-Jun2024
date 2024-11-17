"use strict";
exports.__esModule = true;
exports.PostModel = void 0;
var mongoose_1 = require("mongoose");
var postSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    imageURL: { type: String, required: true }
});
exports.PostModel = mongoose_1["default"].model('Post', postSchema);
