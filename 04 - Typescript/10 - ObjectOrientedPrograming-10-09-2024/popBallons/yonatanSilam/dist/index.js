var Ballon = /** @class */ (function () {
    function Ballon(imageB, imageE) {
        var _this = this;
        this.imageUrl = imageB;
        this.imageForExplosion = imageE;
        this.id = "id-" + crypto.randomUUID();
        try {
            var game = document.querySelector('#game');
            if (!game)
                throw new Error('there are no #game');
            this.ballonElement = document.createElement('img');
            this.ballonElement.src = this.imageUrl;
            this.ballonElement.alt = 'ballon';
            this.ballonElement.id = "" + this.id;
            this.ballonElement.addEventListener('click', function () { return _this.explode(); });
            game.appendChild(this.ballonElement);
        }
        catch (error) {
            console.log(error);
        }
    }
    Ballon.prototype.explode = function () {
        this.ballonElement.src = this.imageForExplosion;
    };
    return Ballon;
}());
var ballon1 = new Ballon('./ballon.jpeg', './explode.png');
var ballon2 = new Ballon('./ballon.jpeg', './explode.png');
function mainGame() {
    for (var i = 0; i < 1000; i++) {
        var ballon = new Ballon('./ballon.jpeg', './explode.png');
    }
}
