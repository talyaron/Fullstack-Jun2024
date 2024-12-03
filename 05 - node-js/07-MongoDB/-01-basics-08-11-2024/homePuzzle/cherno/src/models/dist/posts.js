"use strict";
exports.__esModule = true;
exports.PostModel = exports.PostSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
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
exports.PostModel = mongoose_1.model('Post', exports.PostSchema);
