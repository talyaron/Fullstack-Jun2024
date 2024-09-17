var character = './images/character1.png';
var Player = /** @class */ (function () {
    function Player(x, y, imageUrl) {
        this.positionX = x;
        this.positionY = y;
        this.imageUrl = './images/character1.png';
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
            player.style.bottom = this.positionX + "px";
            player.style.left = this.positionY + "px";
            player.classList.add('player');
            player.style.zIndex = '1';
            mainElement.appendChild(player);
        }
        catch (error) {
        }
    };
    return Player;
}());
var Step = /** @class */ (function () {
    function Step() {
        try {
            this.width = Math.floor(Math.random() * (750 - 300) + 300);
            this.height = 60;
            this.positionX = Math.floor(Math.random() * (1600 - 150) + 150);
            this.positionY = 1080;
        }
        catch (error) {
            console.error(error);
        }
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
        var positionChanged = false;
        var step = document.createElement('div');
        if (this.positionX + this.width > 1600) {
            this.positionX = Math.floor(Math.random() * (1400 - 1000) + 1000);
            this.width = Math.floor(Math.random() * (320 - 250) + 250);
            positionChanged = true;
        }
        if (this.positionX < 100) {
            this.positionX = 101;
        }
        step.classList.add('stepDesign');
        step.style.width = this.width + "px";
        step.style.position = 'absolute';
        step.style.height = this.height + "px";
        step.style.bottom = this.positionY + "px";
        step.style.left = this.positionX + "px";
        console.log('Step positionX:', this.positionX, 'Step width:', this.width, positionChanged, this.positionY);
        step.style.setProperty('--initial-positionY', this.positionY + "px");
        var animationDuration = 10;
        step.style.animationDuration = animationDuration + "s";
        step.addEventListener('animationend', function () {
            mainElement.removeChild(step);
        });
        mainElement.appendChild(step);
    };
    return Step;
}());
var newPlayer = new Player(0, 912.5, character);
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
main();
