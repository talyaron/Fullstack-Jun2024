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
            var player_1 = document.createElement('img');
            player_1.src = this.imageUrl;
            player_1.style.position = 'absolute';
            player_1.style.top = this.positionX + "%";
            player_1.style.left = this.positionY + "%";
            mainElement.appendChild(player_1);
        }
        catch (error) {
        }
    };
    return Player;
}());
var Step = /** @class */ (function () {
    function Step(length, height) {
        try {
            this.width = length;
            this.height = height;
        }
        catch (error) {
            console.error(error);
        }
    }
    return Step;
}());
var player = new Player(500, 0, character);
function main() {
    player.renderPlayer(document.getElementById('#IcyTower'));
}
