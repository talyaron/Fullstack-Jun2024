"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); // To parse JSON bodies
app.use(express_1["default"].static("public")); //middleware
console.log("Hi from typescript");
var Bullet = /** @class */ (function () {
    // Additional properties like max speed and other attributes can be added here
    function Bullet(id, pos, angle) {
        this.id = id;
        this.pos = pos;
        this.angle = angle;
        this.speed = 10; // Set a default speed for the bullet
        this.velocity = {
            x: Math.cos(this.angle) * this.speed,
            y: Math.sin(this.angle) * this.speed
        };
    }
    Bullet.prototype.updatePosition = function (deltaTime) {
        // Update position based on angle and speed
        this.pos.x += this.velocity.x * (deltaTime / 16.7); // divide by 1000 for milliseconds to seconds
        this.pos.y += this.velocity.y * (deltaTime / 16.7);
    };
    return Bullet;
}());
var bullets = [];
app.post("/api/createBullet", function (req, res) {
    var _a = req.body, pos = _a.pos, angle = _a.angle;
    var newBullet = new Bullet("bullet=" + crypto.randomUUID(), pos, angle);
    bullets.push(newBullet);
    res.send({ message: "Bullet created", bullet: newBullet });
});
app.get("/api/getBullets", function (req, res) {
    res.send({ bullets: bullets });
});
var User = /** @class */ (function () {
    function User(pos, angle) {
        this.id = "id=" + crypto.randomUUID();
        this.pos = pos;
        this.angle = angle;
        this.dead = false;
    }
    return User;
}());
var lastUpdate = Date.now();
setInterval(function () {
    var now = Date.now();
    var deltaTime = now - lastUpdate;
    lastUpdate = now;
    bullets.forEach(function (bullet) { return bullet.updatePosition(deltaTime); });
    // Emit the updated bullet positions to clients (optional: with socket.io)
    // io.emit("updateBullets", bullets);
}, 16);
app.post('/api/deleteBullet', function (req, res) {
    try {
        var index_1 = req.body.index;
        console.log(index_1);
        var bulletID = bullets.findIndex(function (bull) { return bull.id === index_1; });
        if (index_1 != -1) {
            // Update the player's position
            bullets.splice(bulletID, 1);
            res.send({ message: "bullet Deleted" });
        }
        else {
            // If no player is found with that id
            res.status(404).send({ message: "bullet not found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error processing move" });
    }
});
//get = a method of http
//route '/'
//req = request
//res = response
//event handler of get method
var users = [];
var x = 100;
//route
app.get("/api/getNewUser", function (req, res) {
    try {
        // setTimeout(() => {
        // }, 3000);
        if (users.length < 2) {
            var newUser = new User({ x: x, y: 100 }, 0);
            x = 1600;
            users.push(newUser);
            res.send({ message: "created new user", newUser: newUser });
        }
        else
            res.send({ message: "only 2 players !" });
    }
    catch (error) {
        console.error(error);
    }
});
app.post("/api/movePlayer", function (req, res) {
    try {
        var _a = req.body, playerId_1 = _a.playerId, pos = _a.pos, angle = _a.angle;
        var user = users.find(function (user) { return user.id === playerId_1; });
        if (user) {
            // Update the player's position
            user.pos = pos;
            user.angle = angle;
            // console.log(`Player ${playerId} moved to new position:`, pos);
            //console.log(users); // Log the updated users array for debugging
            var dead = user.dead;
            if (!dead) {
                res.send({ message: "Player position updated", playerId: playerId_1, pos: pos, angle: angle });
            }
            else {
                res.send({ message: "user is dead!", playerId: playerId_1, pos: pos, angle: angle, dead: dead });
            }
        }
        else {
            // If no player is found with that id
            res.status(404).send({ message: "Player not found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error processing move" });
    }
});
app.post("/api/killUser", function (req, res) {
    try {
        var id_1 = req.body.id;
        var userFound = users.find(function (user) { return id_1 === user.id; });
        if (!userFound) {
            res.send({ error: "user not found", message: "user not found :O" });
            return;
        }
        userFound.dead = true;
        res.send({ message: "user died" + userFound.id });
    }
    catch (error) {
        console.error(error);
    }
});
app.get("/api/getUsers", function (req, res) {
    try {
        res.send({ message: "here are the users", users: users });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
