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
var gameCanvas = document.getElementById("canvas");
var usersLength = 0;
var Player = /** @class */ (function () {
    function Player(playing, id, lastContacted) {
        this.playing = playing;
        this.id = id;
        this.lastContacted = lastContacted;
    }
    return Player;
}());
var boxes = [];
requestAccess();
function requestAccess() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message, newUser, newPlayer, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    //we will call the server
                    console.time("getNewUser");
                    return [4 /*yield*/, fetch("http://localhost:3000/api/getNewUser")];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    console.timeEnd("getNewUser");
                    message = data.message;
                    newUser = data.newUser;
                    // const message = data.message;
                    if (!message)
                        throw new Error("No message found");
                    if (!newUser)
                        return [2 /*return*/];
                    //const messageElement = document.querySelector("#message");
                    //  if(!messageElement) throw new Error('No message element found');
                    console.log(message, "wwwwww", newUser.id);
                    newPlayer = new Player(true, newUser.id, 0);
                    getPositions();
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
setInterval(getPositions, 300);
function getPositions() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message_1, users, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    //we will call the server
                    console.time("getUsers");
                    return [4 /*yield*/, fetch("http://localhost:3000/api/getUsers")];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    console.timeEnd("getUsers");
                    message_1 = data.message;
                    users = data.users;
                    // const message = data.message;
                    if (!message_1)
                        throw new Error("No message found");
                    if (!users)
                        return [2 /*return*/];
                    //const messageElement = document.querySelector("#message");
                    //  if(!messageElement) throw new Error('No message element found');
                    gameCanvas.innerHTML = "";
                    users.forEach(function (element) {
                        console.log(message_1, "wwwwww", element.id);
                        createBoxes(element.pos.x, element.pos.y, element.id);
                    });
                    usersLength = users.length;
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
function moveDown() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
function createBoxes(x, y, id) {
    var box = new Box(id, { x: x, y: y }, { x: 100, y: 100 });
    boxes.push(box);
    console.log(box);
}
function drawAll() {
}
var Box = /** @class */ (function () {
    function Box(id, pos, size) {
        this.Id = id;
        this.pos = pos;
        this.size = size;
        this.createElement();
    }
    Box.prototype.createElement = function () {
        this.boxHtmlElement = document.createElement("div");
        this.boxHtmlElement.id = "box";
        this.boxHtmlElement.style.position = "relative";
        this.boxHtmlElement.style.left = this.pos.x + "px";
        this.boxHtmlElement.style.top = this.pos.y + "px";
        this.boxHtmlElement.style.height = this.size.y + "px";
        this.boxHtmlElement.style.width = this.size.x + "px";
        gameCanvas.appendChild(this.boxHtmlElement);
    };
    Box.prototype.moveME = function () { };
    return Box;
}());
