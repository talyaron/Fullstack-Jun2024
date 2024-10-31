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
var elementSize = gameCanvas.getBoundingClientRect();
var width = elementSize.width;
var height = elementSize.height;
var usersLength = 0;
var Player = /** @class */ (function () {
    function Player(playing, id, lastContacted, pos) {
        this.playing = playing;
        this.id = id;
        this.lastContacted = lastContacted;
        this.size = { x: 100, y: 80 };
        this.pos = pos;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.speed = 0;
        this.maxSpeed = 5;
        this.acceleration = 0.2;
        this.createElement();
        console.log("eldenRing");
    }
    Player.prototype.createElement = function () {
        console.log("hello?");
        this.boxHtmlElement = document.createElement("div");
        this.boxHtmlElement.classList.add("box");
        this.boxHtmlElement.style.position = "absolute";
        this.boxHtmlElement.style.transform = "translate(" + this.pos.x + "px, " + this.pos.y + "px) rotate(" + this.angle + "rad)";
        this.boxHtmlElement.style.height = this.size.y + "px";
        this.boxHtmlElement.style.width = this.size.x + "px";
        if (!gameCanvas)
            console.log("aaaaaaaaaaa");
        gameCanvas.appendChild(this.boxHtmlElement);
    };
    Player.prototype.moveME = function () { };
    Player.prototype.translatePosition = function () {
        this.boxHtmlElement.style.transform = "translate(" + this.pos.x + "px, " + this.pos.y + "px) rotate(" + this.angle + "rad)";
        updateServerPos(this.id, this.pos, this.angle);
    };
    Player.prototype.getVertices = function () {
        var cos = Math.cos(this.angle);
        var sin = Math.sin(this.angle);
        var halfWidth = this.size.x / 2;
        var halfHeight = this.size.y / 2;
        return [
            { x: this.pos.x + cos * -halfWidth - sin * -halfHeight, y: this.pos.y + sin * -halfWidth + cos * -halfHeight },
            { x: this.pos.x + cos * halfWidth - sin * -halfHeight, y: this.pos.y + sin * halfWidth + cos * -halfHeight },
            { x: this.pos.x + cos * halfWidth - sin * halfHeight, y: this.pos.y + sin * halfWidth + cos * halfHeight },
            { x: this.pos.x + cos * -halfWidth - sin * halfHeight, y: this.pos.y + sin * -halfWidth + cos * halfHeight },
        ];
    };
    // Helper: Project vertices onto an axis and return min and max projection values
    Player.prototype.projectOntoAxis = function (vertices, axis) {
        var min = Infinity;
        var max = -Infinity;
        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
            var vertex = vertices_1[_i];
            var projection = vertex.x * axis.x + vertex.y * axis.y; // Dot product
            min = Math.min(min, projection);
            max = Math.max(max, projection);
        }
        return { min: min, max: max };
    };
    // Check collision with another rectangle using SAT
    Player.prototype.checkCollision = function (other) {
        var axes = this.getAxes(other);
        for (var _i = 0, axes_1 = axes; _i < axes_1.length; _i++) {
            var axis = axes_1[_i];
            var projectionA = this.projectOntoAxis(this.getVertices(), axis);
            var projectionB = this.projectOntoAxis(other.getVertices(), axis);
            if (projectionA.max < projectionB.min || projectionB.max < projectionA.min) {
                // No overlap on this axis, so no collision
                return false;
            }
        }
        // Overlaps on all axes means there is a collision
        return true;
    };
    // Helper: Get the axes (normals to edges) for both rectangles
    Player.prototype.getAxes = function (other) {
        var verticesA = this.getVertices();
        var verticesB = other.getVertices();
        var edges = [
            { x: verticesA[1].x - verticesA[0].x, y: verticesA[1].y - verticesA[0].y },
            { x: verticesA[1].x - verticesA[3].x, y: verticesA[1].y - verticesA[3].y },
            { x: verticesB[1].x - verticesB[0].x, y: verticesB[1].y - verticesB[0].y },
            { x: verticesB[1].x - verticesB[3].x, y: verticesB[1].y - verticesB[3].y },
        ];
        return edges.map(function (edge) { return ({ x: -edge.y, y: edge.x }); }); // Get perpendicular (normal) for each edge
    };
    return Player;
}());
var playerContainer = [];
//const boxes:Box[] =[];
requestAccess();
function updateServerPos(playerId, newPosition, newAngle) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/movePlayer", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                playerId: playerId,
                                pos: newPosition,
                                angle: newAngle
                            })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Server response:", result);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error updating position:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function requestAccess() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message, newUser, newPlayer, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/getNewUser")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    message = data.message;
                    newUser = data.newUser;
                    // const message = data.message;
                    if (!message)
                        throw new Error("No message found");
                    if (!newUser)
                        return [2 /*return*/];
                    //const messageElement = document.querySelector("#message");
                    //  if(!messageElement) throw new Error('No message element found');
                    document.addEventListener("keydown", handKeydown);
                    document.addEventListener("keyup", handKeyUp);
                    console.log(message, "wwwwww", newUser.id);
                    newPlayer = new Player(true, newUser.id, 0, newUser.pos);
                    playerContainer.push(newPlayer);
                    getPositions();
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
var keys = {
    w: false,
    s: false,
    a: false,
    d: false
};
setInterval(getPositions, 16);
function handKeydown(event) {
    if (event.key in keys)
        keys[event.key] = true;
}
function handKeyUp(event) {
    if (event.key in keys)
        keys[event.key] = false;
}
function updatePos() {
    if (playerContainer.length < 1)
        return;
    // Check collision between the first two tanks (if they exist)
    var colliding = false;
    if (playerContainer.length > 1) {
        colliding = playerContainer[0].checkCollision(playerContainer[1]);
        console.log("Collision detected:", colliding);
    }
    // Forward and reverse acceleration
    if (!colliding || (colliding && keys.s)) {
        // Allow forward movement only if there is no collision
        if (keys.w && !colliding) {
            playerContainer[0].speed += playerContainer[0].acceleration;
        }
        // Always allow reverse movement (backward)
        if (keys.s) {
            playerContainer[0].speed -= playerContainer[0].acceleration;
        }
    }
    else {
        // Stop forward movement on collision
        playerContainer[0].speed = 0;
    }
    // Apply friction to gradually reduce speed over time
    playerContainer[0].speed *= 0.9;
    // Cap speed to the tank's maximum and minimum allowed speeds
    playerContainer[0].speed = Math.max(Math.min(playerContainer[0].speed, playerContainer[0].maxSpeed), -playerContainer[0].maxSpeed);
    // Turning (rotation) is always allowed
    if (!keys.s) {
        if (keys.a)
            playerContainer[0].angle -= 0.02; // turn left
        if (keys.d)
            playerContainer[0].angle += 0.02; // turn right
    }
    else {
        // Reverse rotation if moving backward
        if (keys.a)
            playerContainer[0].angle += 0.02;
        if (keys.d)
            playerContainer[0].angle -= 0.02;
    }
    // Calculate new position based on speed and angle
    var newPosX = playerContainer[0].pos.x + playerContainer[0].speed * Math.cos(playerContainer[0].angle);
    var newPosY = playerContainer[0].pos.y + playerContainer[0].speed * Math.sin(playerContainer[0].angle);
    // Boundary checks
    var tankWidth = playerContainer[0].size.x;
    var tankHeight = playerContainer[0].size.y;
    // Check for boundaries
    if (newPosX < 0) {
        playerContainer[0].pos.x = 0; // Prevent moving left
    }
    else if (newPosX + tankWidth > width) {
        playerContainer[0].pos.x = width - tankWidth; // Prevent moving right
    }
    else {
        playerContainer[0].pos.x = newPosX; // Update position if within bounds
    }
    if (newPosY < 0) {
        playerContainer[0].pos.y = 0; // Prevent moving up
    }
    else if (newPosY + tankHeight > height) {
        playerContainer[0].pos.y = height - tankHeight; // Prevent moving down
    }
    else {
        playerContainer[0].pos.y = newPosY; // Update position if within bounds
    }
    playerContainer[0].translatePosition(); // Update the HTML element position
}
function gameLoop() {
    updatePos();
    requestAnimationFrame(gameLoop);
}
gameLoop();
function getPositions() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, message, users, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/getUsers")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    message = data.message, users = data.users;
                    if (!message)
                        throw new Error("No message found");
                    if (!users)
                        return [2 /*return*/];
                    console.log(users);
                    users.forEach(function (serverPlayer) {
                        // Find if the player already exists in the local playerContainer
                        var localPlayer = playerContainer.find(function (player) { return player.id === serverPlayer.id; });
                        if (localPlayer) {
                            localPlayer.pos = serverPlayer.pos;
                            localPlayer.angle = serverPlayer.angle;
                            localPlayer.translatePosition();
                        }
                        else {
                            if (playerContainer.length < 2) {
                                var newPlayer = new Player(false, serverPlayer.id, 0, serverPlayer.pos);
                                playerContainer.push(newPlayer);
                            }
                        }
                    });
                    console.log(playerContainer);
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
