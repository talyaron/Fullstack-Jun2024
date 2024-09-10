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
function renderBaloon() {
    try {
        if (!baloon)
            throw new Error("no baloon");
        baloon.src = baloonOne.image;
        baloon.id = baloonOne.id;
        baloon.appendChild(baloon);
        if (!baloon) {
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
function main() {
    if (!baloon)
        throw new Error("no baloon");
    renderBaloon();
    baloon.addEventListener("click", explode);
}
main();
