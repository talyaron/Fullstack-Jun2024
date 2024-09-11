var Balloon = /** @class */ (function () {
    function Balloon(imageUrl, imageExplosion) {
        this.imageUrl = imageUrl;
        this.id = crypto.randomUUID();
        this.imageExplosion = imageExplosion;
    }
    Balloon.prototype.explode = function (balloonElement) {
        var computedStyle = window.getComputedStyle(balloonElement);
        var currentBottom = computedStyle.getPropertyValue('bottom');
        var currentLeft = computedStyle.getPropertyValue('left');
        balloonElement.src = this.imageExplosion;
        balloonElement.classList.remove('balloon');
        balloonElement.classList.add('explode-animation');
        balloonElement.style.bottom = currentBottom;
        balloonElement.style.left = currentLeft;
    };
    return Balloon;
}());
function createBalloon(balloonInstance) {
    var balloonContainer = document.getElementById('balloon-container');
    var balloonElement = document.createElement('img');
    balloonElement.src = balloonInstance.imageUrl;
    balloonElement.classList.add('balloon');
    balloonElement.style.left = Math.random() * 90 + "vw";
    balloonElement.addEventListener('click', function () {
        balloonInstance.explode(balloonElement);
    });
    balloonContainer.appendChild(balloonElement);
}
function main() {
    var numberOfBalloons = 10;
    for (var i = 0; i < numberOfBalloons; i++) {
        var balloonInstance = new Balloon('./images/balloon1.png', './images/balloon2.png');
        createBalloon(balloonInstance);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    main();
});
