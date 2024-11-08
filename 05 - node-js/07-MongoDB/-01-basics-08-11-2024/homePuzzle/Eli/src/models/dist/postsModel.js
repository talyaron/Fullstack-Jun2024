"use strict";
exports.__esModule = true;
exports.PostModel = exports.postSchema = void 0;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
// export interface Post {
//   id: string;
//   title: string;
//   description: string;
//   img: string;
//   creatorId:string;
//   creatorName:string;
//   userMade?: boolean;
// }
exports.postSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    creatorId: {
        type: String,
        required: false
    },
    creatorName: {
        type: String,
        required: false
    },
    userMade: {
        type: Boolean,
        required: false
    }
});
// export const posts: Post[] = [];
exports.PostModel = mongoose_1.model("Post", exports.postSchema);
