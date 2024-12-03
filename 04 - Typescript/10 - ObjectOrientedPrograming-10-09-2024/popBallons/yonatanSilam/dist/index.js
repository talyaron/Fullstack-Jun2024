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
var Ballon = /** @class */ (function () {
    function Ballon(imageB, imageE) {
        var _this = this;
        this.imageUrl = imageB;
        this.imageForExplosion = imageE;
        this.id = "id-" + crypto.randomUUID();
        this.position = { x: 0, y: 0 };
        try {
            var game = document.querySelector('#game');
            if (!game)
                throw new Error('there are no #game');
            this.ballonElement = document.createElement('img');
            this.ballonElement.classList.add('ballon');
            this.ballonElement.src = this.imageUrl;
            this.ballonElement.alt = 'ballon';
            this.ballonElement.id = "" + this.id;
            this.ballonElement.style.position = 'absolute';
            this.ballonElement.style.top = '900px'; //864
            var randomPosition = Math.floor(Math.random() * (1600 - 1 + 1)) + 1; //1536
            this.ballonElement.style.left = randomPosition + "px";
            this.ballonElement.addEventListener('click', function () { return _this.explode(); });
            game.appendChild(this.ballonElement);
        }
        catch (error) {
            console.log(error);
        }
    }
    Ballon.prototype.explode = function () {
        this.ballonElement.src = this.imageForExplosion;
        console.log('click');
    };
    Ballon.prototype.move = function () {
        this.position = { x: this.position.x, y: -555 };
        this.ballonElement.style.top = "-555px";
    };
    return Ballon;
}());
var Dragon = /** @class */ (function (_super) {
    __extends(Dragon, _super);
    function Dragon(imageUrl) {
        return _super.call(this, imageUrl, imageUrl) || this;
    }
    Dragon.prototype.move = function () {
        var randomPosition = Math.floor(Math.random() * (1600 - 1 + 1)) + 1; //1536
        this.position = { x: randomPosition, y: -555 };
        this.ballonElement.style.top = "-555px";
        this.ballonElement.style.left = randomPosition + "px";
    };
    return Dragon;
}(Ballon));
var allBallon = [];
var i = 0;
function mainGame() {
    for (var i = 0; i < 1000; i++) {
        if (i % 2 == 0) {
            var ballon = new Ballon('./ballon.jpeg', './explode.png');
            allBallon.push(ballon);
        }
        else {
            var dragon = new Dragon('./dragon.jpeg');
            allBallon.push(dragon);
        }
    }
    var intervalId = setInterval(newBallon, 1000);
}
function newBallon() {
    allBallon[i].move();
    console.log('saa');
    i++;
}
