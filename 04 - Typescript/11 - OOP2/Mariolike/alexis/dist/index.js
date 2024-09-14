var _this = this;
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
        this.playerElement.addEventListener("click", function () {
            _this.explode();
        });
        this.playerElement.addEventListener("keydown", function () {
            _this.setupControls();
        });
        mainElement.appendChild(this.playerElement);
        document.body.style.backgroundImage = "url(./images/back.png)";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.addEventListener("click", function () {
            document.body.appendChild(_this.playerElement);
        });
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
            y: 310
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
    Player.prototype.explode = function () {
        var _this = this;
        setTimeout(function () {
            _this.playerElement.remove();
        }, 100);
        alert("Game over!");
        alert('Click anywhere to restart!');
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
var mushrooms = [];
var Trouble = /** @class */ (function () {
    function Trouble(imageUrl) {
        this.imageUrl = imageUrl;
        this.position = this.randomPosition();
        this.mushroom = document.createElement('div');
        this.id = crypto.randomUUID();
    }
    Trouble.prototype.renderTrouble = function (troubleElement) {
        try {
            if (!troubleElement)
                throw new Error("cannot find troubleElement");
            this.mushroom.classList.add("trouble");
            this.mushroom.style.position = "absolute";
            this.mushroom.style.top = this.position + "px";
            this.mushroom.style.left = this.position + "px";
            this.mushroom.style.backgroundSize = "contain";
            this.mushroom.style.backgroundRepeat = "no-repeat";
            this.mushroom.style.backgroundImage = "url(./images/trouble.png)";
            this.mushroom.style.width = "15px";
            this.mushroom.style.height = "15px";
        }
        catch (error) {
            console.error("cannot render mushrooms");
        }
    };
    Trouble.prototype.moveMushroom = function () {
        this.mushroom.style.left = '15px';
    };
    Trouble.prototype.randomPosition = function () {
        return {
            x: 100,
            y: Math.random() * 500
        };
    };
    return Trouble;
}());
setInterval(function () {
    var troubleElement = document.querySelector("#trouble");
    if (troubleElement) {
        var mushroom_1 = new Trouble('./images/trouble.png');
        mushrooms.push(mushroom_1);
        document.body.appendChild(_this.mushroom);
        setInterval(function () {
            mushroom_1.moveMushroom();
        }, 3000);
        mushroom_1.renderTrouble(document.querySelector("#trouble"));
    }
}, 500);
