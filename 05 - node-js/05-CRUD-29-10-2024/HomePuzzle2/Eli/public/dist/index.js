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
var localStorageDetail = localStorage.getItem("key");
var key = localStorageDetail ? JSON.parse(localStorageDetail) : "";
checkKey();
function checkKey() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message, name, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!(key.length > 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch("http://localhost:3000/api/check-key", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ key: key })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    message = data.message;
                    name = data.name;
                    //console.log(message);
                    if (!data.error) {
                        console.log(message);
                        getPosts();
                        setInterval(getPosts, 300);
                        sayHelloToUser(name);
                        return [2 /*return*/];
                    }
                    console.log(data);
                    localStorage.removeItem("key");
                    redirectToLogin();
                    return [3 /*break*/, 4];
                case 3:
                    redirectToLogin();
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function sayHelloToUser(name) {
    var helloElement = document.getElementById("helloUser-text");
    helloElement.innerText = "Hello " + name;
}
var postLength = 0;
function checkForm(event) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    formData = new FormData(event.target);
                    formData.append("key", key);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/add-post", {
                            method: "POST",
                            body: formData
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var selfPost = false;
function switchView() {
    updated = true;
    var switchViewButton = document.getElementById("viewSwitcher");
    selfPost = !selfPost;
    if (!selfPost) {
        switchViewButton.innerText = "see only your posts";
    }
    else
        switchViewButton.innerText = "see all posts";
}
function logOut() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/log-out", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ key: key })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    message = data.message;
                    console.log(message);
                    localStorage.removeItem("key");
                    redirectToLogin();
                    console.log(data);
                    return [2 /*return*/];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function redirectToLogin() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (postLength < 0)
                return [2 /*return*/];
            document.body.innerHTML = " <div class=\"redirect-container\">\n    <div class=\"redirect-message\">\n      <h2>Redirecting...</h2>\n      <p>Please wait while we take you to the login page.</p>\n    </div>\n    <div class=\"spinner-container\">\n      <div class=\"spinner\"></div>\n    </div>\n  </div>";
            setTimeout(function () {
                window.location.href = "http://localhost:3000/login";
            }, 500);
            postLength = -1;
            return [2 /*return*/];
        });
    });
}
var updated = false;
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, postsOfAll, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/get-posts", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ key: key })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    postsOfAll = data.postsOfAll;
                    if (postLength !== postsOfAll.length || updated == true) {
                        renderPosts(postsOfAll);
                        postLength = postsOfAll.length;
                        updated = false;
                    }
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
function renderPosts(posts) {
    try {
        var postsElement_1 = document.getElementById("feed");
        postsElement_1.innerHTML = "";
        if (!postsElement_1)
            throw new Error("Element with ID 'feed' not found.");
        posts.forEach(function (post) {
            console.log("hello" + post.userMade);
            if (selfPost === true && !post.userMade) {
                console.log("skipped" + post.name);
                return;
            }
            var postElement = document.createElement("div");
            if (post.img) {
                postElement.innerHTML = "<div id=\"" + post.id + "\" class=\"post\">\n       <div id=\"name\"><h1>" + post.creatorName + "<h1></div>\n      <div id=\"text\"> <h1> " + post.title + " </h1>  <p> " + post.description + " </p>  </div>  <img id =\"img\" src=\"http://localhost:3000/uploads/" + post.img + "\">  </div>   ";
            }
            else {
                postElement.innerHTML = "<div id=\"" + post.id + "\" class=\"post\">\n           <div id=\"name\"><h1>" + post.creatorName + "<h1></div>\n     <div id=\"bigText\"> <h1> " + post.title + " </h1>  <p> " + post.description + " </p> </div> ";
            }
            if (post.userMade) {
                var interactButtons = document.createElement("div");
                var id = post.id;
                interactButtons.id = "interactButtons";
                createButtons(interactButtons, post.id);
                postElement.appendChild(interactButtons);
            }
            postsElement_1.appendChild(postElement);
        });
    }
    catch (error) {
        console.error("Error fetching posts:", error);
    }
}
function updatePost(id) {
    console.log("aaaaaaaaaaa");
}
function createButtons(parent, id) {
    var buttonRemove = document.createElement("button");
    buttonRemove.className = "removeBtn";
    buttonRemove.id = "remove-" + id;
    buttonRemove.innerText = "Remove";
    var buttonUpdate = document.createElement("button");
    buttonUpdate.className = "updateBtn";
    buttonUpdate.id = "update-" + id;
    buttonUpdate.innerText = "update";
    buttonRemove.addEventListener("click", function () { return removePost(id); });
    buttonUpdate.addEventListener("click", function () { return updatePost(id); });
    parent.appendChild(buttonUpdate);
    parent.appendChild(buttonRemove);
}
function removePost(postId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message, error, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log("Removing post:", postId);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/remove-post", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ postId: postId })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        console.error("Network response was not ok");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    message = data.message, error = data.error;
                    if (!error) {
                        console.log("Post Removed!");
                    }
                    else {
                        console.log("Something went wrong:", error);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error("Error in removePost function:", error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var imageInput = document.getElementById("image");
console.log(imageInput);
