var Balloon = /** @class */ (function () {
    function Balloon(image) {
        this.image = image;
        this.id = crypto.randomUUID();
    }
    return Balloon;
}());
var balloon = document.getElementById("balloon");
if (!balloon)
    throw new Error("No balloon");
console.log(Balloon);
var baloonOne = new Balloon("./photos/boyorgirl1.png");
function renderBalloon() {
    try {
        console.log(baloonOne);
        balloon.src = baloonOne.image;
        balloon.id = baloonOne.id;
    }
    catch (error) {
        console.error(error);
    }
}
function explode() {
    balloon.src = "./photos/girl2.png";
    console.log(explode);
}
function main() {
    renderBalloon();
    balloon.addEventListener("click", explode);
}
main();
