"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.editPost = exports.deletePost = exports.getPosts = exports.addPost = void 0;
var postsModel_1 = require("../models/postsModel");
function addPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, text, image, newPost, postDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, title = _a.title, text = _a.text, image = _a.image;
                    if (!title || !text || !image) {
                        return [2 /*return*/, res.status(400).json({ error: "All fields (title, text, image) are required" })];
                    }
                    console.log(title, text);
                    newPost = new postsModel_1.PostModel({ title: title, text: text, image: image });
                    return [4 /*yield*/, newPost.save()];
                case 1:
                    postDB = _b.sent();
                    res.status(201).json({ message: "Post added successfully", post: postDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    res.status(500).json({ error: "Internal server error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addPost = addPost;
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var postsDB, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, postsModel_1.PostModel.find()];
                case 1:
                    postsDB = _a.sent();
                    res.status(200).json({ posts: postsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error fetching posts:', error_2);
                    res.status(500).json({ error: "Internal server error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPosts = getPosts;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, post, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log("Deleting post with id: " + id);
                    return [4 /*yield*/, postsModel_1.PostModel.findById(id)];
                case 2:
                    post = _a.sent();
                    if (!post) {
                        console.log("Post with id " + id + " not found");
                        return [2 /*return*/, res.status(401).json({ error: "Post not found" })];
                    }
                    return [4 /*yield*/, postsModel_1.PostModel.findByIdAndDelete(id)];
                case 3:
                    _a.sent();
                    console.log("Post with id " + id + " deleted");
                    res.status(200).json({ message: "Post deleted successfully" });
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.error('Error deleting post:', error_3);
                    res.status(500).json({ error: "Internal server error" });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deletePost = deletePost;
function editPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, title, text, image, updatedFields, updatedPost, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    _a = req.body, title = _a.title, text = _a.text, image = _a.image;
                    console.log("Editing post with id: " + id);
                    updatedFields = {};
                    if (title !== undefined)
                        updatedFields.title = title;
                    if (text !== undefined)
                        updatedFields.text = text;
                    if (image !== undefined)
                        updatedFields.image = image;
                    return [4 /*yield*/, postsModel_1.PostModel.findByIdAndUpdate(id, updatedFields, { "new": true })];
                case 1:
                    updatedPost = _b.sent();
                    if (!updatedPost) {
                        console.log("Post with id " + id + " not found");
                        return [2 /*return*/, res.status(404).json({ error: "Post not found" })];
                    }
                    console.log("Post with id " + id + " updated");
                    res.status(200).json({ message: "Post updated successfully", post: updatedPost });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    console.error('Error updating post:', error_4);
                    res.status(500).json({ error: "Internal server error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.editPost = editPost;
