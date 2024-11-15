"use strict";
exports.__esModule = true;
exports.PostModel = exports.post = void 0;
var mongoose_1 = require("mongoose");
//data structure
exports.post = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});
// model => collection
// collection name is 'posts' by default
exports.PostModel = mongoose_1.model('Post', exports.post);
