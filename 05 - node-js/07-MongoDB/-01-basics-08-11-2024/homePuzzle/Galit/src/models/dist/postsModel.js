"use strict";
exports.__esModule = true;
exports.PostModel = exports.PostSchema = exports.posts = void 0;
var mongoose_1 = require("mongoose");
var Post = /** @class */ (function () {
    function Post(title, text, image) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.text = text;
        this.image = image;
    }
    return Post;
}());
exports["default"] = Post;
exports.posts = [];
exports.PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
exports.PostModel = mongoose_1.model('Post', exports.PostSchema);
