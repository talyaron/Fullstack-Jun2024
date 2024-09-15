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
var mousePosition = { x: 0, y: 0, oldX: 0, oldY: 0 };
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
        //console.log(box.pos);
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
        _this.gravity = true;
        _this.acceleration = 0;
        _this.maxAcceleration = 15;
        _this.move = 0;
        _this.speed = 0.5;
        _this.mouseCollidesWithBall = false;
        return _this;
    }
    playCube.prototype.addListener = function () {
        var _this = this;
        this.domElement.addEventListener("mouseleave", function (event) {
            _this.mouseCollidesWithBall = false;
        });
        this.domElement.addEventListener("mouseenter", function (event) {
            var centerX = _this.pos.spawnPos.x + _this.width / 2;
            _this.yaw = centerX - event.x;
            _this.mouseCollidesWithBall = true;
            //  this.move = 50;
            var distanceFromCenter = event.x - centerX;
            _this.yaw = Math.max(-1, Math.min(1, distanceFromCenter / (_this.width / 2)));
            console.log("mouse", _this.mouseCollidesWithBall);
            if (_this.yaw > 0) {
                //    console.log("from the right");
            }
            else {
                //     console.log("from the left");
            }
        });
    };
    // moveUP() {
    //   if (isColliding(this)) {
    //     if (this.speed / Math.abs(this.yaw) > this.acceleration) {
    //       this.acceleration = this.acceleration - 0.1;
    //     }
    //     this.pos.spawnPos.y +=
    //       (this.speed / Math.abs(this.yaw)) * this.acceleration;
    //     this.pos.edgePos.y +=
    //       (this.speed / Math.abs(this.yaw)) * this.acceleration;
    //     //console.log(this.acceleration);
    //     this.updateTransform();
    //     this.pos.edgePos = {
    //       x: this.pos.spawnPos.x + this.width,
    //       y: this.pos.spawnPos.y + this.height,
    //     };
    //   } else if (this.decelerate > 0.1) {
    //     this.pos.spawnPos.y -= this.acceleration;
    //     this.pos.edgePos.y -= this.acceleration;
    //     this.decelerate = this.acceleration / 0.5;
    //     this.acceleration = -this.decelerate ;
    //     this.acceleration = this.acceleration * 0.5;
    //     console.log(this.acceleration, this.decelerate)
    //   }
    // }
    playCube.prototype.moveDown = function () {
        this.pos.spawnPos.y += 2;
        this.pos.edgePos.y += 2;
        if (isColliding(this)) {
            this.updateTransform(); // this is called to update the position of the elegant in the html
            this.pos.edgePos = {
                x: this.pos.spawnPos.x + this.width,
                y: this.pos.spawnPos.y + this.height
            };
        }
        else {
            this.pos.spawnPos.y -= 2;
            this.pos.edgePos.y -= 2;
        }
    };
    playCube.prototype.moveLeft = function () {
        this.pos.spawnPos.x -= 2;
        this.pos.edgePos.x -= 2;
        if (isColliding(this)) {
            this.updateTransform();
            this.pos.edgePos = {
                x: this.pos.spawnPos.x + this.width,
                y: this.pos.spawnPos.y + this.height
            };
        }
        else {
            this.pos.spawnPos.x += 2;
            this.pos.edgePos.x += 2;
        }
    };
    playCube.prototype.moveRight = function () {
        this.pos.spawnPos.x += 2;
        this.pos.edgePos.x += 2;
        if (isColliding(this)) {
            this.updateTransform();
            this.pos.edgePos = {
                x: this.pos.spawnPos.x + this.width,
                y: this.pos.spawnPos.y + this.height
            };
        }
        else {
            this.pos.spawnPos.x -= 2;
            this.pos.edgePos.x -= 2;
        }
    };
    playCube.prototype.fall = function () {
        if (isColliding(this)) {
            if (this.maxAcceleration > this.acceleration) {
                this.acceleration = this.acceleration + 0.1;
            }
            this.pos.spawnPos.y += 0.98 * this.acceleration;
            this.pos.edgePos.y += 0.98 * this.acceleration;
            //console.log(this.acceleration);
            this.updateTransform();
            this.pos.edgePos = {
                x: this.pos.spawnPos.x + this.width,
                y: this.pos.spawnPos.y + this.height
            };
        }
        else if (this.acceleration > 0.1) {
            this.pos.spawnPos.y -= 0.98 * this.acceleration;
            this.pos.edgePos.y -= 0.98 * this.acceleration;
            this.decelerate = this.acceleration / .5;
            this.acceleration = this.acceleration - this.decelerate;
            this.acceleration = this.acceleration / 1 / 5;
            //this.acceleration = this.acceleration ;
            console.log(this.acceleration, this.decelerate);
        }
    };
    playCube.prototype.updateTransform = function () {
        this.domElement.style.transform = "translate(" + this.pos.spawnPos.x + "px, " + this.pos.spawnPos.y + "px ) ";
    };
    return playCube;
}(box));
var player = new playCube({ x: 184, y: 422 }, 50, 50); //adds the player and its position X and Y are position the rest is width and height
var containerElement = document.getElementById("boxContainer");
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        player.moveLeft(); //calls the move left function inside the player class...
    }
    if (event.key === "ArrowRight") {
        player.moveRight();
    }
    if (event.key === "ArrowUp") {
        //   player.moveUP();
    }
    if (event.key === "ArrowDown") {
        player.moveDown();
    }
});
var boxes = [];
function newBox() {
    var brick = new box({ x: 44, y: 50 }, 75, 25);
    var newBox2 = new box({ x: 204, y: 602 }, 150, 50);
    var wallLeft = new box({ x: 2, y: 2 }, 20, 650);
    var wallRight = new box({ x: 1020, y: 2 }, 20, 650);
    var wallTop = new box({ x: 0, y: 2 }, 1020, 25);
    boxes.push(brick, newBox2, wallLeft, wallRight, wallTop);
    renderplayer(player);
    player.addListener();
    renderBoxes(boxes);
}
function renderplayer(box) {
    box.spawn(box);
}
function renderBoxes(boxes) {
    boxes.forEach(function (box) {
        box.spawn(box);
    });
    this.player.domElement.id = "player";
}
function main() {
    newBox();
    isColliding(player);
}
function isColliding(player) {
    // For collision check
    player.colliding = false;
    boxes.forEach(function (box) {
        // Check each box if it is being collided with the player
        if (!box.pos.edgePos || !player.pos.edgePos)
            throw new Error("no Position!");
        // find the closest point on the rectangle to the circle's center
        var closestX = Math.max(box.pos.spawnPos.x, Math.min(player.pos.edgePos.x - player.width * 0.5, box.pos.spawnPos.x + box.width));
        var closestY = Math.max(box.pos.spawnPos.y, Math.min(player.pos.edgePos.y - player.height * 0.5, box.pos.spawnPos.y + box.height));
        // Step 2: Calculate the distance from the circle's center to this closest point
        var distanceX = player.pos.edgePos.x - player.width * 0.5 - closestX;
        var distanceY = player.pos.edgePos.y - player.height * 0.5 - closestY;
        // check if the distance is less than the circle's radius
        var distanceSquared = distanceX * distanceX + distanceY * distanceY;
        if (distanceSquared <= player.radius * player.radius) {
            player.colliding = true;
            console.log("collide", distanceY, distanceX);
        }
    });
    return player.colliding;
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
document.addEventListener("mousemove", function (event) {
    mousePosition.oldX = mousePosition.x;
    mousePosition.oldY = mousePosition.y;
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});
setInterval(function () { return physics(player); }, 8);
player.gravity = false;
function physics(player) {
    var lastMouseX = mousePosition.oldX;
    var lastMouseY = mousePosition.oldY;
    var mouseCurrentX = mousePosition.x;
    var mouseCurrentY = mousePosition.y;
    var mouseDirX = lastMouseX - mouseCurrentX;
    var mouseDirY = lastMouseY - mouseCurrentY;
    var slowMan = 1;
    // If mouse moves upwards and collides with ball
    if (player.mouseCollidesWithBall) {
        // Calculate the magnitude of the direction vector
        var magnitude = Math.sqrt(mouseDirX * mouseDirX + mouseDirY * mouseDirY);
        // const maxMagnitude = 5;
        if (magnitude > 0) {
            // Normalize the direction
            player.ballDirectionX = -mouseDirX / magnitude;
            player.ballDirectionY = -mouseDirY / magnitude;
            // Set ball velocity based on mouse movement direction and magnitude
            player.ballVelocityX = mouseDirX * slowMan;
            player.ballVelocityY = mouseDirY * slowMan;
        }
    }
    // Handle NaN directions (reset to 0 if needed)
    if (isNaN(player.ballDirectionX)) {
        player.ballDirectionX = 0;
    }
    if (isNaN(player.ballDirectionY)) {
        player.ballDirectionY = 0;
    }
    var posChange = false;
    var xPos = player.pos.spawnPos.x;
    var yPos = player.pos.spawnPos.y;
    ;
    // Move the ball if there's a direction and velocity
    if (player.ballVelocityX || player.ballVelocityY) {
        player.pos.spawnPos.x += player.ballDirectionX * player.ballVelocityX;
        player.pos.spawnPos.y += player.ballDirectionY * player.ballVelocityY;
        posChange = true;
        // Update edge positions based on new ball position
        player.pos.edgePos.y = player.pos.spawnPos.y + player.height;
        player.pos.edgePos.x = player.pos.spawnPos.x + player.width;
        // console.log(
        //   player.ballDirectionY,
        //   player.ballDirectionX,
        //   player.ballVelocityX,
        //   player.ballVelocityY
        // );
    }
    // Handle collision (reverse direction when a collision happens)
    if (isColliding(player)) {
        // Reverse the ball's direction on collision
        player.ballDirectionX *= -1;
        player.ballDirectionY *= -1;
        posChange = false;
        player.pos.spawnPos.x = xPos;
        player.pos.spawnPos.y = yPos;
        // Adjust position slightly to prevent getting stuck inside the wall
        // player.pos.spawnPos.x += player.ballDirectionX * 1; // Small step back
        // player.pos.spawnPos.y += player.ballDirectionY * 1; // Small step back
    }
    // Apply gravity if enabled
    if (player.gravity) {
        player.fall();
        posChange = true;
    }
    if (posChange) {
        player.updateTransform();
    }
    // Update the old mouse position for the next frame
    mousePosition.oldX = mouseCurrentX;
    mousePosition.oldY = mouseCurrentY;
}
