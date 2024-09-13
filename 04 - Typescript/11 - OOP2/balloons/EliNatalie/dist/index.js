var Ballon = /** @class */ (function () {
    function Ballon(id, ballonImgUrl, ExplosionUrl, exploded) {
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
    var newBallon = new Ballon("", "./dist/images/balloon.png", "./dist/images/balloonEX.png", false);
    var randomX = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    newBallon.positionObj = { x: randomX, y: 0 };
    renderBallon(newBallon);
    //newBallon.positionObj = { x: randomX, y: 100 };
    setTimeout(function () {
        createNewBalloon();
    }, 1000);
    // console.log(newBallon.positionObj);
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
        ballonElement_1.draggable = false;
        ballonElement_1.src = ballon.ballonImgUrl;
        ballonElement_1.classList.add("ballon");
        ballonElement_1.style.bottom = "0";
        ballonElement_1.style.left = ballon.positionObj.x + "vw";
        ballonElement_1.id = ballon.id;
        ballonElement_1.addEventListener("click", function () {
            console.log(ballonElement_1.src);
            if (!ballon.exploded) {
                console.log("no else!");
                ballonElement_1.src = ballon.ExplosionUrl;
                ballonElement_1.classList.remove("ballon");
                ballon.exploded = true;
                setTimeout(function () {
                    removeBallon(ballonElement_1);
                }, 300);
            }
            else {
            }
        });
        pageElement.appendChild(ballonElement_1);
    }
    catch (error) {
        console.log(error);
    }
}
function removeBallon(ballonElement) {
    ballonElement.remove();
}
