"use strict";
exports.__esModule = true;
exports.PostModel = exports.PostSchema = exports.posts = void 0;
var mongoose_1 = require("mongoose");
;
exports.posts = [
    {
        id: "1",
        title: "Sample Post 1",
        text: "This is a sample post for User1.",
        imageURL: "https://via.placeholder.com/150",
        username: "User1"
    },
    {
        id: "2",
        title: "Sample Post 2",
        text: "This is another sample post for User2.",
        imageURL: "https://via.placeholder.com/150",
        username: "User2"
    },
];
exports.PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    imageURL: { type: String, required: false },
    username: { type: String, required: true }
});
exports.PostModel = mongoose_1.model("Post", exports.PostSchema);
