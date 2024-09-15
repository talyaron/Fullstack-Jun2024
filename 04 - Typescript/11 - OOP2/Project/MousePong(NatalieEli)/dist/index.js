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
var myScreen = {
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
};
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
        containerElement.appendChild(this.domElement);
        /// this.pos.spawnPos=box.pos.spawnPos;
        // this.pos.edgePos={ x: box.pos.spawnPos.x + box.width, y: box.pos.spawnPos.y + box.height }
    };
    box.prototype.die = function (box) {
        //setting the box element in the html page
        this.domElement.remove;
    };
    return box;
}());
var playCube = /** @class */ (function (_super) {
    __extends(playCube, _super);
    function playCube() {
        //the pinBall box with additional functions for movement;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = _this.width / 2;
        _this.gravity = true;
        _this.acceleration = 0;
        _this.maxAcceleration = 15;
        _this.mouseCollidesWithBall = false;
        _this.exist = false;
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
        });
    };
    playCube.prototype.fall = function () {
        if (!isColliding(this)) {
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
            this.decelerate = this.acceleration / 0.5;
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
var pinBall = new playCube({ x: 184, y: 422 }, 50, 50); //adds the pinBall and its position X and Y are position the rest is width and height
var containerElement = document.getElementById("boxContainer");
var boxes = [];
function newBox() {
    var brick = new box({ x: 44, y: 50 }, 75, 25);
    var newBox2 = new box({ x: 204, y: 602 }, 150, 50);
    var wallLeft = new box({ x: 2, y: 0 }, 0, myScreen.viewportHeight);
    var wallRight = new box({ x: myScreen.viewportWidth, y: 0 }, 0, myScreen.viewportHeight);
    var wallTop = new box({ x: 0, y: 2 }, myScreen.viewportWidth, 0);
    boxes.push(brick, newBox2, wallLeft, wallRight, wallTop);
    if (!pinBall.exist) {
        renderPinBall(pinBall);
        pinBall.exist = true;
        pinBall.addListener();
    }
    renderBoxes(boxes);
}
function renderPinBall(box) {
    box.spawn(box);
}
function removeBoxes(boxes) {
    boxes.forEach(function (box) {
        box.die(box);
        var boxIndex = boxes.indexOf(box);
        if (boxIndex !== -1) {
            // Remove the box from the array
            boxes.splice(boxIndex, 1);
        }
    });
}
function renderBoxes(boxes) {
    boxes.forEach(function (box) {
        box.spawn(box);
    });
    this.pinBall.domElement.id = "pinBall";
}
function main() {
    newBox();
    isColliding(pinBall);
}
function isColliding(pinBall) {
    pinBall.colliding = false;
    var collisionNormal = null;
    boxes.forEach(function (box) {
        var closestX = Math.max(box.pos.spawnPos.x, Math.min(pinBall.pos.spawnPos.x + pinBall.radius, box.pos.spawnPos.x + box.width));
        var closestY = Math.max(box.pos.spawnPos.y, Math.min(pinBall.pos.spawnPos.y + pinBall.radius, box.pos.spawnPos.y + box.height));
        var distanceX = pinBall.pos.spawnPos.x + pinBall.radius - closestX;
        var distanceY = pinBall.pos.spawnPos.y + pinBall.radius - closestY;
        var distanceSquared = distanceX * distanceX + distanceY * distanceY;
        if (distanceSquared <= pinBall.radius * pinBall.radius) {
            pinBall.colliding = true;
            // Calculate the normal vector
            var normalX = distanceX;
            var normalY = distanceY;
            var length = Math.sqrt(normalX * normalX + normalY * normalY);
            // Normalize the normal vector
            collisionNormal = {
                x: normalX / length,
                y: normalY / length
            };
            console.log("Colliding with normal:", collisionNormal);
        }
    });
    return { colliding: pinBall.colliding, normal: collisionNormal };
}
document.addEventListener("mousemove", function (event) {
    mousePosition.oldX = mousePosition.x;
    mousePosition.oldY = mousePosition.y;
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});
setInterval(function () { return physics(pinBall); }, 8);
pinBall.gravity = false;
function physics(pinBall) {
    var lastMouseX = mousePosition.oldX;
    var lastMouseY = mousePosition.oldY;
    var mouseCurrentX = mousePosition.x;
    var mouseCurrentY = mousePosition.y;
    var mouseDirX = mouseCurrentX - lastMouseX;
    var mouseDirY = mouseCurrentY - lastMouseY;
    var slowMan = 1;
    // If mouse moves upwards and collides with ball
    if (pinBall.mouseCollidesWithBall) {
        // Calculate the magnitude of the direction vector
        var magnitude = Math.sqrt(mouseDirX * mouseDirX + mouseDirY * mouseDirY);
        var minMagnitude = 5;
        if (magnitude >= 0 && mouseCurrentY > 400) {
            // Normalize the direction
            if (pinBall.yaw > 0)
                pinBall.ballDirectionX = -mouseDirX / magnitude;
            else
                pinBall.ballDirectionX = mouseDirX / magnitude;
            pinBall.ballDirectionY = -mouseDirY / magnitude;
            // Set ball velocity based on mouse movement direction and magnitude
            pinBall.ballVelocityX = mouseDirX * slowMan;
            pinBall.ballVelocityY = mouseDirY * slowMan;
        }
    }
    // Handle NaN directions (reset to 0 if needed)
    if (isNaN(pinBall.ballDirectionX)) {
        pinBall.ballDirectionX = 0;
    }
    if (isNaN(pinBall.ballDirectionY)) {
        pinBall.ballDirectionY = 0;
    }
    var posChange = false;
    var xPos = pinBall.pos.spawnPos.x;
    var yPos = pinBall.pos.spawnPos.y;
    // Move the ball if there's a direction and velocity
    if (pinBall.ballVelocityX || pinBall.ballVelocityY) {
        pinBall.pos.spawnPos.x += pinBall.ballDirectionX * pinBall.ballVelocityX;
        pinBall.pos.spawnPos.y += pinBall.ballDirectionY * pinBall.ballVelocityY;
        posChange = true;
        // Update edge positions based on new ball position
        pinBall.pos.edgePos.y = pinBall.pos.spawnPos.y + pinBall.height;
        pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x + pinBall.width;
        // console.log(
        //   pinBall.ballDirectionY,
        //   pinBall.ballDirectionX,
        //   pinBall.ballVelocityX,
        //   pinBall.ballVelocityY
        // );
    }
    // Apply gravity if enabled
    if (pinBall.gravity) {
        pinBall.fall();
        posChange = true;
    }
    var collision = isColliding(pinBall);
    if (collision.colliding && collision.normal) {
        // Reflect the ball's direction using the collision normal
        var normal = collision.normal;
        var dotProduct = pinBall.ballDirectionX * normal.x + pinBall.ballDirectionY * normal.y;
        pinBall.ballDirectionX -= 2 * dotProduct * normal.x;
        pinBall.ballDirectionY -= 2 * dotProduct * normal.y;
        pinBall.ballVelocityX *= 1;
        pinBall.ballVelocityY *= 1;
        console.log("Bouncing with new direction:", pinBall.ballDirectionX, pinBall.ballDirectionY);
    }
    if (pinBall.gravity) {
        pinBall.fall();
        posChange = true;
    }
    if (posChange) {
        pinBall.updateTransform();
    }
    mousePosition.oldX = mouseCurrentX;
    mousePosition.oldY = mouseCurrentY;
    var windowSize = window.innerWidth;
    if (windowSize != myScreen.viewportWidth) {
        myScreen.viewportHeight = window.innerHeight;
        myScreen.viewportWidth = window.innerWidth;
        removeBoxes(boxes);
        renderBoxes(boxes);
        newBox();
    }
}
