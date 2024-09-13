var Ballon = /** @class */ (function () {
    function Ballon(id, ballonImgUrl, ExplosionUrl, exploded, position) {
        this.id = "id-" + crypto.randomUUID();
        this.ballonImgUrl = ballonImgUrl;
        this.ExplosionUrl = ExplosionUrl;
        this.exploded = exploded;
    }
    Object.defineProperty(Ballon.prototype, "positionObj", {
        get: function () {
            return this.position;
        },
        set: function (position) {
            this.position = position;
        },
        enumerable: false,
        configurable: true
    });
    return Ballon;
}());
function createNewBalloon() {
    var newBallon = new Ballon("", "./dist/images/balloon.png", "./dist/images/balloonEX.png", false, { x: 0, y: 0 });
    renderBallon(newBallon);
    setTimeout(function () { createNewBalloon(); }, 1000);
    newBallon.positionObj = { x: 0, y: 100 };
}
function main() {
    createNewBalloon();
}
function renderBallon(ballon) {
    try {
        var pageElement = document.getElementById("page");
        if (!pageElement)
            throw new Error("no pag found");
        var ballonElement_1 = document.createElement("img");
        ballonElement_1.src = ballon.ballonImgUrl;
        ballonElement_1.classList.add("ballon");
        ballonElement_1.style.transform = "translate(0px " + ballon.position.y + "px )";
        ballonElement_1.id = ballon.id;
        ballonElement_1.addEventListener("click", function () {
            console.log(ballonElement_1.src);
            if (!ballon.exploded) {
                console.log("no else!");
                ballonElement_1.src = ballon.ExplosionUrl;
                ballonElement_1.classList.remove("ballon");
                ballon.exploded = true;
            }
            else {
                console.log("else!");
                ballonElement_1.src = ballon.ballonImgUrl;
                ballonElement_1.classList.add("ballon");
                ballon.exploded = false;
            }
        });
        ballonElement_1.addEventListener("mouseenter", function () {
            if (!ballon.exploded) {
                var randomNumber = Math.random();
                var numberBetween0And1000 = randomNumber * 1000;
                var randomIntegerBetween0And1000 = Math.floor(numberBetween0And1000);
                ballonElement_1.style.transform = "translate(" + randomIntegerBetween0And1000 + "px )";
            }
        });
        pageElement.appendChild(ballonElement_1);
    }
    catch (error) {
        console.log(error);
    }
}
function pop(event) { }
