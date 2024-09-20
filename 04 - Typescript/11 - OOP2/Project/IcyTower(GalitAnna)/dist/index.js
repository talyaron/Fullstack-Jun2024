var character = './images/character1.png';
var Player = /** @class */ (function () {
    function Player(x, y, imageUrl, velocityY, gravity, isJumping, isFailed) {
        this.positionX = x;
        this.positionY = y;
        this.imageUrl = imageUrl;
        this.velocityY = velocityY;
        this.gravity = gravity;
        this.isJumping = true;
        this.isPaused = false;
        this.element = null;
        this.isFailed = false;
        this.firstJump = true;
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
    Object.defineProperty(Player.prototype, "getFirstJump", {
        get: function () {
            return this.firstJump;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "getIsFaield", {
        get: function () {
            return this.isFailed;
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
                _this.firstJump = false;
            }
        });
    };
    Player.prototype.moveRight = function () {
        var playerWidthVW = (80 / window.innerWidth) * 100;
        this.positionX += 5;
        if (this.positionX > (100 - playerWidthVW - 10)) {
            this.positionX = 100 - playerWidthVW - 10;
        }
        this.updatePosition();
    };
    Player.prototype.moveLeft = function () {
        this.positionX -= 5;
        if (this.positionX < 10) {
            this.positionX = 10;
        }
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
                this.checkCollisionWithSteps();
            }
            if (this.isNearBounds()) {
                this.rotatePlayer();
            }
            this.updatePosition();
            requestAnimationFrame(function () { return _this.update(); });
        }
    };
    Player.prototype.checkCollisionWithSteps = function () {
        var playerHeight = 5;
        var playerBottom = this.positionY;
        var playerTop = this.positionY + playerHeight;
        var onStep = false;
        for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
            var step = steps_1[_i];
            var stepTop = step.getPositionY;
            var stepBottom = step.getPositionY + step.getHeight;
            if (playerBottom >= stepTop &&
                playerTop <= stepBottom &&
                this.positionX + 5 >= step.getPositionX &&
                this.positionX <= (step.getPositionX + step.getWidth)) {
                this.positionY = stepTop;
                this.isJumping = false;
                this.velocityY = 0;
                onStep = true;
                break;
            }
        }
        console.log("Player Position: Y=" + this.positionY + ", Bottom=" + playerBottom + ", Top=" + playerTop);
        steps.forEach(function (step) {
            console.log("Step Position: Top=" + step.getPositionY + ", Bottom=" + (step.getPositionY + step.getHeight));
        });
    };
    Player.prototype.isNearBounds = function () {
        var leftBound = 10;
        var rightBound = 100 - 10;
        var bottomBound = 12;
        return (this.positionX < leftBound || this.positionX > rightBound || this.positionY < bottomBound);
    };
    Player.prototype.rotatePlayer = function () {
        var _this = this;
        if (this.element) {
            this.element.classList.add('rotate');
            setTimeout(function () {
                var _a;
                (_a = _this.element) === null || _a === void 0 ? void 0 : _a.classList.remove('rotate');
            }, 1000);
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
        this.element = null;
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
        step.style.animationPlayState = 'running';
        mainElement.appendChild(step);
        this.element = step;
    };
    Step.prototype.stopAnimation = function () {
        if (this.element) {
            this.element.style.animationPlayState = 'paused';
        }
    };
    Step.prototype.resumeAnimation = function () {
        if (this.element) {
            this.element.style.animationPlayState = 'running';
        }
    };
    return Step;
}());
var newPlayer = new Player(50, 0, character, 0, 0.5, false, false);
var isGamePaused = false;
var stepIntervalId = null;
var steps = [];
function main() {
    var mainElement = document.getElementById('IcyTower');
    newPlayer.renderPlayer(mainElement);
    createStepWithDelay();
}
function createSteps() {
    return new Step();
}
function pauseGame() {
    isGamePaused = true;
    newPlayer.pauseGame();
    steps.forEach(function (step) { return step.stopAnimation(); });
    if (stepIntervalId !== null) {
        clearTimeout(stepIntervalId);
    }
}
function resumeGame() {
    isGamePaused = false;
    newPlayer.resumeGame();
    steps.forEach(function (step) { return step.resumeAnimation(); });
    createStepWithDelay();
}
function resetGame() {
    var mainElement = document.getElementById('IcyTower');
    var existingSteps = mainElement.querySelectorAll('.stepDesign');
    existingSteps.forEach(function (step) { return step.remove(); });
    newPlayer.resetGame();
    if (stepIntervalId !== null) {
        clearTimeout(stepIntervalId);
    }
    steps = [];
    createStepWithDelay();
}
function createStepWithDelay() {
    if (!isGamePaused) {
        var mainElement = document.getElementById('IcyTower');
        var newStep = createSteps();
        newStep.renderStep(mainElement);
        steps.push(newStep);
    }
    stepIntervalId = setTimeout(createStepWithDelay, 1500);
}
window.onload = function () {
    var pauseButton = document.getElementById('pauseButton');
    var startOverButton = document.getElementById('startOverButton');
    pauseButton.addEventListener('click', function () {
        if (isGamePaused) {
            resumeGame();
            pauseButton.textContent = '||';
        }
        else {
            pauseGame();
            pauseButton.textContent = '▶';
        }
    });
    startOverButton.addEventListener('click', function () {
        resetGame();
        if (isGamePaused) {
            resumeGame();
            pauseButton.textContent = '||';
        }
    });
    main();
};
