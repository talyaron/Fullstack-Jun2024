var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var box = /** @class */ (function () {
    function box(spawnPos, width, height) {
        // only "spawn position" needs to be set the other point is calculated
        this.height = height;
        this.width = width;
        this.id = "id:-" + crypto.randomUUID;
        this.position = {
            spawnPos: spawnPos,
            edgePos: { x: spawnPos.x + width, y: spawnPos.y + height }
        };
    }
    Object.defineProperty(box.prototype, "pos", {
        get: function () {
            return this.position;
        },
        set: function (position) {
            this.position = position;
        },
        enumerable: false,
        configurable: true
    });
    box.prototype.spawn = function (box) {
        //setting the box element in the html page
        this.domElement = document.createElement("div");
        this.domElement.style.width = box.width + "px";
        this.domElement.style.height = box.height + "px";
        this.domElement.style.backgroundColor = "blue";
        this.domElement.style.position = "absolute";
        this.domElement.style.transform = "translate(" + box.pos.spawnPos.x + "px, " + box.pos.spawnPos.y + "px)";
        // this.domElement.style.transition = "transform 1s ease";
        console.log(box.pos);
        containerElement.appendChild(this.domElement);
    };
    return box;
}());
var playCube = /** @class */ (function (_super) {
    __extends(playCube, _super);
    function playCube() {
        //the player box with additional functions for movement;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = _this.width / 2;
        return _this;
    }
    playCube.prototype.moveUP = function () {
        this.pos.spawnPos.y -= 2;
        this.pos.edgePos.y -= 2;
        if (physics(this)) {
            //checks the if there is going to be a collision if yes it reverts the movement
            this.updateTransform();
            this.pos.edgePos = { x: this.pos.spawnPos.x + this.width, y: this.pos.spawnPos.y + this.height };
        }
        else {
            //reverts the movement if there is going to be a collision;
            this.pos.spawnPos.y += 2;
            this.pos.edgePos.y += 2;
        }
    };
    playCube.prototype.moveDown = function () {
        this.pos.spawnPos.y += 2;
        this.pos.edgePos.y += 2;
        if (physics(this)) {
            this.updateTransform(); // this is called to update the position of the elegant in the html
            this.pos.edgePos = { x: this.pos.spawnPos.x + this.width, y: this.pos.spawnPos.y + this.height };
        }
        else {
            this.pos.spawnPos.y -= 2;
            this.pos.edgePos.y -= 2;
        }
    };
    playCube.prototype.moveLeft = function () {
        this.pos.spawnPos.x -= 2;
        this.pos.edgePos.x -= 2;
        if (physics(this)) {
            this.updateTransform();
            this.pos.edgePos = { x: this.pos.spawnPos.x + this.width, y: this.pos.spawnPos.y + this.height };
        }
        else {
            this.pos.spawnPos.x += 2;
            this.pos.edgePos.x += 2;
        }
    };
    playCube.prototype.moveRight = function () {
        this.pos.spawnPos.x += 2;
        this.pos.edgePos.x += 2;
        if (physics(this)) {
            this.updateTransform();
            this.pos.edgePos = { x: this.pos.spawnPos.x + this.width, y: this.pos.spawnPos.y + this.height };
        }
        else {
            this.pos.spawnPos.x -= 2;
            this.pos.edgePos.x -= 2;
        }
    };
    playCube.prototype.updateTransform = function () {
        console.log(player.pos.edgePos.x - (player.width * .5), player.pos.edgePos.y - (player.height * .5), player.radius);
        this.domElement.style.transform = "translate(" + this.pos.spawnPos.x + "px, " + this.pos.spawnPos.y + "px ) ";
    };
    return playCube;
}(box));
var player = new playCube({ x: 184, y: 122 }, 50, 50); //adds the player and its position X and Y are position the rest is width and height
var containerElement = document.getElementById("boxContainer");
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        player.moveLeft(); //calls the move left function inside the player class...
    }
    if (event.key === "ArrowRight") {
        player.moveRight();
    }
    if (event.key === "ArrowUp") {
        player.moveUP();
    }
    if (event.key === "ArrowDown") {
        player.moveDown();
    }
});
var boxes = [];
function newBox() {
    var newBox = new box({ x: 44, y: 22 }, 150, 50);
    var newBox2 = new box({ x: 204, y: 302 }, 150, 50);
    boxes.push(newBox, newBox2);
    renderplayer(player);
    renderBoxes(boxes);
}
function renderplayer(box) {
    box.spawn(box);
}
function renderBoxes(boxes) {
    boxes.forEach(function (box) {
        box.spawn(box);
    });
    this.player.domElement.id = ("player");
}
function main() {
    newBox();
    physics(player);
}
function physics(player) {
    // For collision check
    player.colliding = false;
    boxes.forEach(function (box) {
        // Check each box if it is being collided with the player
        if (!box.pos.edgePos || !player.pos.edgePos)
            throw new Error("no Position!");
        // find the closest point on the rectangle to the circle's center
        var closestX = Math.max(box.pos.spawnPos.x, Math.min(player.pos.edgePos.x - (player.width * 0.5), box.pos.spawnPos.x + box.width));
        var closestY = Math.max(box.pos.spawnPos.y, Math.min(player.pos.edgePos.y - (player.height * 0.5), box.pos.spawnPos.y + box.height));
        // Step 2: Calculate the distance from the circle's center to this closest point
        var distanceX = player.pos.edgePos.x - (player.width * 0.5) - closestX;
        var distanceY = player.pos.edgePos.y - (player.height * 0.5) - closestY;
        // check if the distance is less than the circle's radius
        var distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
        if (distanceSquared <= player.radius * player.radius) {
            player.colliding = true;
            console.log("collide");
        }
    });
    return !player.colliding;
}
/*
try {
 boxes.forEach((box) => {
   //check each boxes if it is being colided with the player
   if (!box.pos.edgePos || !player.pos.edgePos)
     throw new Error("no Position!");

   // console.log("player ",player.pos.spawnPos,player.pos.edgePos)
   //console.log("Enemy ",box.pos.spawnPos,box.pos.edgePos,)

   const overlapX = //a check for overlap on X axis
     player.pos.spawnPos.x < box.pos.edgePos.x &&
     player.pos.edgePos.x > box.pos.spawnPos.x;

   const overlapY = //a check for overlap on Y axis
     player.pos.spawnPos.y < box.pos.edgePos.y &&
     player.pos.edgePos.y > box.pos.spawnPos.y;

   if (overlapX && overlapY) {
     console.log("Collision detected!");

     player.colliding = true; //:O
   }
 });
} catch (error) {
 console.log(error);
}
return !player.colliding;*/
//setInterval(() => physics(player), 50);
