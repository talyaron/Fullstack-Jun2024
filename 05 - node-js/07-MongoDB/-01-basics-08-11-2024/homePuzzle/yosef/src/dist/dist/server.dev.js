"use strict";

exports.__esModule = true;

var express_1 = require("express");

var mongoose_1 = require("mongoose");

var body_parser_1 = require("body-parser");

var path_1 = require("path");

var app = express_1["default"]();
var port = 3000;

var multer = require('multer');

var upload = multer({
  dest: 'uploads/'
}); // let posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

app.use(body_parser_1["default"].json());
app.post('/upload-image-endpoint', upload.single('image'), function (req, res) {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  } // לדוגמה, נחזיר את כתובת ה-URL של התמונה (בהנחה שאתה שומר את התמונה בשרת)


  var imageUrl = "/uploads/" + req.file.filename;
  res.json({
    imageUrl: imageUrl
  });
  console.log('imahe', imageUrl);
}); //Connect to server database

var dbUrl = "mongodb+srv://yosefib88:FYdIUMhMIwGscX4y@cluster0.b5vsm.mongodb.net";
var database = 'fs-jun24';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
  console.info("DB connected");
})["catch"](function (err) {
  console.error(err);
}); //Routes // includ: add/get/delete/editText/editTitle/

var postsRoutes_1 = require("./routes/postsRoutes");

app.use("/api/posts", postsRoutes_1["default"]);
app.use(express_1["default"]["static"]('public'));
app.get('/register', function (req, res) {
  res.sendFile(path_1["default"].join(__dirname, '../public/register', 'register.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path_1["default"].join(__dirname, '../public/login', 'index.html'));
});
app.get('/mainPage', function (req, res) {
  res.sendFile(path_1["default"].join(__dirname, '../public/mainPage', 'main.html'));
});
app.listen(port, function () {
  console.log("Server listening on port " + port);
});