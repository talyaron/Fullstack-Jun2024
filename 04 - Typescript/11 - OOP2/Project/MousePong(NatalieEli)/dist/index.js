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
var Box = /** @class */ (function () {
    function Box(spawnPos, width, height) {
        // only "spawn position" needs to be set the other point is calculated
        this.height = height;
        this.width = width;
        this.id = "id:-" + crypto.randomUUID;
        this.position = {
            spawnPos: spawnPos,
            edgePos: { x: spawnPos.x + width, y: spawnPos.y + height }
        };
    }
    Object.defineProperty(Box.prototype, "pos", {
        get: function () {
            return this.position;
        },
        set: function (position) {
            this.position = position;
        },
        enumerable: false,
        configurable: true
    });
    Box.prototype.spawn = function (box) {
        //setting the box element in the html page
        this.domElement = document.createElement("div");
        this.domElement.style.width = box.width + "px";
        this.domElement.style.height = box.height + "px";
        this.domElement.style.backgroundColor = "wheat";
        this.domElement.style.backgroundSize = "cover";
        this.domElement.style.backgroundImage = "url(\"./dist/images/Brick.png\")";
        this.domElement.style.position = "absolute";
        this.domElement.style.transform = "translate(" + box.pos.spawnPos.x + "px, " + box.pos.spawnPos.y + "px)";
        containerElement.appendChild(this.domElement);
    };
    Box.prototype.die = function (box) {
        //setting the box element in the html page
        this.domElement.remove();
    };
    Box.prototype.resize = function (newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
        this.domElement.style.width = this.width + "px";
        this.domElement.style.height = this.height + "px";
        this.pos.edgePos = {
            x: this.pos.spawnPos.x + this.width,
            y: this.pos.spawnPos.y + this.height
        };
    };
    return Box;
}());
var Brick = /** @class */ (function (_super) {
    __extends(Brick, _super);
    function Brick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.broken = false;
        return _this;
        // Add method to resize the brick
    }
    Brick.prototype.paint = function () {
        this.domElement.style.backgroundColor = "" + getColor();
    };
    return Brick;
}(Box));
var playCube = /** @class */ (function (_super) {
    __extends(playCube, _super);
    function playCube() {
        //the pinBall box with additional functions for movement;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = _this.width / 2; //holds the radius of the pinball
        _this.gravity = true; //to enable or disable gravity
        _this.score = 0;
        _this.lives = 3;
        _this.posChange = false;
        _this.mouseCollidesWithBall = false;
        //if the ball was already created of not
        _this.exist = false;
        return _this;
    }
    playCube.prototype.addListener = function () {
        var _this = this;
        this.domElement.addEventListener("mouseleave", function (event) {
            _this.mouseCollidesWithBall = false;
        });
        this.domElement.addEventListener("mouseenter", function (event) {
            // holds the center of the ball on the x axis
            var centerX = _this.pos.spawnPos.x + _this.width / 2;
            //mouse is colliding with the ball so set it as happy
            _this.mouseCollidesWithBall = true;
            //calculates the distance from the center
            var distanceFromCenter = event.x - centerX;
            // calculates the position the mouse entered from positive is right and negative is left
            _this.mouseEntryDirection = Math.max(-1, Math.min(1, distanceFromCenter / (_this.width / 2)));
            console.log("mouse", _this.mouseCollidesWithBall);
        });
    };
    //updates the position of the html element to the current position of the ball
    playCube.prototype.updateTransform = function () {
        this.domElement.style.transform = "translate(" + this.pos.spawnPos.x + "px, " + this.pos.spawnPos.y + "px ) ";
    };
    playCube.prototype.paint = function () {
        this.domElement.style.backgroundImage = "url(\"./dist/images/ball.png\")";
        getColor();
    };
    return playCube;
}(Box));
//holds the container for the ball and boxes
var containerElement = document.getElementById("boxContainer");
//holds the sizes of the element
var containerRect = containerElement.getClientRects();
// width converted to number
var initialPlace = parseFloat(window.getComputedStyle(containerElement).width);
//holds the pinBall and its positions - x - and that is - y - width height
var pinBall = new playCube({ x: initialPlace * 0.5, y: 440 }, 50, 50);
//some variables for the bricks
var boxes = [];
var bricks = [];
var walls = [];
var numberOfBrickRows = 15;
//const numberOfBricks :Brick;
var runOnce = false;
//colors for bricks
var yellow = "#FFFAFA";
var blue = "#E0F7FA";
var red = "#B2EBF2";
//creates the boxes and calling the render function later
function newBox() {
    removeBoxes(boxes);
    var containerStyle = window.getComputedStyle(containerElement);
    var containerWidth = parseFloat(containerStyle.width);
    var containerHeight = parseFloat(containerStyle.height);
    //walls
    //left wall
    var wallLeft = new Box({ x: 2, y: 0 }, 0, myScreen.viewportHeight);
    //right wall
    var wallRight = new Box({ x: containerWidth, y: 0 }, 0, myScreen.viewportHeight);
    //celling wall
    var wallTop = new Box({ x: 0, y: 2 }, containerWidth, 0);
    boxes.push(wallLeft, wallRight, wallTop);
    // Adjust the size of boxes based on container width
    var brickWidth = containerWidth / 20; // calculate the size relative to container width
    var brickHeight = containerHeight / 30; // adjust this ratio as needed
    var offsetX = 44;
    var totalSpacing = containerWidth - numberOfBrickRows * brickWidth - 2 * offsetX;
    var spaceX = totalSpacing / (numberOfBrickRows - 1);
    if (!runOnce) {
        for (var i = 0; i < numberOfBrickRows; i++) {
            var brickRow1 = new Brick({ x: offsetX, y: 50 }, brickWidth, brickHeight);
            var brickRow2 = new Brick({ x: offsetX, y: 50 + brickHeight + 5 }, brickWidth, brickHeight);
            var brickRow3 = new Brick({ x: offsetX, y: 50 + (brickHeight + 5) * 2 }, brickWidth, brickHeight);
            var brickRow4 = new Brick({ x: offsetX, y: 50 + (brickHeight + 5) * 3 }, brickWidth, brickHeight);
            var brickRow5 = new Brick({ x: offsetX, y: 50 + (brickHeight + 5) * 4 }, brickWidth, brickHeight);
            boxes.push(brickRow1, brickRow2, brickRow3, brickRow4, brickRow5);
            bricks.push(brickRow1, brickRow2, brickRow3, brickRow4, brickRow5);
            offsetX = offsetX + brickWidth + spaceX;
        }
        runOnce = true;
    }
    //boxes under
    var newBox1 = new Box({ x: 204, y: containerHeight - 50 }, 150, 50);
    var newBox2 = new Box({ x: 504, y: containerHeight - 50 }, 150, 50);
    var newBox3 = new Box({ x: 804, y: containerHeight - 50 }, 150, 50);
    var newBox4 = new Box({ x: 1104, y: containerHeight - 50 }, 150, 50);
    var newBox5 = new Box({ x: 1404, y: containerHeight - 50 }, 150, 50);
    var newBox6 = new Box({ x: 1704, y: containerHeight - 50 }, 150, 50);
    var newBox7 = new Box({ x: 2004, y: containerHeight - 50 }, 150, 50);
    boxes.push(newBox1, newBox2, newBox3, newBox4, newBox5, newBox6, newBox7);
    //initializes the pinball
    if (!pinBall.exist) {
        renderPinBall(pinBall);
        pinBall.exist = true;
        pinBall.addListener();
    }
    renderBoxes(boxes);
}
//render the pinball
function renderPinBall(box) {
    box.spawn(box);
}
function updateWalls() {
    var containerStyle = window.getComputedStyle(containerElement);
    var containerWidth = parseFloat(containerStyle.width);
    var containerHeight = parseFloat(containerStyle.height);
    // Update left wall
    //boxes[0].pos.edgePos.y = 0;
    boxes[0].height = containerHeight;
    console.log(boxes[0].height);
    boxes[0].die(boxes[0]);
    boxes[0].spawn(boxes[0]);
    // Update right wall
    boxes[1].pos.spawnPos.x = containerWidth;
    //boxes[1].pos.spawnPos.y = 0;
    boxes[1].height = containerHeight;
    boxes[1].die(boxes[1]);
    boxes[1].spawn(boxes[1]);
    // Update ceiling wall
    boxes[2].pos.edgePos.y = 2;
    boxes[2].width = containerWidth;
    boxes[2].die(boxes[2]);
    boxes[2].spawn(boxes[2]);
}
//removes the boxes
function removeBoxes(boxes) {
    boxes.forEach(function (box) {
        box.die(box);
        var boxIndex = boxes.indexOf(box);
        if (boxIndex !== -1) {
            // removes the box from the array
            boxes.splice(boxIndex, 1);
        }
    });
    //empties the boxes array
    boxes.length = 0;
}
//does what it says
function renderBoxes(boxes) {
    boxes.forEach(function (box) {
        box.spawn(box);
    });
    //gives the player pinball id;
    this.pinBall.domElement.id = "pinBall";
    boxes.forEach(function (box) {
        if (box instanceof Brick) {
            box.paint();
        }
    });
}
//being called from the html element
function main() {
    //call for for the boxes to be created
    newBox();
    giveHp();
    pinBall.paint();
    //isColliding(pinBall);
}
var lifeContainer = [];
function giveHp() {
    var lifeElements = document.createElement("div");
    lifeElements.id = "lives";
    containerElement.appendChild(lifeElements);
    for (var index = 1; index < pinBall.lives; index++) {
        var lifeElement = document.createElement("div");
        lifeElement.classList.add("live");
        lifeElement.style.backgroundImage = "url(\"./dist/images/ball.png\")";
        lifeElements.appendChild(lifeElement);
        lifeContainer.push(lifeElement);
    }
}
function loseHp() {
    if (lifeContainer.length > 0) {
        var lifeElementToRemove = lifeContainer.pop();
        if (lifeElementToRemove) {
            lifeElementToRemove.remove();
        }
    }
}
function isColliding(pinBall) {
    pinBall.colliding = false;
    var collisionNormal = null;
    boxes.forEach(function (box, index) {
        //finds the closes x point to the ball on the collider
        var closestX = Math.max(box.pos.spawnPos.x, Math.min(pinBall.pos.spawnPos.x + pinBall.radius, box.pos.spawnPos.x + box.width));
        //finds the closes y point to the ball on the collider
        var closestY = Math.max(box.pos.spawnPos.y, Math.min(pinBall.pos.spawnPos.y + pinBall.radius, box.pos.spawnPos.y + box.height));
        var distanceX = pinBall.pos.spawnPos.x + pinBall.radius - closestX;
        var distanceY = pinBall.pos.spawnPos.y + pinBall.radius - closestY;
        // calculate the squared distance between the ball's center and the closest point
        var distanceSquared = distanceX * distanceX + distanceY * distanceY;
        //check if collided
        if (distanceSquared <= pinBall.radius * pinBall.radius) {
            pinBall.colliding = true;
            // calculates the normal vector
            var normalX = distanceX;
            var normalY = distanceY;
            var length = Math.sqrt(normalX * normalX + normalY * normalY);
            // normalizes the normal 🥴(vector)
            if (length !== 0) {
                collisionNormal = {
                    x: normalX / length,
                    y: normalY / length
                };
            }
            else {
                collisionNormal = { x: 0, y: 0 };
            }
            console.log("Colliding with normal:", collisionNormal);
            if (box instanceof Brick) {
                box.die(box);
                pinBall.score++;
                console.log(pinBall.score);
                boxes.splice(index, 1);
            }
        }
    });
    //returns  that the player is colliding and the normals of the object it collided with
    return { colliding: pinBall.colliding, normal: collisionNormal };
}
document.addEventListener("mousemove", function (event) {
    //updates old and new positions when the mouse moves
    mousePosition.oldX = mousePosition.x;
    mousePosition.oldY = mousePosition.y;
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});
setInterval(function () { return physics(pinBall); }, 8);
pinBall.gravity = false;
function windowResized() {
    //checks if pinball is outside the play area and brings it back inside if it is
    var containerStyle = window.getComputedStyle(containerElement);
    var containerWidth = parseFloat(containerStyle.width);
    var containerHeight = parseFloat(containerStyle.height);
    // Recalculate brick size
    var brickWidth = containerWidth / 20;
    var brickHeight = containerHeight / 30;
    var offsetX = 44;
    var totalSpacing = containerWidth - numberOfBrickRows * brickWidth - 2 * offsetX;
    var spaceX = totalSpacing / (numberOfBrickRows - 1);
    // Resize and reposition bricks
    bricks.forEach(function (brick, index) {
        var row = Math.floor(index / numberOfBrickRows);
        var col = index % numberOfBrickRows;
        brick.resize(brickWidth, brickHeight);
        brick.pos.spawnPos = {
            x: offsetX + col * (brickWidth + spaceX),
            y: 50 + row * (brickHeight + 5)
        };
        brick.pos.edgePos = {
            x: brick.pos.spawnPos.x + brickWidth,
            y: brick.pos.spawnPos.y + brickHeight
        };
        brick.domElement.style.transform = "translate(" + brick.pos.spawnPos.x + "px, " + brick.pos.spawnPos.y + "px)";
    });
    if (pinBall.pos.edgePos.x > containerWidth) {
        //console.log("outside");
        pinBall.pos.spawnPos.x = containerWidth - pinBall.width;
        pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x - pinBall.width;
        pinBall.updateTransform();
    }
    if (pinBall.pos.spawnPos.x < 0) {
        // console.log("outside");
        pinBall.pos.spawnPos.x = 0;
        pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x + pinBall.width;
        pinBall.updateTransform();
    }
    if (pinBall.pos.spawnPos.y < 0) {
        pinBall.pos.spawnPos.y = 0;
        pinBall.pos.edgePos.y = pinBall.pos.spawnPos.y + pinBall.height;
        pinBall.updateTransform();
    }
    var windowSizeW = window.innerWidth;
    var windowSizeH = window.innerHeight;
    //check if the view window is resized and if it is rerender the boxes accordingly
    if (windowSizeW != myScreen.viewportWidth ||
        windowSizeH != myScreen.viewportHeight) {
        myScreen.viewportWidth = window.innerWidth;
        myScreen.viewportHeight = window.innerHeight;
        updateWalls();
    }
}
function physics(pinBall) {
    //holds the previous mouse position
    var lastMouseX = mousePosition.oldX;
    var lastMouseY = mousePosition.oldY;
    //holds the new mouse position
    var mouseCurrentX = mousePosition.x;
    var mouseCurrentY = mousePosition.y;
    //calculates the direction of mouse
    var mouseDirX = mouseCurrentX - lastMouseX;
    var mouseDirY = mouseCurrentY - lastMouseY;
    //multiplier of speed 1 is good for now
    var slowMan = 1.2;
    // If mouse moves upwards and collides with ball
    if (pinBall.mouseCollidesWithBall) {
        // Calculate the magnitude of the direction vector
        var magnitude = Math.sqrt(mouseDirX * mouseDirX + mouseDirY * mouseDirY);
        if (magnitude >= 0 && mouseCurrentY > 400 && pinBall.lives > 0) {
            // check where the mouse came from and apply it to direction of the ball
            if (pinBall.mouseEntryDirection > 0) {
                pinBall.ballDirectionX = -mouseDirX / magnitude;
            }
            else {
                pinBall.ballDirectionX = mouseDirX / magnitude;
            }
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
    //let posChange = false;
    // move the ball if there's a direction and velocity
    if (pinBall.ballVelocityX || pinBall.ballVelocityY) {
        pinBall.pos.spawnPos.x += pinBall.ballDirectionX * pinBall.ballVelocityX;
        pinBall.pos.spawnPos.y += pinBall.ballDirectionY * pinBall.ballVelocityY;
        pinBall.posChange = true;
        // Update edge positions based on new ball position
        pinBall.pos.edgePos.y = pinBall.pos.spawnPos.y + pinBall.height;
        pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x + pinBall.width;
    }
    // Apply gravity if enabled
    if (pinBall.gravity) {
        // pinBall.fall();
        pinBall.posChange = true;
    }
    //holds the collider if teh ball its colliding
    var collision = isColliding(pinBall);
    // if the ball hits a collider change the ball's direction using the collision normal
    if (collision.colliding && collision.normal) {
        //const to hold the collider normal
        var normal = collision.normal;
        // calculates the alignment between the ball direction vector and the surface normal
        var dotProduct = pinBall.ballDirectionX * normal.x + pinBall.ballDirectionY * normal.y;
        //update the ball direction
        pinBall.ballDirectionX -= 2 * dotProduct * normal.x;
        pinBall.ballDirectionY -= 2 * dotProduct * normal.y;
        // moves the ball slightly out of the collider to prevent it from getting stuck
        pinBall.pos.spawnPos.x += normal.x * 0.5;
        pinBall.pos.spawnPos.y += normal.y * 0.5;
        //uncomment to make the ball lose speed with each collider hit
        //pinBall.ballVelocityX *= .9;
        // pinBall.ballVelocityY *= .9;
        /* console.log(
          "Bouncing with new direction:",
          pinBall.ballDirectionX,
          pinBall.ballDirectionY
        );*/
    }
    //if gravity is enabled make the ball fall
    if (pinBall.gravity) {
        pinBall.posChange = true;
        //no gravity for now we will be back on the next episode of dragon ball z
    }
    if (pinBall.posChange) {
        pinBall.updateTransform();
    }
    //update the old mouse pos
    mousePosition.oldX = mouseCurrentX;
    mousePosition.oldY = mouseCurrentY;
    windowResized();
    //lose condition is if the ball fell down too far (brings it back to the center for now)
    if (pinBall.pos.spawnPos.y > window.innerHeight) {
        if (pinBall.lives > 1) {
            loseHp();
            pinBall.pos.spawnPos.y = 440;
            pinBall.pos.edgePos.y = 440;
            pinBall.pos.spawnPos.x = innerWidth * 0.5;
            pinBall.pos.edgePos.x = innerWidth * 0.5;
            pinBall.ballDirectionX = 0;
            pinBall.ballDirectionY = 0;
            pinBall.ballVelocityX = 0;
            pinBall.ballVelocityY = 0;
            pinBall.lives--;
            pinBall.updateTransform();
        }
        else {
            if (pinBall.score !== bricks.length) {
                pinBall.pos.spawnPos.y = 440;
                pinBall.pos.edgePos.y = 440;
                pinBall.pos.spawnPos.x = innerWidth * 0.5;
                pinBall.pos.edgePos.x = innerWidth * 0.5;
                pinBall.ballDirectionX = 0;
                pinBall.ballDirectionY = 0;
                pinBall.ballVelocityX = 0;
                pinBall.ballVelocityY = 0;
                pinBall.lives = 0;
                pinBall.die(pinBall);
                lose();
            }
        }
    }
    if (pinBall.score === bricks.length && pinBall.exist) {
        win();
        pinBall.exist = false;
    }
}
function getColor() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return yellow;
    }
    else if (randomNumber == 1) {
        return blue;
    }
    return red;
}
function lose() {
    var loseElement = document.createElement("div");
    loseElement.id = "loser";
    loseElement.innerHTML = "<h1>Game Over</h1> <h3>Score: " + pinBall.score + "</h3> ";
    containerElement.appendChild(loseElement);
    setTimeout(function () {
        location.reload();
    }, 6000);
}
function win() {
    var loseElement = document.createElement("div");
    loseElement.id = "winner";
    loseElement.innerHTML = "<h1>You Win!</h1> <h3>Score: " + pinBall.score + "</h3> ";
    containerElement.appendChild(loseElement);
    setTimeout(function () {
        location.reload();
    }, 6000);
}
