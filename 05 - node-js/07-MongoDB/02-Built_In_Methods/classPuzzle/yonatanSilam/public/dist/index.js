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
function handleSendPet(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, name, gender, imageURL, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    form = event.target;
                    name = form.elements.namedItem('name').value;
                    gender = form.elements.namedItem('gender').value;
                    imageURL = form.elements.namedItem('imageURL').value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/pets/add-pet', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ name: name, gender: gender, imageURL: imageURL })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to add post');
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    form.reset();
                    fetchPets();
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
function fetchPets() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, feedElement, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/pets/get-pets')];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to fetch posts');
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    feedElement = document.getElementById("feed");
                    if (!feedElement)
                        throw new Error("Feed element not found");
                    if (data.pets.length === 0)
                        return [2 /*return*/];
                    renderPets(data.pets);
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
fetchPets();
function savePostsToLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}
function loadPostsFromLocalStorage() {
    var posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
}
// async function handleSendPost(event: Event) {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;
//     const title = (form.elements.namedItem('title') as HTMLInputElement).value;
//     const text = (form.elements.namedItem('text') as HTMLInputElement).value;
//     const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;
//     const newPost = { title, text, imageURL };
//     const posts = loadPostsFromLocalStorage();
//     posts.push(newPost);
//     savePostsToLocalStorage(posts);
//     form.reset();
//     renderPets();
// }
function renderPets(pets) {
    var feedElement = document.getElementById('feed');
    if (!feedElement)
        throw new Error('Feed element not found');
    var htmlPets = pets.map(function (pet) {
        return renderPet(pet);
    }).filter(function (post) { return post !== null; }).join('');
    feedElement.innerHTML = htmlPets;
}
function renderPet(pet) {
    try {
        console.log(pet);
        var html = "\n        <div class=\"pet\">\n            <h3 id=\"title-" + pet._id + "\">" + pet.name + "</h3>\n            " + (pet.imageURL ? "<img src=\"" + pet.imageURL + "\" alt=\"Image\" />" : '') + "\n            <button onclick=\"handleEditTitle('" + pet._id + "')\" >Edit</button><button onclick=\"handleDelete('" + pet._id + "')\">Delete</button>\n            <p>" + pet.gender + "</p>\n        </div>\n        ";
        return html;
    }
    catch (error) {
        console.error('Error:', error);
    }
}
function handleDelete(id) {
    return __awaiter(this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("delete title:", id);
                    return [4 /*yield*/, DeleteOnServer(id)];
                case 1:
                    _a.sent();
                    fetchPets();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Error:', error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function DeleteOnServer(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/pets/delete-pets", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to delete post");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Post delete:", data.message);
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
function handleEditTitle(id) {
    try {
        console.log("Edit title:", id);
        var titleElement_1 = document.getElementById("title-" + id);
        if (!titleElement_1)
            throw new Error('Title element not found');
        titleElement_1.contentEditable = 'true';
        titleElement_1.focus();
        titleElement_1.addEventListener("blur", function (event) {
            var title = titleElement_1.innerText;
            console.log("New title:", title);
            titleElement_1.contentEditable = 'false';
            //how to update the title in the server
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
}
