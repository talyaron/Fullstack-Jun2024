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
        var form, title, text, imageURL, newPost, posts, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // prevent refresh the page on click send in the form
                    event.preventDefault();
                    form = event.target;
                    title = form.elements.namedItem('title').value;
                    text = form.elements.namedItem('text').value;
                    imageURL = form.elements.namedItem('imageURL').value;
                    newPost = { id: Date.now(), title: title, text: text, imageURL: imageURL };
                    posts = loadPostsFromLocalStorage();
                    // push new post to array
                    posts.push(newPost);
                    // save the new information in the local storage
                    savePostsToLocalStorage(posts);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log('Sending post:', newPost);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/add-post', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            // compile the information to json
                            body: JSON.stringify(newPost)
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to add post');
                    console.log('Post added successfully!');
                    // clear the form after successfully request
                    form.reset();
                    return [4 /*yield*/, fetchPosts()];
                case 3:
                    _a.sent(); // update the feed after new post
                    renderPosts(); // render posts from localstorage
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error sending post:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// fetch posts function from the server
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, feedElement_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/get-posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    feedElement_1 = document.getElementById("feed");
                    if (!feedElement_1)
                        throw new Error("Feed element not found");
                    feedElement_1.innerHTML = ''; // מאפס את התוכן הקודם של הפיד
                    data.posts.forEach(function (post) {
                        var postElement = document.createElement("div");
                        postElement.className = "post";
                        postElement.innerHTML = "\n                <h3>" + post.title + "</h3>\n                <img src=\"" + post.imageURL + "\" alt=\"Image\" />\n                <p>" + post.text + "</p>\n                <button onclick=\"editPost(" + post.id + ", '" + post.title + "', '" + post.text + "', '" + post.imageURL + "')\">Edit</button>\n            ";
                        feedElement_1.appendChild(postElement);
                    });
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
// save posts in the localstorage
function savePostsToLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}
// load posts from the local storage function
function loadPostsFromLocalStorage() {
    var posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : []; // ממיר את המחרוזת לפורמט אובייקט
}
// render posts from the local storage function
function renderPosts() {
    var posts = loadPostsFromLocalStorage();
    var feedElement = document.getElementById('feed');
    if (!feedElement)
        throw new Error('Feed element not found');
    feedElement.innerHTML = '';
    posts.forEach(function (post) {
        var postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = "\n            <h3>" + post.title + "</h3>\n            <img src=\"" + post.imageURL + "\" alt=\"Image\" />\n            <p>" + post.text + "</p>\n            <button onclick=\"editPost(" + post.id + ", '" + post.title + "', '" + post.text + "', '" + post.imageURL + "')\">Edit</button>\n        ";
        feedElement.appendChild(postElement);
    });
}
renderPosts();
