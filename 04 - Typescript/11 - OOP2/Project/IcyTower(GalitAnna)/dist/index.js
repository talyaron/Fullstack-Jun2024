var character = './images/character1.png';
var Player = /** @class */ (function () {
    function Player(x, y, imageUrl, velocityY, gravity, isJumping) {
        this.positionX = x;
        this.positionY = y;
        this.imageUrl = imageUrl;
        this.velocityY = velocityY;
        this.gravity = gravity;
        this.isJumping = isJumping;
        this.isPaused = false;
        this.element = null;
    }
    Object.defineProperty(Player.prototype, "getPositionX", {
        get: function () {
            return this.positionX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "getPositionY", {
        get: function () {
            return this.positionY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "getImageUrl", {
        get: function () {
            return this.imageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "setPositionX", {
        set: function (x) {
            this.positionX = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "setPositionY", {
        set: function (y) {
            this.positionY = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "setImageUrl", {
        set: function (image) {
            this.imageUrl = image;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.renderPlayer = function (mainElement) {
        try {
            if (!mainElement)
                throw new Error('Main element is required');
            var player = document.createElement('img');
            player.src = this.imageUrl;
            player.style.position = 'absolute';
            player.style.bottom = this.positionY + "px";
            player.style.left = this.positionX + "vw";
            player.classList.add('player');
            player.style.zIndex = '1';
            mainElement.appendChild(player);
            this.element = player;
            this.addEventListeners();
            this.update();
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.addEventListeners = function () {
        var _this = this;
        window.addEventListener('keydown', function (event) {
            if (!_this.isPaused) {
                if (event.key === 'ArrowRight') {
                    _this.moveRight();
                }
                if (event.key === 'ArrowLeft') {
                    _this.moveLeft();
                }
                if (event.key === ' ' || event.key === 'ArrowUp') {
                    _this.jump();
                }
            }
        });
    };
    Player.prototype.moveRight = function () {
        this.positionX += 5;
        this.updatePosition();
    };
    Player.prototype.moveLeft = function () {
        this.positionX -= 5;
        this.updatePosition();
    };
    Player.prototype.jump = function () {
        if (!this.isJumping) {
            this.isJumping = true;
            this.velocityY = 5;
        }
    };
    Player.prototype.update = function () {
        var _this = this;
        if (!this.isPaused) {
            if (this.isJumping) {
                this.positionY += this.velocityY;
                this.velocityY -= this.gravity;
                if (this.positionY <= 0) {
                    this.positionY = 0;
                    this.isJumping = false;
                }
            }
            this.updatePosition();
            requestAnimationFrame(function () { return _this.update(); });
        }
    };
    Player.prototype.updatePosition = function () {
        if (this.element) {
            this.element.style.left = this.positionX + "vw";
            this.element.style.bottom = this.positionY + "vh";
        }
    };
    Player.prototype.pauseGame = function () {
        this.isPaused = true;
    };
    Player.prototype.resumeGame = function () {
        if (this.isPaused) {
            this.isPaused = false;
            this.update();
        }
    };
    Player.prototype.resetGame = function () {
        this.positionX = 50;
        this.positionY = 0;
        this.velocityY = 0;
        this.isJumping = false;
        this.updatePosition();
    };
    return Player;
}());
var Step = /** @class */ (function () {
    function Step() {
        this.width = Math.floor(Math.random() * (40 - 10) + 10);
        this.height = 5;
        this.positionX = Math.floor(Math.random() * (60 - 8) + 8);
        this.positionY = 0;
    }
    Object.defineProperty(Step.prototype, "getPositionX", {
        get: function () {
            return this.positionX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "getPositionY", {
        get: function () {
            return this.positionY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "getWidth", {
        get: function () {
            return this.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "getHeight", {
        get: function () {
            return this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "setPositionX", {
        set: function (x) {
            this.positionX = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "setPositionY", {
        set: function (y) {
            this.positionY = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "setWidth", {
        set: function (width) {
            this.width = width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "setHeight", {
        set: function (height) {
            this.height = height;
        },
        enumerable: false,
        configurable: true
    });
    Step.prototype.renderStep = function (mainElement) {
        var step = document.createElement('div');
        step.classList.add('stepDesign');
        step.style.width = this.width + "vw";
        step.style.position = 'absolute';
        step.style.height = this.height + "vh";
        step.style.top = this.positionY + "vh";
        step.style.left = this.positionX + "vw";
        step.style.setProperty('--initial-positionY', this.positionY + "vh");
        var animationDuration = 10;
        step.style.animationDuration = animationDuration + "s";
        step.addEventListener('animationend', function () {
            mainElement.removeChild(step);
        });
        mainElement.appendChild(step);
    };
    return Step;
}());
var newPlayer = new Player(50, 0, character, 0, 0.5, false);
function main() {
    var mainElement = document.getElementById('IcyTower');
    newPlayer.renderPlayer(mainElement);
    function createStepWithDelay() {
        var newStep = createSteps();
        newStep.renderStep(mainElement);
        setTimeout(createStepWithDelay, 1500);
    }
    createStepWithDelay();
}
function createSteps() {
    return new Step();
}
window.onload = function () {
    var pauseButton = document.getElementById('pauseButton');
    var startOverButton = document.getElementById('startOverButton');
    pauseButton.addEventListener('click', function () {
        newPlayer.pauseGame();
    });
    startOverButton.addEventListener('click', function () {
        newPlayer.resetGame();
        newPlayer.resumeGame();
    });
    main();
};
