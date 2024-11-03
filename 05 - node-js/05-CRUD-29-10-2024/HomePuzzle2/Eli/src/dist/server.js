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
var uploadsDir = path_1["default"].join(__dirname, "uploads");
if (!fs_1["default"].existsSync(uploadsDir)) {
    fs_1["default"].mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express_1["default"].static(uploadsDir));
app.get("/register", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../public/register", "register.html"));
});
app.get("/index", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../public", "index.html"));
});
app.get("/login", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../public/login", "login.html"));
});
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path_1["default"].extname(file.originalname));
    }
});
var upload = multer_1["default"]({ storage: storage });
var infoValidator = /** @class */ (function () {
    function infoValidator() {
        this.regN = /^[a-zA-Z\s'-]+$/;
        this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.regP =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    infoValidator.prototype.isNameValid = function (name) {
        if (this.regN.test(name) == false)
            return "invalid name";
        return "";
    };
    infoValidator.prototype.isEmailValid = function (email) {
        var emailExist = users.some(function (user) { return email === user.email; });
        if (this.regE.test(email) == false)
            return "invalid email : email needs @ and a .com ending";
        if (emailExist)
            return "invalid email : email already exists!";
        return "";
    };
    infoValidator.prototype.isPasswordValid = function (password) {
        if (this.regP.test(password) == false)
            return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
        return "";
    };
    infoValidator.prototype.isRePasswordValid = function (rePassword, password) {
        if (rePassword !== password)
            return "invalid repeat password: required to be the same as password";
        return "";
    };
    return infoValidator;
}());
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.id = crypto.randomUUID();
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.assignKey = function () {
        this.key = "key=" + crypto.randomUUID();
    };
    return User;
}());
var posts = [];
var users = [];
var admin = new User("admin", "admin", "admin");
var admin2 = new User("admin2", "admin2", "admin2");
users.push(admin, admin2);
var infoValidation = new infoValidator();
app.post("/api/log-out", function (req, res) {
    try {
        var key_1 = req.body.key;
        var foundUserByKey = users.find(function (user) { return key_1 === user.key; });
        if (foundUserByKey) {
            foundUserByKey.key = "";
            res.json({ message: "out success!", key: key_1 });
            console.log("Deleted User Key");
            return;
        }
        else
            res.json({ error: "Invalid Key" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
});
app.post("/api/check-key", function (req, res) {
    try {
        var key_2 = req.body.key;
        var foundEmail = users.find(function (user) { return key_2 === user.key; });
        if (foundEmail) {
            res.json({ message: "logging success!", key: key_2, name: foundEmail.name });
            console.log("Valid Key");
            return;
        }
        else
            res.json({ error: "Invalid Key" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
});
app.post("/api/register-user", function (req, res) {
    try {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password, rePassword = _a.rePassword;
        var isNameInValid = infoValidation.isNameValid(name);
        var isEmailInValid = infoValidation.isEmailValid(email);
        var isPasswordInValid = infoValidation.isPasswordValid(password);
        var isRepassWordInValid = infoValidation.isRePasswordValid(rePassword, password);
        if (!isNameInValid &&
            !isEmailInValid &&
            !isPasswordInValid &&
            !isRepassWordInValid) {
            var newUser = new User(email, name, password);
            users.push(newUser);
            res.json({ message: "user info valid on server creating user!", users: users });
        }
        else {
            if (isEmailInValid) {
                res.json({
                    error: "" + isEmailInValid
                });
            }
            else
                res.json({
                    error: "Some discrepancies occurred",
                    isNameInValid: isNameInValid,
                    isPasswordInValid: isPasswordInValid,
                    isRepassWordInValid: isRepassWordInValid
                });
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
});
app.post("/api/account-login", function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        var foundEmail = users.find(function (user) { return email_1 === user.email; });
        if (foundEmail) {
            var foundPassword = foundEmail.password === password;
            if (foundPassword) {
                foundEmail.assignKey();
                var key = foundEmail.key;
                res.json({ message: "logging success!", key: key });
                console.log(foundEmail.name, "was given this key:", key);
                return;
            }
            else
                res.json({ error: "wrong password", email: email_1, message: "wrong email or password" });
        }
        else
            res.json({ error: "no such email", email: email_1, message: "wrong email or password" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
});
app.post("/api/add-post", upload.single("image"), function (req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description, key_3 = _a.key;
        var img = req.file ? req.file.filename : ""; // Get the image filename
        if (!title)
            throw new Error("No word found");
        // Log the full path of the uploaded image
        console.log("Uploaded image path: " + path_1["default"].join(uploadsDir, img));
        var postCreator = users.find(function (user) { return key_3 === user.key; });
        if (!postCreator) {
            res.json({ message: "invalid user key no post made" });
            return;
        }
        var creatorId = postCreator.id;
        var creatorName = postCreator.name;
        if (img) {
            console.log("Received word: " + title + " " + description + ", Image: " + img);
            var newPost = {
                id: "id=" + crypto.randomUUID(),
                title: title,
                description: description,
                img: img,
                creatorId: creatorId,
                creatorName: creatorName
            }; // Create a new post object
            posts.unshift(newPost);
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
            posts.unshift(newPost);
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
});
app.post("/api/get-posts", function (req, res) {
    try {
        var key_4 = req.body.key;
        var keyOfUser_1 = users.find(function (user) { return user.key === key_4; });
        if (!keyOfUser_1) {
            res.json({ error: "invalid key", throwAway: "bad key" });
            return;
        }
        var postsOfAll = posts.map(function (post) { if (post.creatorId === keyOfUser_1.id) {
            post.userMade = true;
        }
        else {
            post.userMade = false;
        } return post; });
        res.json({ postsOfAll: postsOfAll });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
});
app.listen(port, function () {
    console.log("Example unstagram app listening on port " + port);
});
