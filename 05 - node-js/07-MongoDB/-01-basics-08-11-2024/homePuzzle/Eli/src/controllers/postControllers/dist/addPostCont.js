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
exports.addPost = exports.upload = void 0;
var multer_1 = require("multer");
var path_1 = require("path");
var postsModel_1 = require("../../models/postsModel");
var server_1 = require("../../server");
var userModel_1 = require("../../models/userModel");
// Set up multer storage and configuration
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, server_1.uploadsDir); // The correct directory for saving the uploaded files
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path_1["default"].extname(file.originalname)); // Make the filename unique
    }
});
exports.upload = multer_1["default"]({ storage: storage });
exports.addPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, key, img, postCreator, creatorId, creatorName, fullBodyImg, newPost, newPost, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, description = _a.description, key = _a.key;
                img = req.file ? req.file.filename : "";
                if (!title)
                    throw new Error("No word found");
                // Log the full path of the uploaded image
                console.log("Uploaded image path: " + path_1["default"].join(server_1.uploadsDir, img));
                return [4 /*yield*/, userModel_1.UserModel.findOne({ key: key })];
            case 1:
                postCreator = _b.sent();
                if (!postCreator) {
                    res.json({ message: "invalid user key no post made" });
                    return [2 /*return*/];
                }
                creatorId = postCreator.id;
                creatorName = postCreator.name;
                if (img) {
                    console.log("Received word: " + title + " " + description + ", Image: " + img);
                    fullBodyImg = "http://localhost:3000/uploads/" + img;
                    newPost = {
                        id: "id=" + crypto.randomUUID(),
                        title: title,
                        description: description,
                        img: fullBodyImg,
                        creatorId: creatorId,
                        creatorName: creatorName
                    };
                    postsModel_1.posts.unshift(newPost);
                    // Here you would typically save newPost to a database or an array
                    console.log(newPost); // Log the new post for debugging
                    res.json({ message: "Word and image uploaded successfully!", newPost: newPost });
                }
                else {
                    console.log("Received word: " + title + " " + description + ", Image: no image by creator id" + creatorId);
                    newPost = {
                        id: "id=" + crypto.randomUUID(),
                        title: title,
                        description: description,
                        img: img,
                        creatorId: creatorId,
                        creatorName: creatorName
                    };
                    postsModel_1.posts.unshift(newPost);
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                if (error_1 instanceof Error) {
                    res.status(500).json({ error: error_1.message });
                }
                else {
                    res.status(500).json({ error: "An unknown error occurred." });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//  
