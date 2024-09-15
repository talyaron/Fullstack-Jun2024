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
            this.width = Math.floor(Math.random() * (500 - 100) + 100);
            this.height = 60;
        }
        catch (error) {
            console.error(error);
        }
    }
    Step.prototype.renderStep = function (mainElement) {
        var step = document.createElement('steps');
        step.classList.add('stepDesign');
        step.style.width = this.width + "px";
        step.style.height = this.height + "px";
        step.style.bottom = Math.floor(Math.random() * (1080 - 280) + 280) + "px";
        step.style.left = Math.floor(Math.random() * (1500 - 150) + 150) + "px";
        mainElement.appendChild(step);
    };
    return Step;
}());
var newPlayer = new Player(0, 912.5, character);
var newStep = new Step();
function main() {
    var mainElement = document.getElementById('IcyTower');
    newPlayer.renderPlayer(mainElement);
    newStep.renderStep(mainElement);
}
main();
