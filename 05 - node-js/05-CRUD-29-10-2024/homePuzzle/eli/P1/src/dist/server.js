"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var multer_1 = require("multer");
var path_1 = require("path");
var fs_1 = require("fs");
app.use(express_1["default"].json()); //middleware to get data from the body
app.use(express_1["default"].static('public')); //middleware
var uploadsDir = path_1["default"].join(__dirname, 'uploads'); // Adjust the path as needed
if (!fs_1["default"].existsSync(uploadsDir)) {
    fs_1["default"].mkdirSync(uploadsDir, { recursive: true }); // Create the uploads directory
}
app.use('/uploads', express_1["default"].static(uploadsDir));
app.get('/api/renderWords', function (req, res) {
    try {
        // setTimeout(() => {
        res.send({ message: words });
        // }, 3000);
    }
    catch (error) {
        console.error(error);
    }
});
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir); // Use the uploadsDir variable
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path_1["default"].extname(file.originalname)); // Preserve file extension
    }
});
var words = [];
// route to send something to the server
var upload = multer_1["default"]({ storage: storage });
// Handle POST request to upload word and image
app.post("/api/send-word", upload.single('img'), function (req, res) {
    try {
        var word = req.body.word; // Get the word from the request body
        var img = req.file ? req.file.filename : ""; // Get the image filename
        if (!word)
            throw new Error("No word found");
        // Log the full path of the uploaded image
        console.log("Uploaded image path: " + path_1["default"].join(uploadsDir, img));
        if (img) {
            console.log("Received word: " + word + ", Image: " + img);
            var newPost = { word: word, img: img }; // Create a new post object
            words.unshift(newPost);
            // Here you would typically save newPost to a database or an array
            console.log(newPost); // Log the new post for debugging
            res.json({ message: 'Word and image uploaded successfully!', newPost: newPost });
        }
        else {
            res.status(400).json({ error: 'No image uploaded.' });
            var newPost = { word: word, img: img }; // Create a new post object
            words.push(newPost);
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
    console.log("Example app listening on port " + port);
});
