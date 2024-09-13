var Balloon = /** @class */ (function () {
    function Balloon() {
        var _this = this;
        this.imgBalloon = './dist/img/balloon.png';
        this.imgExplosion = './dist/img/explosion.png';
        this.imgUrl = this.imgBalloon;
        this.id = 'balloon';
        this.element = document.createElement('img');
        this.renderBalloon();
        this.element.addEventListener('click', function (event) { return _this.explode(event); });
    }
    Balloon.prototype.renderBalloon = function () {
        this.element.src = this.imgUrl;
        this.element.id = this.id;
        document.body.appendChild(this.element);
    };
    Balloon.prototype.explode = function (event) {
        var _this = this;
        this.element.src = this.imgExplosion;
        this.element.removeEventListener('click', function (event) { return _this.explode(event); });
    };
    return Balloon;
}());
function main() {
    var balloon = new Balloon();
}
main();
