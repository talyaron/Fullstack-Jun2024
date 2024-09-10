var Baloon = /** @class */ (function () {
    function Baloon(imageUrl) {
        this.imageUrl = imageUrl;
        this.id = "id - " + crypto.randomUUID();
    }
    Baloon.prototype.setImageURL = function (imageUrl) {
        this.imageUrl = imageUrl;
    };
    return Baloon;
}());
var annaBallon = new Baloon('./dist/image/Purple_Balloon.png');
var raamBallon = new Baloon('./dist/image/purpleblowup.png');
function renderNewBallon(baloon) {
    var baloonElement = document.createElement('img');
    baloonElement.src = baloon.imageUrl;
    baloonElement.id = baloon.id;
    baloonElement.style.top = 0 + 'px';
    baloonElement.style.left = 0 + 'px';
    document.body.appendChild(baloonElement);
    baloonElement.addEventListener('click', function () {
        baloon.setImageURL('./dist/image/purpleblowup.png');
        baloonElement.src = baloon.imageUrl;
    });
}
renderNewBallon(annaBallon);
console.log(annaBallon);
//renderNewBallon(raamBallon);
