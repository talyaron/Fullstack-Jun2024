"use strict";
exports.__esModule = true;
exports.UserPostModel = exports.UserPostSchema = void 0;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.UserPostSchema = new mongoose_1.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    postId: {
        type: ObjectId,
        required: true
    }
});
exports.UserPostModel = mongoose_1.model('UserPost', exports.UserPostSchema);
