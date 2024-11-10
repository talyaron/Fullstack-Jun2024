"use strict";
exports.__esModule = true;
exports.addPost = void 0;
function addPost(_a) {
    var id = _a.id, title = _a.title, text = _a.text, image = _a.image;
    return { id: id, title: title, text: text, image: image };
}
exports.addPost = addPost;
