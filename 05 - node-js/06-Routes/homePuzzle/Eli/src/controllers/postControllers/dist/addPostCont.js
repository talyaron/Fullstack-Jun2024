"use strict";
exports.__esModule = true;
exports.addPost = exports.upload = void 0;
var userModel_1 = require("../../models/userModel");
var multer_1 = require("multer");
var path_1 = require("path");
var postsModel_1 = require("../../models/postsModel");
var server_1 = require("../../server");
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
function addPost(req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description, key_1 = _a.key;
        var img = req.file ? req.file.filename : ""; // Get the image filename
        if (!title)
            throw new Error("No word found");
        // Log the full path of the uploaded image
        console.log("Uploaded image path: " + path_1["default"].join(server_1.uploadsDir, img));
        var postCreator = userModel_1.users.find(function (user) { return key_1 === user.key; });
        if (!postCreator) {
            res.json({ message: "invalid user key no post made" });
            return;
        }
        var creatorId = postCreator.id;
        var creatorName = postCreator.name;
        if (img) {
            console.log("Received word: " + title + " " + description + ", Image: " + img);
            var fullBodyImg = "http://localhost:3000/uploads/" + img;
            var newPost = {
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
            var newPost = {
                id: "id=" + crypto.randomUUID(),
                title: title,
                description: description,
                img: img,
                creatorId: creatorId,
                creatorName: creatorName
            }; // Create a new post object
            postsModel_1.posts.unshift(newPost);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
}
exports.addPost = addPost;
//  
