"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
var multer_1 = require("multer");
var path_1 = require("path");
var fs_1 = require("fs");
//npm i multer...
//npm i --save-dev @types/multer
//stuff for image upload
var uploadsDir = path_1["default"].join(__dirname, 'uploads');
if (!fs_1["default"].existsSync(uploadsDir)) {
    fs_1["default"].mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express_1["default"].static(uploadsDir));
app.get('/register', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/register', 'register.html'));
});
app.get('/login', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/login', 'login.html'));
});
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path_1["default"].extname(file.originalname));
    }
});
var upload = multer_1["default"]({ storage: storage });
var posts = [];
var users = [];
app.get("/api/get-posts", function (reg, res) {
    try {
        res.json({ posts: posts });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
});
app.post("/api/add-post", upload.single('image'), function (req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description;
        var img = req.file ? req.file.filename : ""; // Get the image filename
        if (!title)
            throw new Error("No word found");
        // Log the full path of the uploaded image
        console.log("Uploaded image path: " + path_1["default"].join(uploadsDir, img));
        if (img) {
            console.log("Received word: " + title + " " + description + ", Image: " + img);
            var newPost = { id: "id=" + crypto.randomUUID(), title: title, description: description, img: img }; // Create a new post object
            posts.unshift(newPost);
            // Here you would typically save newPost to a database or an array
            console.log(newPost); // Log the new post for debugging
            res.json({ message: 'Word and image uploaded successfully!', newPost: newPost });
        }
        else {
            console.log("Received word: " + title + " " + description + ", Image: no image");
            var newPost = { id: "id=" + crypto.randomUUID(), title: title, description: description, img: img }; // Create a new post object
            posts.unshift(newPost);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
});
app.listen(port, function () {
    console.log("Example unstagram app listening on port " + port);
});
