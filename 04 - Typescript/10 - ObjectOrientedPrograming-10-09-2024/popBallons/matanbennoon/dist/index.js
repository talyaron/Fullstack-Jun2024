var Balloon = /** @class */ (function () {
    function Balloon(imageUrl, explosionImageUrl) {
        this.ballon = imageUrl;
        this.ballonExplosion = explosionImageUrl;
    }
    Balloon.prototype.renderBalloon = function () {
        var _this = this;
        var balloonElement = document.createElement('img');
        balloonElement.src = this.ballon;
        balloonElement.style.width = '200px';
        balloonElement.style.height = '200px';
        balloonElement.addEventListener('click', function () { return _this.explodeBalloon(balloonElement); });
        this.balloonElement = balloonElement;
        var field = document.getElementById('field');
        if (field) {
            field.appendChild(balloonElement);
        }
    };
    Balloon.prototype.explodeBalloon = function (balloonElement) {
        balloonElement.src = this.ballonExplosion;
    };
    return Balloon;
}());
var balloon = new Balloon('/04 - Typescript/10 - ObjectOrientedPrograming-10-09-2024/popBallons/matanbennoon/image/2.png', '/04 - Typescript/10 - ObjectOrientedPrograming-10-09-2024/popBallons/matanbennoon/image/1.png');
balloon.renderBalloon();
