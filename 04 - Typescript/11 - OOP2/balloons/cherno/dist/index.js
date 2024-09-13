var balloonImg = './dist/imgs/balloon.png';
var explosionImg = './dist/imgs/boom.png';
var counter = 0;
;
var Balloon = /** @class */ (function () {
    function Balloon() {
        var _this = this;
        this.postion = this.createRandomPosition();
        this.imageurl = balloonImg;
        this.id = "id-" + crypto.randomUUID();
        this.popped = false;
        this.initialRender();
        setInterval(function () { _this.fly(); }, 100);
        this.element.addEventListener('click', function (event) { _this.pop(explosionImg); });
    }
    // getters
    Balloon.prototype.getElement = function () {
        return this.element;
    };
    // methods
    Balloon.prototype.pop = function (explosionImg) {
        this.imageurl = explosionImg;
        this.popped = true;
        this.handlePop();
    };
    Balloon.prototype.createRandomPosition = function () {
        var width = window.innerWidth - 200;
        var height = window.innerHeight - 200;
        return { x: Math.floor(Math.random() * width) + 100, y: height };
    };
    Balloon.prototype.fly = function () {
        if (this.popped)
            return;
        this.postion.y -= 10;
        this.postion.x += Math.floor(Math.random() * 5) - 2;
        this.handleMove();
    };
    // handlers and renderers
    Balloon.prototype.handleMove = function () {
        this.element.style.left = this.postion.x + 'px';
        this.element.style.top = this.postion.y + 'px';
    };
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
    setInterval(function () { new Balloon(); }, 1000);
}
main();
