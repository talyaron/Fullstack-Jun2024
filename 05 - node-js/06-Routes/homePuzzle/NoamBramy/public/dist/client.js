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
document.addEventListener('DOMContentLoaded', function () {
    getPosts();
});
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, postsContainer_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/users/get-posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    postsContainer_1 = document.querySelector("#posts");
                    if (!postsContainer_1)
                        throw new Error('No posts container found');
                    postsContainer_1.innerHTML = '';
                    posts.forEach(function (post) {
                        var postElement = document.createElement("div");
                        postElement.setAttribute("data-id", post.id);
                        postElement.classList.add("post");
                        postElement.innerHTML = "\n                <h2 class=\"post-title\">" + post.title + "</h2>\n                <p class=\"post-text\">" + post.text + "</p>\n                <img src=\"" + post.image + "\" alt=\"" + post.title + "\" class=\"post-image\" />\n                <input type=\"file\" class=\"post-image-input\" style=\"display: none;\" accept=\"image/*\" />\n                <button class=\"update-button\" onclick=\"handleToggleUpdatePost('" + post.id + "')\">Update</button>\n                <button class=\"delete-button\" onclick=\"handleDeletePost('" + post.id + "')\">Delete</button>\n            ";
                        postsContainer_1.appendChild(postElement);
                    });
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
function handleSendForm(event) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var target, titleInput, title, textInput, text, imageFile, imageUrl, imageData, uploadResponse, uploadResult, response, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    event.preventDefault();
                    target = event.target;
                    titleInput = target.querySelector('input[name="title"]');
                    title = titleInput.value;
                    textInput = target.querySelector('input[name="text"]');
                    text = textInput.value;
                    imageFile = (_a = target.querySelector('input[type="file"]').files) === null || _a === void 0 ? void 0 : _a[0];
                    if (!titleInput || !textInput)
                        throw new Error('Something Wrong with the handleSendForm');
                    imageUrl = '';
                    if (!imageFile) return [3 /*break*/, 3];
                    imageData = new FormData();
                    imageData.append('image', imageFile);
                    return [4 /*yield*/, fetch('/api/users/upload-image', {
                            method: 'POST',
                            body: imageData
                        })];
                case 1:
                    uploadResponse = _b.sent();
                    return [4 /*yield*/, uploadResponse.json()];
                case 2:
                    uploadResult = _b.sent();
                    imageUrl = uploadResult.imageUrl;
                    _b.label = 3;
                case 3: return [4 /*yield*/, fetch('/api/users/send-form', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ title: title, text: text, image: imageUrl })
                    })];
                case 4:
                    response = _b.sent();
                    if (!response.ok)
                        throw new Error('Failed to send post data');
                    return [4 /*yield*/, getPosts()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _b.sent();
                    console.error(error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function handleToggleUpdatePost(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var postElement, titleElement, textElement, imageInputElement, updatedTitle, updatedText, newImageFile, imageUrl, imageData, uploadResponse, uploadResult;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    postElement = document.querySelector(".post[data-id='" + id + "']");
                    if (!postElement)
                        throw new Error("Post Element Not Found");
                    titleElement = postElement.querySelector('.post-title');
                    textElement = postElement.querySelector('.post-text');
                    imageInputElement = postElement.querySelector('.post-image-input');
                    if (!titleElement.isContentEditable) return [3 /*break*/, 5];
                    updatedTitle = titleElement.innerText;
                    updatedText = textElement.innerText;
                    newImageFile = (_a = imageInputElement.files) === null || _a === void 0 ? void 0 : _a[0];
                    imageUrl = ((_b = postElement.querySelector('.post-image')) === null || _b === void 0 ? void 0 : _b.getAttribute('src')) || '';
                    if (!newImageFile) return [3 /*break*/, 3];
                    imageData = new FormData();
                    imageData.append('image', newImageFile);
                    return [4 /*yield*/, fetch('/api/users/upload-image', {
                            method: 'POST',
                            body: imageData
                        })];
                case 1:
                    uploadResponse = _c.sent();
                    return [4 /*yield*/, uploadResponse.json()];
                case 2:
                    uploadResult = _c.sent();
                    imageUrl = uploadResult.imageUrl;
                    _c.label = 3;
                case 3: return [4 /*yield*/, updatePost(id, updatedTitle, updatedText, imageUrl)];
                case 4:
                    _c.sent();
                    titleElement.contentEditable = "false";
                    textElement.contentEditable = "false";
                    imageInputElement.style.display = "none";
                    return [3 /*break*/, 6];
                case 5:
                    titleElement.contentEditable = "true";
                    textElement.contentEditable = "true";
                    imageInputElement.style.display = "block";
                    titleElement.focus();
                    _c.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function updatePost(id, title, text, image) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/users/update-post/" + id, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ title: title, text: text, image: image })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to update post');
                    console.log("Post updated successfully");
                    return [4 /*yield*/, getPosts()];
                case 2:
                    _a.sent();
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
function handleDeletePost(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/users/delete-post/" + id, {
                            method: 'DELETE'
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to delete post');
                    return [4 /*yield*/, getPosts()];
                case 2:
                    _a.sent();
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
