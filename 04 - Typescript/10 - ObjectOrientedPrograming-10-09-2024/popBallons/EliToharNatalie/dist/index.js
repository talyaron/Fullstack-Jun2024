var Ballon = /** @class */ (function () {
    function Ballon(id, ballonImgUrl, ExplosionUrl) {
        this.id = "id-" + crypto.randomUUID();
        this.ballonImgUrl = ballonImgUrl;
        this.ExplosionUrl = ExplosionUrl;
    }
    return Ballon;
}());
var ballon1 = new Ballon("", "./dist/images/balloon.png", "");
var ballon2 = new Ballon("", "./dist/images/balloon.png", "");
var ballon3 = new Ballon("", "./dist/images/balloon.png", "");
function main() {
    renderBallon(ballon2);
}
function renderBallon(ballon) {
    try {
        var pageElement = document.getElementById("page");
        if (!pageElement)
            throw new Error("no pag found");
        var ballonElement_1 = document.createElement("img");
        ballonElement_1.src = ballon.ballonImgUrl;
        ballonElement_1.id = ballon.id;
        ballonElement_1.addEventListener("click", function () {
            ballonElement_1.src = ballon.ExplosionUrl;
        });
        pageElement.appendChild(ballonElement_1);
    }
    catch (error) {
        console.log(error);
    }
}
function pop(event) { }
