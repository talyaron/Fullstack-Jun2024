"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CommentSchema = new mongoose_1.Schema({
    client: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Client', required: true },
    product: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Product', required: true },
    text: { type: String, required: true },
    score: { type: Number, required: true, min: 1, max: 5 },
    createdAt: { type: Date, "default": Date.now }
});
var Comment = mongoose_1["default"].model('Comment', CommentSchema);
exports["default"] = Comment;
