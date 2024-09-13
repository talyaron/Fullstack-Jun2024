var Ballon = /** @class */ (function () {
    function Ballon(parentElement, imageUrl, explosionImage) {
        this.imageUrl = imageUrl;
        this.explosionImage = explosionImage;
        this.id = crypto.randomUUID();
        this.renderBallon(parentElement);
    }
    Ballon.prototype.renderBallon = function (parentElement) {
        var _this = this;
        this.htmlElement = document.createElement('img');
        this.htmlElement.src = this.imageUrl;
        this.htmlElement.addEventListener('click', function () { return _this.explode(); });
        parentElement.appendChild(this.htmlElement);
    };
    Ballon.prototype.explode = function () {
        this.htmlElement.src = this.explosionImage;
    };
    return Ballon;
}());
function main() {
    var parentElement = document.getElementById('ballon');
    if (!parentElement)
        return;
    var ballon1 = new Ballon(parentElement, "https://supporters.de/media/image/product/489/lg/premium-luftballons-rot-30cm-durchmesser.jpg", "https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/balloon/u/5/k/4-25-premium-quality-metallic-shining-blue-ballon-pack-of-25-original-imagd4fqkeqgfysg.jpeg?q=90&crop=false");
}
main();
