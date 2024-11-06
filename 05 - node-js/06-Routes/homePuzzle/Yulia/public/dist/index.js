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
        var form, title, text, imageURL, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    form = event.target;
                    title = form.elements.namedItem("title").value;
                    text = form.elements.namedItem("text").value;
                    imageURL = form.elements.namedItem("imageURL")
                        .value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log("Sending post:", { title: title, text: text, imageURL: imageURL }); // Debug log
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/add-post", {
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
                    fetchPosts();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error sending post:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
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
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/get-posts")];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to fetch posts");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    feedElement = document.getElementById("feed");
                    if (!feedElement)
                        throw new Error("Feed element not found");
                    if (data.posts.length === 0)
                        return [2 /*return*/];
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
fetchPosts();
function savePostsToLocalStorage(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
}
function loadPostsFromLocalStorage() {
    var posts = localStorage.getItem("posts");
    return posts ? JSON.parse(posts) : [];
}
function renderPosts(posts) {
    var feedElement = document.getElementById("feed");
    if (!feedElement)
        throw new Error("Feed element not found");
    var htmlPosts = posts
        .map(function (post) { return renderPost(post); })
        .filter(function (post) { return post !== null; })
        .join("");
    feedElement.innerHTML = htmlPosts;
}
function renderPost(post) {
    try {
        var html = "\n        <div class=\"post\" id=\"post-" + post.id + "\">\n            <h3 id=\"title-" + post.id + "\">" + post.title + "</h3>\n            <button onclick=\"handleEditPost('" + post.id + "')\">Edit</button>\n            <button onclick=\"handleDelete('" + post.id + "')\">Delete</button>\n            <img src=\"" + post.imageURL + "\" alt=\"Image\" id=\"image-" + post.id + "\" />\n            <p id=\"text-" + post.id + "\">" + post.text + "</p>\n        </div>\n        ";
        return html;
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function handleEditPost(id) {
    var _this = this;
    try {
        console.log("Editing post:", id);
        var titleElement_1 = document.getElementById("title-" + id);
        var textElement_1 = document.getElementById("text-" + id);
        var imageElement = document.getElementById("image-" + id);
        if (!titleElement_1 || !textElement_1 || !imageElement) {
            throw new Error("Post elements not found");
        }
        // make the title, text, and image URL editable
        titleElement_1.contentEditable = "true";
        textElement_1.contentEditable = "true";
        titleElement_1.focus(); // focus on the title element
        // add an input field for the image URL
        var imageInput_1 = document.createElement("input");
        imageInput_1.type = "text";
        imageInput_1.value = imageElement.src;
        imageInput_1.id = "image-input-" + id;
        imageElement.insertAdjacentElement("afterend", imageInput_1);
        // blur event handler to save the changes
        var onEditComplete = function () { return __awaiter(_this, void 0, void 0, function () {
            var updatedPost, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updatedPost = {
                            title: titleElement_1.innerText,
                            text: textElement_1.innerText,
                            imageURL: imageInput_1.value
                        };
                        // end editing
                        titleElement_1.contentEditable = "false";
                        textElement_1.contentEditable = "false";
                        imageInput_1.remove(); // delete the input field
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch("http://localhost:3000/api/posts/edit/" + id, {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(updatedPost)
                            })];
                    case 2:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error("Failed to update post on server");
                        console.log("Post updated on server successfully!");
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.error("Error updating post:", error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // add blur event listeners to the title, text, and image URL elements
        titleElement_1.addEventListener("blur", onEditComplete);
        textElement_1.addEventListener("blur", onEditComplete);
        imageInput_1.addEventListener("blur", onEditComplete);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function handleDelete(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, postElement, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/posts/delete/" + id, {
                            method: "DELETE"
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to delete post on server");
                    console.log("Post deleted successfully!");
                    postElement = document.getElementById("post-" + id);
                    if (postElement)
                        postElement.remove();
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error deleting post:", error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function goToLogin() {
    window.location.href = "/login/login.html";
}
function goToRegister() {
    window.location.href = "/register/register.html";
}
// Add event listener to display the username when the page loads
document.addEventListener('DOMContentLoaded', function () {
    var username = localStorage.getItem('username');
    if (username) {
        // Create a greeting message and display it on the page
        var greetingElement = document.createElement('div');
        greetingElement.textContent = "Hi, " + username;
        document.body.prepend(greetingElement); // Add the greeting at the top of the page
    }
});
