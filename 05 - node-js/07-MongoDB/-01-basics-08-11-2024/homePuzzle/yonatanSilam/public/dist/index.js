// import express from "express";
// import {User} from "../src/models/userModel";
// import {Post} from "../src/models/postModel";
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
var allPosts = [];
var User = /** @class */ (function () {
    function User(username, phone, email, password) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.id = "id-" + crypto.randomUUID();
    }
    return User;
}());
var newUser = new User("john_doe", "654654236", "john.doe@example.com", "securePassword123");
var userConnect = newUser;
var allUsers = [];
//first page- form upload post and see posts btn
function renderForm() {
    try {
        var app = document.querySelector("#app");
        if (!app)
            throw new Error("not find app");
        app.classList.remove("post-grid");
        app.innerHTML = " \n    <section class=\"container\">\n        <form onsubmit=\"handleSubmit(event)\">\n        <input type=\"text\" name=\"imageUrl\" placeholder=\"add imageUrl\">\n        <input type=\"text\" name=\"text\" placeholder=\"add text\">\n        <input type=\"text\" name=\"title\" placeholder=\"add title\">\n        <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n    </form>\n    <button class=\"btn btn-primary\" onclick=\"renderAllPost()\"> see all post</button>\n        <button class=\"btn btn-primary\" onclick=\"renderFirstPage()\"> log out</button>\n    </section>";
    }
    catch (error) {
        console.error(error);
    }
}
//add post
function handleSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var form, formData, imageUrl, text, title, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    form = ev.target;
                    formData = new FormData(form);
                    imageUrl = String(formData.get("imageUrl"));
                    text = String(formData.get("text"));
                    title = String(formData.get("title"));
                    form.reset();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/send-post", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ imageUrl: imageUrl, text: text, title: title })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to add post");
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log("Post added:", data.message);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//second page btn to upload post
function renderAllPost() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/posts/get-posts")];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to fetch posts");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    displayPosts(data.posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function displayPosts(posts) {
    var postsContainer = document.getElementById("app");
    postsContainer.innerHTML =
        '    <button class="btn btn-primary" onclick="renderForm()"> back</button>'; // Clear previous posts
    postsContainer.classList.add("post-grid"); // Add grid layout for posts
    var htmlPosts = posts
        .map(function (post) {
        return renderPost(post);
    })
        .filter(function (post) { return post !== null; })
        .join("");
    postsContainer.innerHTML = "    <button class=\"btn btn-primary\" onclick=\"renderForm()\"> back</button> " + htmlPosts;
}
function renderPost(post) {
    try {
        var html = "\n        <div class=\"post-card card\">\n            <h3 class=\"card-title\" id=\"title-" + post._id + "\">" + post.title + "</h3><button class=\"btn btn-primary\" onclick=\"handleEditTitle('" + post._id + "')\" >Edit</button><button onclick=\"handleDelete('" + post._id + "')\" class=\"btn btn-primary\">Delete</button>\n            <img id=\"image-" + post._id + "\" class=\"card-img-top\" onclick=\"handleImage('" + post._id + "')\" src=\"" + post.imageUrl + "\" alt=\"Image\" />\n            <div class=\"hidden\" id=\"imageUrl-" + post._id + "\">edit imageURl</div>\n            <p class=\"card-text\" id=\"text-" + post._id + "\" onclick=\"handleEditText('" + post._id + "')\"> " + post.text + " </p>\n        </div>\n        ";
        return html;
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function handleImage(id) {
    try {
        console.log("Edit image:", id);
        var imageUrl_1 = document.getElementById("imageUrl-" + id);
        if (!imageUrl_1)
            throw new Error("image element not found");
        imageUrl_1 === null || imageUrl_1 === void 0 ? void 0 : imageUrl_1.classList.add("show");
        imageUrl_1.contentEditable = "true";
        imageUrl_1.focus();
        imageUrl_1.addEventListener("blur", function (event) {
            var imageU = imageUrl_1.innerText;
            console.log("New image:", imageU);
            updateImageOnServer(imageU, id);
            imageUrl_1.contentEditable = "false";
            renderAllPost();
            //how to update the title in the server
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function updateImageOnServer(imageUrl, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/updateImage-post", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ imageUrl: imageUrl, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to update post");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Post update:", data.message);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleEditText(id) {
    try {
        console.log("Edit text:", id);
        var textElement_1 = document.getElementById("text-" + id);
        if (!textElement_1)
            throw new Error("text element not found");
        textElement_1.contentEditable = "true";
        textElement_1.focus();
        textElement_1.addEventListener("blur", function (event) {
            var text = textElement_1.innerText;
            console.log("New text:", text);
            updateTextOnServer(text, id);
            textElement_1.contentEditable = "false";
            //how to update the title in the server
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function updateTextOnServer(text, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/updateText-post", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ text: text, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to update post");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Post update:", data.message);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleEditTitle(id) {
    try {
        console.log("Edit title:", id);
        var titleElement_1 = document.getElementById("title-" + id);
        if (!titleElement_1)
            throw new Error("Title element not found");
        titleElement_1.contentEditable = "true";
        titleElement_1.focus();
        titleElement_1.addEventListener("blur", function (event) {
            var title = titleElement_1.innerText;
            console.log("New title:", title);
            updateOnServer(title, id);
            titleElement_1.contentEditable = "false";
            //how to update the title in the server
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function updateOnServer(title, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/updateTitle-post", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ title: title, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to update post");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Post update:", data.message);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDelete(id) {
    try {
        console.log("delete title:", id);
        DeleteOnServer(id);
        renderAllPost();
        //how to update the title in the server
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function DeleteOnServer(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/delete-post", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to delete post");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Post update:", data.message);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderFirstPage() {
    try {
        var app = document.querySelector("#app");
        if (!app)
            throw new Error("not find app");
        app.innerHTML = " \n<section class=\"body-back\">\n    <section class=\"container\">\n        <div class=\"container_top-part\">\n        <div>WELCOME TO instagram</div>\n        </div>\n\n        <div class=\"container_bottom-part\">\n        <button onclick=\"logInPage()\" class=\"btn\" id=\"loginBtn\">log in</button>\n        <button onclick=\"registerPage()\" class=\"btn\" id=\"registerBtn\">register</button>\n    </div>\n    </section>\n</section>";
    }
    catch (error) {
        console.error(error);
    }
}
function registerPage() {
    try {
        var app = document.querySelector("#app");
        if (!app)
            throw new Error("not find app");
        app.innerHTML = "\n      <section class=\"body-back\">\n        <section class=\"container\">\n          <h1> Register:</h1>\n          <button onclick=\"renderFirstPage()\" class=\"back\" id=\"backBtn\"><--</button>\n          <form onSubmit=\"handelRegisterAfterLog(event)\" id=\"registerBtn\" class=\"form-container\">\n              <label for=\"username\">Username:</label>\n              <input id=\"username\" type=\"text\" name=\"username\" required>\n  \n              <label for=\"phone\">phone:</label>\n              <input id=\"phone\" type=\"text\" name=\"phone\" required>\n  \n              <label for=\"email\">email:</label>\n              <input id=\"email\" type=\"text\" name=\"email\" required>\n  \n              <label for=\"password\">Password:</label>\n              <input id=\"password\" type=\"password\" name=\"password\" required>\n  \n              <button type=\"submit\">Register</button>\n          </form>\n        </section>\n      </section>\n      ";
    }
    catch (error) {
        console.error(error);
    }
}
function handelRegisterAfterLog(event) {
    //register the user
    try {
        event.preventDefault();
        var form = event.target;
        var formData = new FormData(form);
        var username = String(formData.get("username"));
        var phone = String(formData.get("phone"));
        var email = String(formData.get("email"));
        var password = String(formData.get("password"));
        console.log("reg");
        register(username, phone, email, password);
        //check user and get in
        form.reset();
    }
    catch (e) {
        console.error(e);
    }
}
function register(username, phone, email, password) {
    //check the info
    //register
    try {
        if (checkUsername(username)) {
            var user = new User(username, phone, email, password);
            allUsers.push(user);
            console.log(allUsers);
            var localStorageA = localStorage.getItem("allUsers");
            var allUsersS = localStorageA ? JSON.parse(localStorageA) : [];
            allUsersS.push(user);
            localStorage.setItem("allUsers", JSON.stringify(allUsersS));
            logInPage();
            var loginBtn = document.querySelector("#loginBtn");
            if (!loginBtn)
                throw new Error("not find loginBtn");
            loginBtn.addEventListener("submit", handelLoginAfterLog);
        }
        else {
            throw new Error("the user already exist");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function checkUsername(username) {
    //check if the user name is already exist
    var localStorageA = localStorage.getItem("allUsers");
    var allUsersS = localStorageA ? JSON.parse(localStorageA) : [];
    if (allUsersS.find(function (user) { return user.username == username; }))
        return false;
    return true;
}
function logInPage() {
    try {
        var app = document.querySelector("#app");
        if (!app)
            throw new Error("not find app");
        app.innerHTML = "<section class=\"body-back\">\n        <section class=\"container\">\n          <h1> Log In:</h1>\n          <button class=\"back\" id=\"backBtn\" onclick=\"renderFirstPage()\"> <--- </button>\n          <form onSubmit=\"handelLoginAfterLog(event)\" id=\"loginBtn\" class=\"form-container\">\n              <label for=\"username\">Username:</label>\n              <input id=\"username\" type=\"text\" id=\"username\" name=\"username\" required>\n  \n              <label for=\"password\">Password:</label>\n              <input id=\"password\" type=\"password\" id=\"password\" name=\"password\" required>\n  \n              <button type=\"submit\" >Log In</button>\n          </form>\n        </section>\n      </section> ";
    }
    catch (error) {
        console.error(error);
    }
}
function handelLoginAfterLog(event) {
    //log the user
    try {
        event.preventDefault();
        var form = event.target;
        var formData = new FormData(form);
        var username = String(formData.get("username"));
        var password = String(formData.get("password"));
        console.log(username);
        console.log(password);
        checkUser(username, password);
        //check user and get in
        form.reset();
    }
    catch (e) {
        console.error(e);
    }
}
function checkUser(username, password) {
    try {
        var localStorageA = localStorage.getItem("allUsers");
        var allUsersS = localStorageA ? JSON.parse(localStorageA) : [];
        var userN = allUsersS.find(function (user) { return user.username == username; });
        if (!userN)
            throw new Error("u need to sign in");
        if ((userN === null || userN === void 0 ? void 0 : userN.password) == password) {
            userConnect.username = userN.username;
            userConnect.password = userN.password;
            userConnect.phone = userN.phone;
            userConnect.email = userN.email;
            userConnect.id = userN.id;
            console.log(userConnect);
            renderForm();
        }
        else
            throw new Error("the password not right");
    }
    catch (error) {
        console.log(error);
    }
}
