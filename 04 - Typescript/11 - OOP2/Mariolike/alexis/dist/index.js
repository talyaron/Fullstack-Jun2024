var Player = /** @class */ (function () {
    function Player(imageUrlRight, imageUrlLeft) {
        this.id = crypto.randomUUID();
        this.imageUrlRight = imageUrlRight;
        this.imageUrlLeft = imageUrlLeft;
        this.playerElement = document.createElement("div");
        this.setupControls();
    }
    Player.prototype.renderPlayer = function (mainElement) {
        var _this = this;
        if (!mainElement) {
            throw new Error("No main element provided for player rendering");
        }
        this.position = this.createRandomPosition();
        this.playerElement = document.createElement("div");
        this.playerElement.classList.add("player");
        this.playerElement.style.position = "absolute";
        this.playerElement.style.left = this.position.x + "px";
        this.playerElement.style.top = this.position.y + "px";
        this.playerElement.style.width = "10%";
        this.playerElement.style.height = "10%";
        this.playerElement.style.backgroundSize = "contain";
        this.playerElement.style.backgroundRepeat = "no-repeat";
        this.playerElement.style.backgroundImage = "url(" + this.imageUrlRight + ")";
        this.playerElement.addEventListener("keydown", function () {
            _this.setupControls();
        });
        mainElement.appendChild(this.playerElement);
        document.body.style.backgroundImage =
            'url(./images/back.png)';
        document.body.style.width = "100%";
        document.body.style.height = "100%";
    };
    Player.prototype.setupControls = function () {
        var _this = this;
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowRight") {
                _this.moveRight();
            }
            if (event.key === "ArrowLeft") {
                _this.moveLeft();
            }
            if (event.key === "ArrowUp") {
                _this.jump();
            }
            if (event.key === "ArrowDown") {
                _this.lower();
            }
        });
    };
    Player.prototype.createRandomPosition = function () {
        return {
            x: Math.random() * 1000,
            y: 300
        };
    };
    Player.prototype.moveRight = function () {
        this.position.x += 15;
        this.updatePlayerPosition();
        this.playerElement.style.backgroundImage = "url(" + this.imageUrlRight + ")";
        console.log("right method");
    };
    Player.prototype.moveLeft = function () {
        this.position.x -= 15;
        this.updatePlayerPosition();
        this.playerElement.style.backgroundImage = "url(" + this.imageUrlLeft + ")";
        console.log("left method");
    };
    Player.prototype.jump = function () {
        this.position.y -= 15;
        this.updatePlayerPosition();
    };
    Player.prototype.lower = function () {
        this.position.y += 15;
        this.updatePlayerPosition();
    };
    Player.prototype.updatePlayerImage = function () {
        this.playerElement.style.backgroundImage = "" + this.imageUrlRight;
    };
    Player.prototype.updatePlayerPosition = function () {
        this.playerElement.style.left = this.position.x + "px";
        this.playerElement.style.top = this.position.y + "px";
    };
    return Player;
}());
var mainElement = document.querySelector("#main");
if (mainElement) {
    var player = new Player("./images/right.png", "./images/left.png");
    player.renderPlayer(mainElement);
}
else {
    console.error("Main element not found");
}
