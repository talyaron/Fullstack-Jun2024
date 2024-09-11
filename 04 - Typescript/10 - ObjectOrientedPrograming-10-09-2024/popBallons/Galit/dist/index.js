var Balloon = /** @class */ (function () {
    function Balloon(imageUrl, imageExplosion, onExplode) {
        this.imageUrl = imageUrl;
        this.id = crypto.randomUUID();
        this.imageExplosion = imageExplosion;
        this.onExplode = onExplode;
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
        if (this.onExplode) {
            this.onExplode();
        }
    };
    return Balloon;
}());
var totalBalloons;
var explodedBalloons = 0;
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
    totalBalloons = 10;
    for (var i = 0; i < totalBalloons; i++) {
        var balloonInstance = new Balloon('./images/balloon1.png', './images/balloon2.png', function () {
            explodedBalloons++;
            if (explodedBalloons === totalBalloons) {
                stopTimer();
            }
        });
        createBalloon(balloonInstance);
    }
}
var startTime;
var timerInterval;
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}
function stopTimer() {
    if (timerInterval !== undefined) {
        clearInterval(timerInterval);
        timerInterval = undefined;
    }
}
function updateTimer() {
    var elapsedTime = Date.now() - startTime;
    var seconds = Math.floor(elapsedTime / 1000) % 60;
    var minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    var timerElement = document.getElementById('timer');
    timerElement.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}
function pad(number) {
    return number.toString().padStart(2, '0');
}
document.addEventListener('DOMContentLoaded', function () {
    main();
    startTimer();
});
