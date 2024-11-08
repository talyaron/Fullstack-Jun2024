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
var _a;
var editingPostId = null;
//function that send the post information to the server
function sendPostToServer() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var title, description, username, imgUrl, id, post, response, data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    title = document.getElementById("form__title").value;
                    description = document.getElementById("form__description").value;
                    username = document.getElementById("form__username").value;
                    imgUrl = document.getElementById("form__imgurl").value;
                    id = editingPostId || crypto.randomUUID();
                    post = { id: id, title: title, description: description, username: username, imgUrl: imgUrl };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(editingPostId ? "/api/update-post/" + id : "/api/add-post", {
                            method: editingPostId ? "PUT" : "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ post: post })
                        })];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _b.sent();
                    if (response.ok) {
                        savePostToLocalStorage(post);
                        if (editingPostId) {
                            (_a = document.getElementById(editingPostId)) === null || _a === void 0 ? void 0 : _a.remove();
                        }
                        renderPost(post);
                        console.log("Post processed successfully:", data.message);
                        editingPostId = null;
                        resetForm();
                    }
                    else {
                        console.error("Error:", data.message);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    console.error("Failed to process post:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function editPost(post) {
    editingPostId = post.id;
    document.getElementById("form__title").value = post.title;
    document.getElementById("form__description").value = post.description;
    document.getElementById("form__username").value = post.username;
    document.getElementById("form__imgurl").value = post.imgUrl;
}
function savePostToLocalStorage(post) {
    var posts = JSON.parse(localStorage.getItem("posts") || "[]");
    var existingPostIndex = posts.findIndex(function (p) { return p.id === post.id; });
    if (existingPostIndex !== -1) {
        posts[existingPostIndex] = post;
    }
    else {
        posts.push(post);
    }
    localStorage.setItem("posts", JSON.stringify(posts));
}
function renderPost(post) {
    var _a, _b;
    var postElement = document.getElementById(post.id);
    if (!postElement) {
        postElement = document.createElement("div");
        postElement.className = "post";
        postElement.id = post.id;
        var postContainer = document.getElementById("posts");
        postContainer === null || postContainer === void 0 ? void 0 : postContainer.appendChild(postElement);
    }
    postElement.innerHTML = "\n        <h2>" + post.title + "</h2>\n        <p>" + post.description + "</p>\n        <p>Posted by: " + post.username + "</p>\n        <img src=\"" + post.imgUrl + "\" alt=\"Post Image\">\n        <button class=\"edit-button\">Edit Post</button>\n        <button class=\"delete-button\">Delete Post</button>";
    (_a = postElement.querySelector(".delete-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        deletePost(post.id, postElement);
    });
    (_b = postElement.querySelector(".edit-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        editPost(post);
    });
}
//add event listener to buttun "send"
(_a = document.getElementById("send")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", sendPostToServer);
function deletePost(postId, postElement) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/delete-post/" + postId, {
                            method: "DELETE"
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 2];
                    removePostFromLocalStorage(postId);
                    postElement.remove();
                    console.log("Post deleted successfully.");
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.error("Error deleting post:", data.message);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Failed to delete post:", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function removePostFromLocalStorage(postId) {
    var posts = JSON.parse(localStorage.getItem("posts") || "[]");
    var updatedPosts = posts.filter(function (post) { return post.id !== postId; });
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
}
function loadPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/get-posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    data.posts.forEach(function (post) {
                        renderPost(post);
                        savePostToLocalStorage(post);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Failed to load posts:", error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function resetForm() {
    document.getElementById("form__title").value = '';
    document.getElementById("form__description").value = '';
    document.getElementById("form__username").value = '';
    document.getElementById("form__imgurl").value = '';
}
window.addEventListener("load", loadPosts);
