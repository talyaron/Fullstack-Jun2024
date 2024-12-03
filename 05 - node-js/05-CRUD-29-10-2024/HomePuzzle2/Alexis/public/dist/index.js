var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function handleSendPost(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, title, text, imageUrl, response, errorData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    form = event.target;
                    title = form.elements.namedItem('title').value.trim();
                    text = form.elements.namedItem('text').value.trim();
                    imageUrl = form.elements.namedItem('image').value.trim();
                    console.log('Captured values:', { title: title, text: text, imageUrl: imageUrl });
                    if (!title) {
                        alert('Post title is required');
                        return [2 /*return*/];
                    }
                    if (!text) {
                        alert('Caption text is required');
                        return [2 /*return*/];
                    }
                    if (!imageUrl) {
                        alert('Image URL is required');
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    console.log('Sending post:', { title: title, text: text, imageUrl: imageUrl });
                    return [4 /*yield*/, fetch('/api/posts/add-post', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ title: title, text: text, image: imageUrl })
                        })];
                case 2:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    errorData = _a.sent();
                    throw new Error(errorData.message || 'Failed to add post');
                case 4:
                    console.log('Post added successfully!');
                    form.reset();
                    return [4 /*yield*/, fetchPosts()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    alert("Error sending post: " + error_1.message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, feedElement, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/posts/get-posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    feedElement = document.getElementById("feed");
                    if (!feedElement)
                        throw new Error("Feed element not found");
                    if (data.posts.length === 0) {
                        feedElement.innerHTML = "<p>No posts available.</p>";
                        return [2 /*return*/];
                    }
                    renderPosts(data.posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error fetching posts:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderPosts(posts) {
    var feedElement = document.getElementById('feed');
    if (!feedElement)
        throw new Error('Feed element not found');
    var htmlPosts = posts.map(renderPost).filter(function (post) { return post !== null; }).join('');
    feedElement.innerHTML = htmlPosts;
}
function renderPost(post) {
    return "\n        <div class=\"post\" id=\"post-" + post.id + "\">\n            <h3 id=\"title-" + post.id + "\">" + post.title + "</h3>\n            <img src=\"" + post.image + "\" alt=\"Image\" id=\"image-" + post.id + "\" />\n            <p id=\"text-" + post.id + "\">" + post.text + "</p>\n            <button onclick=\"handleEditField('" + post.id + "', 'title')\">Edit Title</button>\n            <button onclick=\"handleEditField('" + post.id + "', 'text')\">Edit Text</button>\n            <button onclick=\"handleEditImage('" + post.id + "')\">Edit Image URL</button>\n            <button onclick=\"handleDeletePost('" + post.id + "')\">Delete</button>\n        </div>\n    ";
}
function handleEditField(id, field) {
    return __awaiter(this, void 0, void 0, function () {
        var element_1;
        var _this = this;
        return __generator(this, function (_a) {
            try {
                element_1 = document.getElementById(field + "-" + id);
                if (!element_1)
                    throw new Error(field.charAt(0).toUpperCase() + field.slice(1) + " element not found");
                element_1.contentEditable = 'true';
                element_1.focus();
                element_1.addEventListener("blur", function () { return __awaiter(_this, void 0, void 0, function () {
                    var newValue;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                newValue = element_1.innerText.trim();
                                element_1.contentEditable = 'false';
                                if (!newValue) return [3 /*break*/, 2];
                                return [4 /*yield*/, updatePost(id, (_a = {}, _a[field] = newValue, _a))];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, { once: true });
            }
            catch (error) {
                console.error('Error:', error);
                alert("Error editing " + field + ": " + error.message);
            }
            return [2 /*return*/];
        });
    });
}
function handleEditImage(id) {
    return __awaiter(this, void 0, void 0, function () {
        var newImageUrl, urlPattern;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newImageUrl = prompt("Enter the new image URL:");
                    if (!newImageUrl) return [3 /*break*/, 2];
                    urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
                    if (!urlPattern.test(newImageUrl)) {
                        alert('Please enter a valid image URL');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, updatePost(id, { image: newImageUrl })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function updatePost(id, updatedFields) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/edit-post", {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(__assign({ id: id }, updatedFields))
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to update post');
                    console.log("Post with ID " + id + " updated successfully");
                    return [4 /*yield*/, fetchPosts()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error updating post:', error_3);
                    alert("Error updating post: " + error_3.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDeletePost(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a, _b, _c, feedElement, postElement, error_4;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log("Deleting post with ID:", id);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/delete-post", {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: id })
                        })];
                case 2:
                    response = _d.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    _b = (_a = console).error;
                    _c = ['Failed to delete post. Server response:'];
                    return [4 /*yield*/, response.json()];
                case 3:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    throw new Error('Failed to delete post');
                case 4:
                    console.log("Post with ID " + id + " deleted successfully");
                    feedElement = document.getElementById("feed");
                    postElement = document.getElementById("post-" + id);
                    if (feedElement && postElement) {
                        feedElement.removeChild(postElement);
                    }
                    if (feedElement && feedElement.children.length === 0) {
                        feedElement.innerHTML = "<p>No posts available.</p>";
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_4 = _d.sent();
                    console.error('Error deleting post:', error_4);
                    alert("Error deleting post: " + error_4.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
fetchPosts();
