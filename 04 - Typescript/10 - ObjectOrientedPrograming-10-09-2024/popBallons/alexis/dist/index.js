var Baloon = /** @class */ (function () {
    function Baloon(imageUrl, imageExplode, baloonElement) {
        try {
            this.imageUrl = imageUrl;
            this.imageExplode = imageExplode;
            this.id = crypto.randomUUID();
            if (!baloonElement) {
                throw new Error("baloon element is not found");
            }
            this.baloonElement = baloonElement;
        }
        catch (error) {
            console.error(error);
        }
    }
    Baloon.prototype.renderBaloon = function () {
        this.baloonElement.src = this.imageUrl;
        this.baloonElement.classList.add('baloon');
    };
    Baloon.prototype.explodeBaloon = function () {
        this.baloonElement.src = this.imageExplode;
    };
    return Baloon;
}());
var baloon = document.getElementById("baloon");
if (!baloon) {
    throw new Error("no baloon");
}
var baloonOne = new Baloon("../baloon1", "../baloon2", baloon);
function main() {
    try {
        if (!baloon) {
            throw new Error("no baloon");
        }
        baloonOne.baloonElement.addEventListener("click", explosionEvent);
        baloonOne.renderBaloon();
    }
    catch (error) {
        console.error(error);
    }
}
function explosionEvent() {
    baloonOne.explodeBaloon();
    console.log(baloonOne);
}
function renderBaloon(baloonOne) {
    var baloon = document.createElement("img");
    baloon.src = baloonOne.imageUrl;
    baloon.id = baloonOne.id;
}
main();
