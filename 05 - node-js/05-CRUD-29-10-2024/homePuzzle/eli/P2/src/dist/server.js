"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].json()); // To parse JSON bodies
console.log("Hi from typescript");
var User = /** @class */ (function () {
    function User(pos) {
        this.id = "id=" + crypto.randomUUID();
        this.pos = pos;
    }
    return User;
}());
setInterval(updateServer, 300);
function updateServer() {
    // if(users[0])
    //  users[0].pos.y +=15;
}
app.use(express_1["default"].static("public")); //middleware
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
            var newUser = new User({ x: x, y: 100 });
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
        var _a = req.body, playerId_1 = _a.playerId, pos = _a.pos;
        // Find the player by their id in the users array
        var user = users.find(function (user) { return user.id === playerId_1; });
        if (user) {
            // Update the player's position
            user.pos = pos;
            // console.log(`Player ${playerId} moved to new position:`, pos);
            //console.log(users); // Log the updated users array for debugging
            res.send({ message: "Player position updated", playerId: playerId_1, pos: pos });
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
