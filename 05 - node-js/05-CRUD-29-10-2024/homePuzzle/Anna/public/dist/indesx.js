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
function getHello() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message, messageElement, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    //we will call the server
                    console.time('fetching hello');
                    return [4 /*yield*/, fetch('http://localhost:3000/api/get-hello')];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    console.timeEnd('fetching hello');
                    message = data.message;
                    // const message = data.message;
                    if (!message)
                        throw new Error('No message found');
                    messageElement = document.querySelector("#message");
                    if (!messageElement)
                        throw new Error('No message element found');
                    messageElement.innerHTML = message;
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
//getHello(); //calling the function
function handlePost(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var Title, des, img, dataTitle, dataDes, dataImg, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ev.preventDefault();
                    console.log(ev);
                    Title = document.querySelector("#title");
                    des = document.querySelector("#des");
                    img = document.querySelector("#imageInput");
                    if (!Title || !des)
                        throw new Error("Element not found");
                    dataTitle = Title.value;
                    dataDes = des.value;
                    dataImg = img.value;
                    console.log(dataTitle, dataDes, dataImg);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/send-posts', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ dataTitle: dataTitle, dataDes: dataDes, dataImg: dataImg })
                        })];
                case 1:
                    response = _a.sent();
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
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, post, postElement, lastIndex, newestPost, postContainer, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/get-posts')];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data.existPost.posts);
                    post = data.posts;
                    console.log(post);
                    savePostLocalStorage("posts", data.posts);
                    postElement = document.querySelector("#posts");
                    if (!postElement)
                        throw new Error("Element not found");
                    lastIndex = post.length - 1;
                    newestPost = post[lastIndex];
                    if (newestPost) {
                        postContainer = document.createElement("div");
                        postContainer.classList.add("post");
                        postContainer.innerHTML = renderPosts(newestPost);
                        postElement.appendChild(postContainer);
                    }
                    else
                        throw new Error("Post not found");
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
function renderPosts(post) {
    return "\n                <img src=\"" + post.img + "\" alt=\"post Imgae\">\n                <h1>" + post.title + "</h1>\n                <h4>" + post.des + "</h4>";
}
function savePostLocalStorage(name, posts) {
    localStorage.setItem(name, JSON.stringify(posts));
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
        var response, data, getLocalStorage, postElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/get-posts')];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    getLocalStorage = getPostLocalStorage("posts");
                    console.log(getPostLocalStorage("posts"));
                    postElement = document.querySelector("#posts");
                    getLocalStorage.forEach(function (post) {
                        var postContainer = document.createElement("div");
                        postContainer.classList.add("post");
                        postContainer.innerHTML = renderPosts(post);
                        postElement.appendChild(postContainer);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
