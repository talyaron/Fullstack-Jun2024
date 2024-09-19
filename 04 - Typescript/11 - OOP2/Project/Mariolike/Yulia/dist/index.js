var Mario = /** @class */ (function () {
    function Mario() {
        this.isJumping = false;
        this.isAlive = true;
        this.position = { x: 0, y: 80 };
        this.domElement = document.createElement("div");
        this.domElement.classList.add("mario");
        document.body.appendChild(this.domElement);
        this.render();
    }
    Mario.prototype.render = function () {
        this.domElement.style.left = this.position.x + "%";
        this.domElement.style.top = this.position.y + "%";
    };
    Mario.prototype.move = function (direction) {
        if (!this.isAlive)
            return;
        switch (direction) {
            case "left":
                if (this.position.x > 0)
                    this.position.x -= 5;
                break;
            case "right":
                if (this.position.x < 95)
                    this.position.x += 5;
                break;
        }
        this.render();
    };
    Mario.prototype.jump = function () {
        var _this = this;
        if (!this.isAlive || this.isJumping)
            return;
        this.isJumping = true;
        var initialY = this.position.y;
        this.position.y -= 30;
        this.render();
        setTimeout(function () {
            _this.position.y = initialY;
            _this.render();
            _this.isJumping = false;
        }, 300);
    };
    Mario.prototype.gameOver = function () {
        this.isAlive = false;
        var gameOverText = document.createElement("div");
        gameOverText.classList.add("game-over");
        gameOverText.innerText = "GAME OVER";
        document.body.appendChild(gameOverText);
    };
    Mario.prototype.getDomElement = function () {
        return this.domElement;
    };
    return Mario;
}());
var Mashroom = /** @class */ (function () {
    function Mashroom() {
        this.movingLeft = Math.random() < 0.5;
        this.maxY = 83;
        this.position = { x: Math.random() * 95, y: 0 };
        this.domElement = document.createElement("div");
        this.domElement.classList.add("mashroom");
        document.body.appendChild(this.domElement);
        this.render();
    }
    Mashroom.prototype.render = function () {
        this.domElement.style.left = this.position.x + "%";
        this.domElement.style.top = this.position.y + "%";
    };
    Mashroom.prototype.fall = function () {
        var _this = this;
        var fallInterval = setInterval(function () {
            if (_this.position.y < _this.maxY) {
                _this.position.y += 1;
                _this.render();
            }
            else {
                clearInterval(fallInterval);
                _this.moveSideways();
            }
        }, 100);
    };
    Mashroom.prototype.moveSideways = function () {
        var _this = this;
        var moveInterval = setInterval(function () {
            if (_this.movingLeft) {
                if (_this.position.x > 0) {
                    _this.position.x -= 0.5;
                }
                else {
                    _this.movingLeft = false;
                }
            }
            else {
                if (_this.position.x < 95) {
                    _this.position.x += 0.5;
                }
                else {
                    _this.movingLeft = true;
                }
            }
            _this.render();
        }, 50);
    };
    Mashroom.prototype.checkCollision = function (mario) {
        var marioRect = mario.getDomElement().getBoundingClientRect();
        var mashroomRect = this.domElement.getBoundingClientRect();
        if (marioRect.x < mashroomRect.x + mashroomRect.width &&
            marioRect.x + marioRect.width > mashroomRect.x &&
            marioRect.y < mashroomRect.y + mashroomRect.height &&
            marioRect.y + marioRect.height > mashroomRect.y) {
            mario.gameOver();
        }
        if (marioRect.x < mashroomRect.x + mashroomRect.width &&
            marioRect.x + marioRect.width > mashroomRect.x) {
            this.movingLeft = !this.movingLeft;
        }
    };
    Mashroom.prototype.getPosition = function () {
        return this.position;
    };
    return Mashroom;
}());
var mario = new Mario();
var mashrooms = [];
var createdMashrooms = 0;
var mashroomCreationInterval = setInterval(function () {
    if (createdMashrooms < 7) {
        var mashroom = new Mashroom();
        mashroom.fall();
        mashrooms.push(mashroom);
        createdMashrooms++;
    }
    else {
        clearInterval(mashroomCreationInterval);
    }
}, 3000);
setInterval(function () {
    mashrooms.forEach(function (mashroom) {
        mashroom.checkCollision(mario);
    });
}, 100);
document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        mario.jump();
    }
    else {
        switch (event.code) {
            case "ArrowLeft":
                mario.move("left");
                break;
            case "ArrowRight":
                mario.move("right");
                break;
        }
    }
});
