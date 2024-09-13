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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    playCube.prototype.moveUP = function () {
        this.pos.spawnPos.y -= 10;
        this.pos.edgePos.y -= 10;
        if (physics(this)) { //checks the if there is going to be a collision if yes it reverts the movement
            this.updateTransform();
        }
        else {
            //reverts the movement if there is going to be a collision;
            this.pos.spawnPos.y += 10;
            this.pos.edgePos.y += 10;
        }
    };
    playCube.prototype.moveDown = function () {
        this.pos.spawnPos.y += 10;
        this.pos.edgePos.y += 10;
        if (physics(this)) {
            this.updateTransform(); // this is called to update the position of the elegant in the html
        }
        else {
            this.pos.spawnPos.y -= 10;
            this.pos.edgePos.y -= 10;
        }
    };
    playCube.prototype.moveLeft = function () {
        this.pos.spawnPos.x -= 10;
        this.pos.edgePos.x -= 10;
        if (physics(this)) {
            this.updateTransform();
        }
        else {
            this.pos.spawnPos.x += 10;
            this.pos.edgePos.x += 10;
        }
    };
    playCube.prototype.moveRight = function () {
        this.pos.spawnPos.x += 10;
        this.pos.edgePos.x += 10;
        if (physics(this)) {
            this.updateTransform();
        }
        else {
            this.pos.spawnPos.x -= 10;
            this.pos.edgePos.x -= 10;
        }
    };
    playCube.prototype.updateTransform = function () {
        this.domElement.style.transform = "translate(" + this.pos.spawnPos.x + "px, " + this.pos.spawnPos.y + "px ) ";
    };
    return playCube;
}(box));
var player = new playCube({ x: 284, y: 22 }, 150, 200); //adds the player and its position X and Y are position the rest is width and height
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
    var newBox = new box({ x: 44, y: 22 }, 150, 200);
    var newBox2 = new box({ x: 204, y: 302 }, 150, 200);
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
}
function main() {
    newBox();
    physics(player);
}
function physics(player) {
    player.colliding = false;
    try {
        boxes.forEach(function (box) {
            if (!box.pos.edgePos || !player.pos.edgePos)
                throw new Error("no Position!");
            // console.log("player ",player.pos.spawnPos,player.pos.edgePos)
            //console.log("Enemy ",box.pos.spawnPos,box.pos.edgePos,)
            var overlapX = //a check for overlap on X axis
             player.pos.spawnPos.x < box.pos.edgePos.x &&
                player.pos.edgePos.x > box.pos.spawnPos.x;
            var overlapY = //a check for overlap on Y axis
             player.pos.spawnPos.y < box.pos.edgePos.y &&
                player.pos.edgePos.y > box.pos.spawnPos.y;
            if (overlapX && overlapY) {
                console.log("Collision detected!");
                player.colliding = true; //:O
            }
        });
    }
    catch (error) {
        console.log(error);
    }
    return !player.colliding;
}
//setInterval(() => physics(player), 50);
