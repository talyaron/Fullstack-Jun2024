var balloons = [];
var Ballon = /** @class */ (function () {
    function Ballon(imageUrl) {
        this.imageUrl = imageUrl;
        try {
            this.imageUrl = imageUrl;
            this.id = "id-" + crypto.randomUUID();
            this.explosionUrl = './explosion.png';
        }
        catch (error) {
            console.error(error);
        }
    }
    //methods
    //explode ballon
    Ballon.prototype.renderBallon = function (mainElement) {
        var _this = this;
        try {
            if (!mainElement)
                throw new Error('Main element is required');
            this.position = this.createRandomPosition();
            this.domElement = document.createElement('div');
            this.domElement.classList.add('balloon');
            this.domElement.style.position = 'absolute';
            this.domElement.style.left = this.position.x + "%";
            this.domElement.style.top = this.position.y + "%";
            this.domElement.style.backgroundImage = "url(" + this.imageUrl + ")";
            this.domElement.style.width = '10%';
            this.domElement.style.height = '10%';
            this.domElement.style.backgroundSize = 'contain';
            this.domElement.style.backgroundRepeat = 'no-repeat';
            this.domElement.addEventListener('click', function () {
                _this.explode();
            });
            this.domElement.addEventListener('transitionend', function () {
                _this.explode();
            });
            mainElement.appendChild(this.domElement);
        }
        catch (error) {
            console.error(error);
        }
    };
    Ballon.prototype.createRandomPosition = function () {
        return {
            x: Math.random() * 100,
            y: 50
        };
    };
    Object.defineProperty(Ballon.prototype, "getPosition", {
        get: function () {
            return this.position;
        },
        enumerable: false,
        configurable: true
    });
    Ballon.prototype.flyBalloon = function () {
        this.domElement.style.top = "-20px";
    };
    Ballon.prototype.explode = function () {
        var _this = this;
        this.imageUrl = this.explosionUrl;
        this.domElement.style.backgroundImage = "url(" + this.imageUrl + ")";
        setTimeout(function () {
            _this.domElement.remove();
        }, 3000);
    };
    Object.defineProperty(Ballon.prototype, "balloonId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Ballon;
}());
setInterval(function () {
    var ballon = new Ballon('./balloon.png');
    // console.log(checkIfBallonHasSamePosition(ballon));
    balloons.push(ballon);
    ballon.renderBallon(document.querySelector("#balloons"));
    setTimeout(function () {
        ballon.flyBalloon();
        removeBallonFromList(ballon.balloonId);
    }, 20);
}, 1000);
function removeBallonFromList(id) {
    var index = balloons.findIndex(function (b) { return b.balloonId === id; });
    if (index !== -1) {
        balloons.splice(index, 1);
    }
}
// function checkIfBallonHasSamePosition(balloon: Ballon) {
//     return balloons.some(b => {
//         return b.getPosition.x >= balloon.getPosition.x && b.getPosition.x <= balloon.getPosition.x + 10;
//     });
// }
