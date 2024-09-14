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
        // this.playerElement.addEventListener("click", () => {
        //   this.explode();
        // });
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
        alert("Click anywhere to restart!");
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
        this.mushroom = document.createElement("div");
        this.id = crypto.randomUUID();
        this.renderTrouble(); // Render immediately
    }
    Trouble.prototype.renderTrouble = function () {
        try {
            this.mushroom.classList.add("trouble");
            this.mushroom.style.position = "absolute";
            this.mushroom.style.left = this.position.x + "px";
            this.mushroom.style.top = this.position.y + "px";
            this.mushroom.style.backgroundSize = "contain";
            this.mushroom.style.backgroundRepeat = "no-repeat";
            this.mushroom.style.backgroundImage = "url(" + this.imageUrl + ")";
            this.mushroom.style.width = "30px";
            this.mushroom.style.height = "30px";
            this.updatePosition();
            var mushroom = document.querySelector("#trouble");
            if (!mushroom)
                throw new Error("Cannot find troubleElement");
            mushroom.appendChild(this.mushroom);
        }
        catch (error) {
            console.error("Cannot render mushroom:", error);
        }
    };
    Trouble.prototype.updatePosition = function () {
        this.mushroom.style.left = this.position.x + "px";
        this.mushroom.style.top = this.position.y + "px";
    };
    Trouble.prototype.moveMushroom = function () {
        this.position.x += 15;
        this.updatePosition();
        if (this.position.x > window.innerWidth) {
            this.mushroom.remove();
        }
    };
    Trouble.prototype.randomPosition = function () {
        return {
            x: 10,
            y: Math.random() * window.innerHeight
        };
    };
    return Trouble;
}());
setInterval(function () {
    var mushroom = new Trouble("https://mario.wiki.gallery/images/8/8b/SuperMushroom_-_2D_art.svg");
    mushrooms.push(mushroom);
    console.error("Trouble container element not found");
}, 1000);
setInterval(function () {
    mushrooms.forEach(function (mushroom) { return mushroom.moveMushroom(); });
}, 100);
function gameOver(player, troubleElement) {
    mushrooms.forEach(function (mushroom) {
        var mushroomRect = mushroom.mushroom.getBoundingClientRect();
        var playerRect = player.playerElement.getBoundingClientRect();
        if (mushroomRect.left < playerRect.right &&
            mushroomRect.bottom > playerRect.top &&
            mushroomRect.top < playerRect.bottom &&
            mushroomRect.right > playerRect.left) {
            player.explode();
            mushrooms.forEach(function (mushroom) { return mushroom.mushroom.remove(); });
            mushrooms.length = 0;
        }
    });
}
setInterval(function () {
    return gameOver(player, mushrooms);
}, 10);
