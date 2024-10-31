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
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    renderPosts(posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching posts:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handlePostSubmission(event) {
    return __awaiter(this, void 0, void 0, function () {
        var titleInput, textInput, imageUrlInput, title, text, imageUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    titleInput = document.getElementById("title");
                    textInput = document.getElementById("text");
                    imageUrlInput = document.getElementById("imageUrl");
                    title = titleInput.value;
                    text = textInput.value;
                    imageUrl = imageUrlInput.value;
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ title: title, text: text, imageUrl: imageUrl })
                        })];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        fetchPosts();
                        titleInput.value = "";
                        textInput.value = "";
                        imageUrlInput.value = "";
                    }
                    else {
                        console.error("Failed to create post");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function renderPosts(posts) {
    var postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";
    posts.forEach(function (post) {
        var postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = "\n      <h2>" + post.title + "</h2>\n      <p>" + post.text + "</p>\n      <img src=\"" + post.imageUrl + "\" alt=\"" + post.title + "\">\n    ";
        postsContainer.appendChild(postElement);
    });
}
document
    .getElementById("postForm")
    .addEventListener("submit", handlePostSubmission);
fetchPosts();
