var balloonImg = './dist/imgs/balloon.png';
var explosionImg = './dist/imgs/boom.png';
;
var Balloon = /** @class */ (function () {
    function Balloon(imageurl) {
        var _this = this;
        this.imageurl = imageurl;
        this.id = "id-" + crypto.randomUUID();
        this.initialRender();
        this.element.addEventListener('click', function (event) { _this.pop(explosionImg); });
    }
    // getters
    Balloon.prototype.getElement = function () {
        return this.element;
    };
    // methods
    Balloon.prototype.pop = function (explosionImg) {
        this.imageurl = explosionImg;
        this.handlePop();
    };
    // handlers and renderers
    Balloon.prototype.handlePop = function () {
        this.element.src = this.imageurl;
    };
    Balloon.prototype.initialRender = function () {
        this.element = document.createElement('img');
        this.element.src = this.imageurl;
        this.element.id = this.id;
        document.body.appendChild(this.element);
    };
    return Balloon;
}());
function main() {
    var balloon = new Balloon(balloonImg);
}
main();
