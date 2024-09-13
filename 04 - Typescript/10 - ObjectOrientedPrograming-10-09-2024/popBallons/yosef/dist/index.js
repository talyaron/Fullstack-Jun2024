var boom = 'https://pic1.yitweb.co.il/picserver/mynet/crop_images/2023/11/13/HJNPSnkNa/HJNPSnkNa_0_0_640_360_0_large.jpg';
var no_boom = 'https://cdn.pixabay.com/photo/2012/04/05/01/39/balloon-25734_1280.png';
;
var Ballon = /** @class */ (function () {
    function Ballon(imageURL) {
        var _this = this;
        this.id = Math.random();
        this.element = document.createElement('img');
        this.element.src = no_boom;
        this.position = { x: Math.random() * 1000, y: 600 };
        this.renderNewBallon();
        this.element.addEventListener('click', function (event) { _this.explode_ballon(); });
    }
    Ballon.prototype.explode_ballon = function () {
        this.element.src = boom;
    };
    Ballon.prototype.renderNewBallon = function () {
        var box = document.getElementById('box');
        if (!box)
            throw new Error('Box not found.');
        this.element = document.createElement('img');
        this.element.src = no_boom;
        this.element.id = String(this.id);
        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
        this.element.style.position = 'absolute';
        box.appendChild(this.element);
    };
    return Ballon;
}());
function main2() {
    try {
        var ballon = new Ballon(boom);
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
var intervalId = setInterval(main2, 1000);
