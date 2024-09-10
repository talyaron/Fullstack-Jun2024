var Balloon = /** @class */ (function () {
    function Balloon(id, imageUrl, explosionImage) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.explosionImage = explosionImage;
    }
    // פונקציה להצגת הבלון
    Balloon.prototype.displayBalloon = function () {
        var _this = this;
        var balloon = document.getElementById('balloon');
        if (balloon) {
            var img_1 = document.createElement('img');
            img_1.src = this.imageUrl;
            img_1.id = this.id;
            img_1.style.cursor = 'pointer';
            // הוספת אירוע לחיצה על התמונה
            img_1.addEventListener('click', function () {
                _this.explodeBalloon(img_1);
            });
            balloon.appendChild(img_1);
        }
    };
    // פונקציה לפיצוץ הבלון
    Balloon.prototype.explodeBalloon = function (imgElement) {
        imgElement.src = this.explosionImage; // החלפת התמונה בתמונת הפיצוץ
    };
    return Balloon;
}());
// יצירת בלון והצגתו על המסך
var firstBalloon = new Balloon('balloon1', 'images/balloon.png', 'images/explosion.png');
firstBalloon.displayBalloon();
