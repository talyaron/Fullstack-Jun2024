"use strict";
exports.__esModule = true;
exports.ClientModel = exports.PostSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    }
});
exports.ClientModel = mongoose_1.model("Post", exports.PostSchema); // the connection to the DB collection
