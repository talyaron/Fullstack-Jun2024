"use strict";
exports.__esModule = true;
exports.storage = exports.uploadsDir = void 0;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
var multer_1 = require("multer");
var path_1 = require("path");
var fs_1 = require("fs");
app.get("/register", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../public/register", "register.html"));
});
app.get("/index", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../public", "index.html"));
});
app.get("/login", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../public/login", "login.html"));
});
//npm i multer...
//npm i --save-dev @types/multer
//stuff for image upload
exports.uploadsDir = path_1["default"].join(__dirname, "uploads");
app.use("/uploads", express_1["default"].static(exports.uploadsDir));
if (!fs_1["default"].existsSync(exports.uploadsDir)) {
    fs_1["default"].mkdirSync(exports.uploadsDir, { recursive: true });
}
exports.storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, exports.uploadsDir);
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path_1["default"].extname(file.originalname));
    }
});
var userRoutes_1 = require("./routes/userRoutes");
var postsRoutes_1 = require("./routes/postsRoutes");
var userTimeOutCont_1 = require("./controllers/userControllers/userTimeOutCont");
app.use("/api/users", userRoutes_1["default"]);
app.use("/api/post", postsRoutes_1["default"]);
setInterval(userTimeOutCont_1.checkedLoggedUsers, 3000);
app.listen(port, function () {
    console.log("Example unstagram app listening on port " + port);
});
