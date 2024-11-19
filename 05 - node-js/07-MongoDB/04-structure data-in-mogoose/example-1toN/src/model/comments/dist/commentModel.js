"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CommentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, "default": Date.now }
});
var Comment = mongoose_1["default"].model('Comment', CommentSchema);
exports["default"] = Comment;
