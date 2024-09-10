// Create class for Ballon.
// set and imageUrl for the ballon, and id and image for explosion of the ballon
// When the user clicks on the ballon, the ballon should explode and the explosion image should be shown.
// try to do it with OOP principles
var Ballon = /** @class */ (function () {
    function Ballon(id, baloonImageUrl, ballonExplosionImgUrl) {
        this.id = id;
        this.ballonImageUrl = baloonImageUrl;
        this.ballonExplosionImgUrl = ballonExplosionImgUrl;
    }
    return Ballon;
}());
function renderBallon(ballon) {
    try {
        var ballonDivElement = document.getElementById("ballons");
        if (!ballonDivElement)
            throw new Error("baloon's div isnt found.");
        var baloonAlive = document.createElement("img");
        baloonAlive.src = ballon.ballonImageUrl;
        baloonAlive.id = ballon.id;
        baloonAlive.addEventListener('click', function () { return ballonHandle(ballon); });
        ballonDivElement.appendChild(baloonAlive);
    }
    catch (error) {
        console.error(error);
    }
}
function ballonHandle(ballon) {
    try {
        var ballonElement = document.getElementById(ballon.id);
        if (!ballonElement)
            throw new Error("baloon's div isn't found.");
        ballonElement.src = ballon.ballonExplosionImgUrl;
    }
    catch (error) {
        console.error(error);
    }
}
var ballon1 = new Ballon(crypto.randomUUID(), "./photos/ballon.png", "./photos/explode.jpg");
renderBallon(ballon1);
