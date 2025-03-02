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
function handlePost(event) {
    return __awaiter(this, void 0, void 0, function () {
        var Title, des, img, dataTitle, dataDes, dataImg, id, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    console.log(event);
                    Title = document.querySelector("#title");
                    des = document.querySelector("#des");
                    img = document.querySelector("#imageInput");
                    if (!Title || !des)
                        throw new Error("Element not found");
                    dataTitle = Title.value;
                    dataDes = des.value;
                    dataImg = img.value;
                    id = "id-" + crypto.randomUUID();
                    return [4 /*yield*/, fetch('http://localhost:3000/api/users/send-posts', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ dataTitle: dataTitle, dataDes: dataDes, dataImg: dataImg, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    console.log(dataTitle, dataDes, dataImg);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    Title.value = "";
                    des.value = "";
                    img.value = "";
                    return [4 /*yield*/, getPosts()];
                case 3:
                    _a.sent();
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
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, UserPosts, allPosts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/users/get-posts')];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data.existPost);
                    console.log(data.posts);
                    UserPosts = [];
                    allPosts = getPostLocalStorage("UserPosts");
                    renderPosts(data.posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getPosts();
function savelocalStorage(name, posts) {
    localStorage.clear();
    localStorage.setItem(name, JSON.stringify(posts));
}
function renderPosts(posts) {
    try {
        var postContainer = document.getElementById('posts');
        if (!postContainer)
            throw new Error('Feed element not found');
        var htmlPosts = posts.map(function (post) {
            return renderPost(post);
        }).join('');
        postContainer.innerHTML = htmlPosts;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPost(post) {
    try {
        var html = "\n        <div class=\"post\" id=" + post._id + ">\n            <h2 id=\"title-" + post._id + "\">" + post.title + "</h2>\n            <p id=\"p-" + post._id + "\">" + post.des + "</p>\n            <button onclick=\"handleEditTitle('" + post._id + "')\">EDIT TITLE</button>\n            <button onclick=\"handleEditText('" + post._id + "')\">EDIT TEXT</button>\n            <button onclick=\"handleDeletePost('" + post._id + "')\">DELETE</button>\n            <button onclick=\"handleEditImg('" + post._id + "')\">Edit Photo</button>\n            <input id=\"editImg-" + post._id + "\" class=\"hide\" type=\"text\"  placeholder=\"add image\" >\n            <button id=\"updateImg-" + post._id + "\" class=\"hide\" > Update photo </button>\n            <img src=\"" + post.img + "\" alt=\"" + post.title + "\" />\n        </div>";
        return html;
    }
    catch (error) {
        console.log(error);
        return '';
    }
}
function getPostLocalStorage(name) {
    var localPost = localStorage.getItem(name);
    var localPosts = [];
    if (localPost) {
        localPosts = JSON.parse(localPost);
    }
    return localPosts;
}
function handleAllPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var getLocalStorage;
        return __generator(this, function (_a) {
            getLocalStorage = getPostLocalStorage("UserPosts");
            console.log(getLocalStorage);
            renderPosts(getLocalStorage);
            return [2 /*return*/];
        });
    });
}
function handleEditTitle(id) {
    return __awaiter(this, void 0, void 0, function () {
        var titleElement_1;
        var _this = this;
        return __generator(this, function (_a) {
            try {
                console.log('Edit title id:', id);
                titleElement_1 = document.querySelector("#title-" + id);
                if (!titleElement_1)
                    throw new Error("Title element not found");
                titleElement_1.contentEditable = "true";
                titleElement_1.focus();
                titleElement_1.addEventListener("blur", function () { return __awaiter(_this, void 0, void 0, function () {
                    var newtitle, allPosts, response, data;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                newtitle = titleElement_1.innerText.trim();
                                console.log("New Title:", newtitle);
                                titleElement_1.contentEditable = 'false';
                                allPosts = getPostLocalStorage("UserPosts");
                                return [4 /*yield*/, fetch('http://localhost:3000/api/users/edit-title', {
                                        method: "PATCH",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ id: id, title: newtitle, allPosts: allPosts })
                                    })];
                            case 1:
                                response = _a.sent();
                                return [4 /*yield*/, response.json()];
                            case 2:
                                data = _a.sent();
                                console.log("Server Response:", data);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function handleEditText(id) {
    return __awaiter(this, void 0, void 0, function () {
        var textElement_1;
        var _this = this;
        return __generator(this, function (_a) {
            try {
                textElement_1 = document.querySelector("#p-" + id);
                if (!textElement_1)
                    throw new Error("Text element not found");
                textElement_1.contentEditable = "true";
                textElement_1.focus();
                textElement_1.addEventListener("blur", function () { return __awaiter(_this, void 0, void 0, function () {
                    var des, response, data;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                des = textElement_1.innerText.trim();
                                console.log("New Description:", des);
                                textElement_1.contentEditable = 'false';
                                return [4 /*yield*/, fetch('http://localhost:3000/api/users/edit-text', {
                                        method: "PATCH",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ id: id, des: des })
                                    })];
                            case 1:
                                response = _a.sent();
                                return [4 /*yield*/, response.json()];
                            case 2:
                                data = _a.sent();
                                console.log("Server Response:", data);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            catch (error) {
            }
            return [2 /*return*/];
        });
    });
}
function handleDeletePost(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!id)
                        throw new Error("Post not found");
                    return [4 /*yield*/, fetch('http://localhost:3000/api/users/delete-posts', {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    getPosts();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleEditImg(id) {
    return __awaiter(this, void 0, void 0, function () {
        var imgInput_1, updateImgBtn;
        var _this = this;
        return __generator(this, function (_a) {
            try {
                if (!id)
                    throw new Error("Post not found");
                imgInput_1 = document.querySelector("#editImg-" + id);
                imgInput_1.style.display = "block";
                updateImgBtn = document.querySelector("#updateImg-" + id);
                updateImgBtn.style.display = "block";
                updateImgBtn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                    var newImg, response, data;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                newImg = imgInput_1.value;
                                return [4 /*yield*/, fetch('http://localhost:3000/api/users/editImg-posts', {
                                        method: "PATCH",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ id: id, newImg: newImg })
                                    })];
                            case 1:
                                response = _a.sent();
                                return [4 /*yield*/, response.json()];
                            case 2:
                                data = _a.sent();
                                console.log(data);
                                getPosts();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
