var Balloon = /** @class */ (function () {
    function Balloon(imageUrl, explosionUrl, position) {
        this.balloonElement = null;
        this.exploded = false;
        this.id = "id-" + crypto.randomUUID();
        this.imageUrl = imageUrl;
        this.explosionUrl = explosionUrl;
        this.position = position;
    }
    Balloon.prototype.setBalloonElement = function (balloonElement) {
        this.balloonElement = balloonElement;
    };
    Balloon.prototype.explode = function () {
        try {
            if (!this.balloonElement)
                throw new Error('Balloon element not found');
            if (this.exploded)
                return;
            this.exploded = true;
            var balloonImg = this.balloonElement;
            balloonImg.src = this.explosionUrl;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Balloon;
}());
var balloon1 = new Balloon('./image/baloon2.png', './image/bang.png', { x: 1000, y: 500 });
function renderBalloon(balloon) {
    try {
        var balloonElement = document.createElement('img');
        balloonElement.src = balloon.imageUrl;
        balloonElement.id = balloon.id;
        balloonElement.classList.add('balloon');
        balloonElement.style.position = 'absolute';
        balloonElement.style.left = balloon.position.x + 'px';
        balloonElement.style.top = balloon.position.y + 'px';
        balloonElement.addEventListener('click', function () {
            balloon.explode();
        });
        balloon.setBalloonElement(balloonElement);
        var field = document.getElementById('field');
        if (!field) {
            throw new Error('Field not found');
        }
        field.appendChild(balloonElement);
    }
    catch (error) {
        console.error(error);
    }
}
renderBalloon(balloon1);
