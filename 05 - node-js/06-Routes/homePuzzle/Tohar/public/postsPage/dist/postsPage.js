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
function renderMainPage() {
    var html = "\n    <h1>New Post</h1>\n    <form onsubmit=\"handleCreatePost(event)\">\n        <input type=\"text\" name=\"caption\" placeholder=\"Write a caption...\" required>\n        <input type=\"url\" name=\"imageURL\" placeholder=\"Enter image URL\" required>\n        <button type=\"submit\">Post</button>\n    </form>\n    ";
    // <input type="file" name="image" id="imageUpload" name="imageUpload" accept="image/*">
    document.querySelector('#main').innerHTML = html;
}
;
renderMainPage();
function handleCreatePost(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, caption, imageURL, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    form = event.target;
                    caption = form.elements.namedItem('caption').value;
                    imageURL = form.elements.namedItem('imageURL').value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log('Sending post:', { caption: caption, imageURL: imageURL });
                    return [4 /*yield*/, fetch('http://localhost:3000/api/post/create-post', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ caption: caption, imageURL: imageURL })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to add post');
                    console.log('Post added successfully!');
                    form.reset();
                    fetchPosts();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error sending post:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/post/get-posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    // const feedElement = document.getElementById("feed");
                    // if (!feedElement) throw new Error("Feed element not found");
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
;
function renderPosts(posts) {
    var feedElement = document.getElementById('feed');
    if (!feedElement)
        throw new Error('Feed element not found');
    var htmlPosts = posts.map(function (post) {
        return renderPost(post);
    }).filter(function (post) { return post !== null; }).join('');
    feedElement.innerHTML = htmlPosts;
}
;
function renderPost(post) {
    try {
        var html = "\n        <div class=\"post\" id=\"post\">\n            <img src=\"" + post.imageURL + "\" id=\"imageURL-" + post.id + "\" alt=\"inputImage\" />\n            <h3 id=\"caption-" + post.id + "\">" + post.caption + "</h3>\n            <button onclick=\"handleEditCaption('" + post.id + "')\" >Edit</button>\n            <button onclick=\"handlDeletePost('" + post.id + "')\">Delete</button>\n            <button onclick=\"handleEditImage('" + post.id + "')\">Change Image</button>\n            <div id=\"editImageInput\"></div>\n        </div>\n        ";
        return html;
    }
    catch (error) {
        console.error('Error:', error);
    }
}
;
function handleEditCaption(id) {
    try {
        var captionElement_1 = document.getElementById("caption-" + id);
        if (!captionElement_1)
            throw new Error('Caption element not found');
        captionElement_1.contentEditable = 'true';
        captionElement_1.focus();
        captionElement_1.addEventListener("blur", function (event) {
            var caption = captionElement_1.innerText;
            captionElement_1.contentEditable = 'false';
            fetchEditedCaption(id, caption);
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
}
;
function fetchEditedCaption(id, caption) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/post/edit-caption/update-post', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: id, caption: caption })
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        console.error("Failed to update title:", response.statusText);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data, 'success');
                    return [2 /*return*/];
            }
        });
    });
}
;
function handleEditImage(id, imageURL) {
    try {
        var imageElement = document.getElementById("imageURL-" + id);
        if (!imageElement)
            throw new Error('image element not found');
        var inputUrlElement = "\n        <input id=\"imageInput\" type=\"url\" name=\"editImageURL\" placeholder=\"Enter image URL\" require>\n        <button onclick=\"changeImage(id)\">Edit</button>\n        ";
        document.querySelector('#editImageInput').innerHTML = inputUrlElement;
    }
    catch (error) {
        console.error('Error:', error);
    }
}
;
function changeImage(id) {
    var inputValue = document.getElementById('imageInput').value;
    if (!inputValue)
        throw new Error('image input not found');
    document.querySelector('#editImageInput').innerHTML = '';
    fethcChangeImage(inputValue, id);
}
function fethcChangeImage(image, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/post/update-image', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ image: image, id: id })
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        console.error("Failed to update image:", response.statusText);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data, 'success');
                    return [2 /*return*/];
            }
        });
    });
}
function handlDeletePost(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/post/delete-post', {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    console.log('in delete');
                    if (!response.ok) {
                        console.error("Failed to update title:", response.statusText);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data, 'success');
                    fetchPosts();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error:', error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
