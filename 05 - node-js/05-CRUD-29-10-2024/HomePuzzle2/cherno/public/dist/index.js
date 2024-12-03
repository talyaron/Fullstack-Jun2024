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
function renderPage(posts) {
    try {
        var appElement = document.querySelector("#app");
        if (!appElement)
            throw new Error("app element not found");
        appElement.innerHTML = "\n        <div class=\"posts-container\">\n            " + posts.map(formatPost).join("") + "\n        </div>\n        <button onclick=\"logout()\"> logout </button>\n        <a href=\"post/post.html\"> new post </a>\n        ";
    }
    catch (e) {
        console.error(e);
    }
}
function logout() {
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/login/login.html";
}
function getPosts(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, posts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/get-user-posts?user=" + userId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    posts = data.posts;
                    if (!posts)
                        throw new Error('couldnt find posts');
                    renderPage(posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function formatPost(post) {
    return "\n    <div class=\"post\" id=\"" + post.id + "\">\n        <h2 class=\"post__title\">" + post.title + "</h2>\n        <img class=\"post__image\" src=\"" + post.image + "\" alt=\"" + post.title + "\"> \n        <p class=\"post__text\">" + post.text + "</p>\n        <div class=\"post__edit\">\n            <button class=\"post__edit__title\" onclick=\"editTitle('" + post.id + "')\"> Edit Title </button>\n            <button class=\"post__edit__text\" onclick=\"editText('" + post.id + "')\"> Edit Text </button>\n            <button class=\"post__edit__image\" onclick=\"editImage('" + post.id + "')\"> Edit Image </button>\n            <button class=\"post__edit__delete\" onclick=\"deletePost('" + post.id + "')\"> Delete </button>\n        </div>\n    </div>\n    ";
}
function editTitle(postId) {
    var _a;
    try {
        var titleElement_1 = (_a = document.getElementById(postId)) === null || _a === void 0 ? void 0 : _a.querySelector(".post__title");
        if (!titleElement_1)
            throw new Error("title element not found");
        titleElement_1.contentEditable = "true";
        titleElement_1.focus();
        titleElement_1.addEventListener("blur", function (event) {
            var newTitle = titleElement_1.innerText;
            titleElement_1.contentEditable = "false";
            editPost(postId, "title", newTitle);
        });
    }
    catch (e) {
        console.error("editTitle: ", e);
    }
}
function editText(postId) {
    var _a;
    try {
        var textElement_1 = (_a = document.getElementById(postId)) === null || _a === void 0 ? void 0 : _a.querySelector(".post__text");
        if (!textElement_1)
            throw new Error("text element not found");
        textElement_1.contentEditable = "true";
        textElement_1.focus();
        textElement_1.addEventListener("blur", function (event) {
            var newText = textElement_1.innerText;
            textElement_1.contentEditable = "false";
            editPost(postId, "text", newText);
        });
    }
    catch (e) {
        console.error("editText: ", e);
    }
}
function editImage(postId) {
    var _a;
    try {
        var textElement_2 = (_a = document.getElementById(postId)) === null || _a === void 0 ? void 0 : _a.querySelector(".post__image");
        if (!textElement_2)
            throw new Error("image element not found");
        textElement_2.contentEditable = "true";
        textElement_2.focus();
        textElement_2.addEventListener("blur", function (event) {
            var newText = textElement_2.innerText;
            textElement_2.contentEditable = "false";
            editPost(postId, "text", newText);
        });
    }
    catch (e) {
        console.error("editImage: ", e);
    }
}
function editPost(postId, type, content) {
    return __awaiter(this, void 0, void 0, function () {
        var user, response, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    user = localStorage.getItem("user");
                    return [4 /*yield*/, fetch("http://localhost:3000/api/edit-post", {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ postId: postId, type: type, content: content, user: user })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("post edited successfully");
                    getPosts(user);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error("editPost: ", e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deletePost(postId) {
    return __awaiter(this, void 0, void 0, function () {
        var user, response, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    user = localStorage.getItem("user");
                    return [4 /*yield*/, fetch("http://localhost:3000/api/delete-post", {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ postId: postId, user: user })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("post deleted successfully");
                    getPosts(user);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.error("deletePost: ", e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function main() {
    var user = localStorage.getItem('user');
    if (!user)
        window.location.href = "http://localhost:3000/login/login.html";
    getPosts(user);
}
main();
