var balloonImg = './dist/imgs/balloon.png';
var explosionImg = './dist/imgs/boom.png';
var counter = 0;
;
var Balloon = /** @class */ (function () {
    function Balloon(position) {
        var _this = this;
        this.postion = position;
        this.imageurl = balloonImg;
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
        var _this = this;
        counter++;
        renderCounter();
        this.element.src = this.imageurl;
        setTimeout(function () { _this.element.remove(); }, 2000);
    };
    Balloon.prototype.initialRender = function () {
        this.element = document.createElement('img');
        this.element.src = this.imageurl;
        this.element.id = this.id;
        this.element.style.position = 'absolute';
        this.element.style.left = this.postion.x + 'px';
        this.element.style.top = this.postion.y + 'px';
        document.body.appendChild(this.element);
    };
    return Balloon;
}());
function getRandomPosition() {
    var width = window.innerWidth - 200;
    var height = window.innerHeight - 200;
    return { x: Math.floor(Math.random() * width) + 100, y: Math.floor(Math.random() * height) + 100 };
}
function renderCounter() {
    try {
        var counterElement = document.getElementById('counter');
        if (!counterElement)
            throw new Error('Counter element not found');
        counterElement.textContent = "Popped balloons: " + counter;
    }
    catch (error) {
        console.error(error);
    }
}
function main() {
    setInterval(function () { new Balloon(getRandomPosition()); }, 1000);
}
main();
