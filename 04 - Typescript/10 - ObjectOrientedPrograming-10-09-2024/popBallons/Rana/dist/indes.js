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
var baloonOne = new Balloon("./photos/boyorgirl1.png");
function renderBalloon() {
    try {
        balloon.src = baloonOne.image;
        balloon.id = baloonOne.id;
    }
    catch (error) {
        console.error(error);
    }
}
function explode() {
    balloon.src = "./photos/girl2.png";
}
function main() {
    renderBalloon();
    balloon.addEventListener("click", explode);
}
main();
