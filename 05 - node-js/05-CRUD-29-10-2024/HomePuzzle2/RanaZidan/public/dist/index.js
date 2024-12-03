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
function handleSendPost1(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, title, text, imageURL, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    form = event.target;
                    title = form.elements.namedItem("title").value;
                    text = form.elements.namedItem("text").value;
                    imageURL = form.elements.namedItem("imageURL").value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/add-post", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ title: title, text: text, imageURL: imageURL })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to add post");
                    console.log("Post added successfully!");
                    form.reset();
                    return [4 /*yield*/, fetchPosts()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error sending post:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleUpdatePost(index, field, value) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/update-post/" + index, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify((_a = {}, _a[field] = value, _a))
                        })];
                case 1:
                    response = _b.sent();
                    if (!response.ok)
                        throw new Error('Failed to update post');
                    console.log("updating post at index", index);
                    updateLocalPost(index, field, value);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error('Error updating post:', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function updateLocalPost(index, field, value) {
    var elementId = field + "-" + index;
    var element = document.getElementById(elementId);
    if (!element)
        return;
    if (field === 'imageURL') {
        var imgElement = document.getElementById("image-display-" + index);
        if (imgElement) {
            imgElement.src = value;
        }
        element.value = value;
    }
    else {
        element.textContent = value;
    }
}
function handleDeletePost(index) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm('Are you sure you want to delete this post?')) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/delete-post/" + index, {
                            method: 'DELETE'
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to delete post');
                    console.log("deleted successfully");
                    fetchPosts();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error deleting post:', error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, feedElement_1, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/get-posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    feedElement_1 = document.getElementById("feed");
                    if (!feedElement_1)
                        throw new Error("Feed element not found");
                    feedElement_1.innerHTML = "";
                    data.posts.forEach(function (post, index) {
                        var postElement = document.createElement("div");
                        postElement.className = "post";
                        postElement.innerHTML = "\n  <div class=\"post-content\">\n    <div class=\"field-container\">\n      <h3 class=\"post-title\" id=\"title-" + index + "\">" + post.title + "</h3>\n    </div>\n    <div class=\"edit-button-container\">\n      <button class=\"edit-button\" onclick=\"makeEditable('title-" + index + "', " + index + ", 'title')\">\n        Edit\n      </button>\n    </div>\n\n    <div class=\"field-container\">\n      <img id=\"image-display-" + index + "\" src=\"" + post.imageURL + "\" alt=\"Post image\" />\n    </div>\n    <div class=\"edit-button-container\">\n      <button class=\"edit-button\" onclick=\"toggleImageInput(" + index + ")\">\n        Edit\n      </button>\n    </div>\n    <input type=\"text\" id=\"image-" + index + "\" class=\"image-url-input\" value=\"" + post.imageURL + "\" style=\"display: none;\" onchange=\"updateImage(" + index + ")\" />\n    </br>\n    <div class=\"field-container\">\n      <p class=\"post-text\" id=\"text-" + index + "\">" + post.text + "</p>\n    </div>\n    <div class=\"edit-button-container\">\n      <button class=\"edit-button\" onclick=\"makeEditable('text-" + index + "', " + index + ", 'text')\">\n        Edit\n      </button>\n    </div>\n    </br>\n    <button class=\"delete-button\" onclick=\"handleDeletePost(" + index + ")\">Delete</button>\n  </div>\n";
                        feedElement_1.appendChild(postElement);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error("Error fetching posts:", error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeEditable(elementId, index, field) {
    var _this = this;
    var element = document.getElementById(elementId);
    if (!element)
        return;
    var currentText = field === 'imageURL' ?
        element.value :
        element.textContent || '';
    var input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.className = 'edit-input';
    input.onblur = function () { return __awaiter(_this, void 0, void 0, function () {
        var img;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleUpdatePost(index, field, input.value)];
                case 1:
                    _a.sent();
                    if (field === 'imageURL') {
                        element.value = input.value;
                        element.style.display = 'none';
                        img = document.getElementById("image-display-" + index);
                        if (img) {
                            img.src = input.value;
                        }
                    }
                    else {
                        element.textContent = input.value;
                    }
                    element.style.display = 'block';
                    return [2 /*return*/];
            }
        });
    }); };
    if (field === 'imageURL') {
        element.style.display = 'none';
        var imageInput = document.getElementById("image-" + index);
        if (imageInput) {
            imageInput.style.display = 'block';
            imageInput.focus();
        }
    }
    else {
        element.textContent = '';
        element.appendChild(input);
        input.focus();
    }
}
function toggleImageInput(index) {
    var imageInput = document.getElementById("image-" + index);
    imageInput.style.display = imageInput.style.display === 'none' ? 'block' : 'none';
    if (imageInput.style.display === 'block') {
        imageInput.focus();
    }
}
function updateImage(index) {
    var imageInput = document.getElementById("image-" + index);
    var img = document.getElementById("image-display-" + index);
    if (img) {
        img.src = imageInput.value;
    }
}
document.addEventListener('DOMContentLoaded', fetchPosts);
