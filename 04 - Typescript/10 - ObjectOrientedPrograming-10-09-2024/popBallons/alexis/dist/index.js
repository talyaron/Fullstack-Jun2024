var Baloon = /** @class */ (function () {
    function Baloon(image) {
        this.image = image;
        this.id = crypto.randomUUID();
    }
    return Baloon;
}());
var baloon = document.getElementById("baloon");
if (!baloon)
    throw new Error("no baloon");
var baloonOne = new Baloon("./dist/images/baloon1.png");
function main() {
    if (!baloon)
        throw new Error("no baloon");
    renderBaloon();
    baloon.addEventListener("click", explode);
}
function renderBaloon() {
    try {
        var baloon_1 = document.getElementById("baloon");
        if (!baloon_1)
            throw new Error("no baloon");
        baloon_1.src = baloonOne.image;
        baloon_1.id = baloonOne.id;
        baloon_1.appendChild(baloon_1);
        if (!baloon_1) {
            throw new Error("no baloon");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function explode(baloonOne) {
    if (!baloon)
        throw new Error("no baloon");
    baloon.src = "./dist/images/baloon2.png";
}
main();
