var Bird = /** @class */ (function () {
    function Bird(position, velocity, gravity) {
        var _this = this;
        this.id = "-id" + crypto.randomUUID();
        this.position = position;
        this.imgUrl = "./dist/images/bird-down.png";
        this.flyingBirdImgUrl = "./dist/images/bird-up.png";
        this.gravity = gravity;
        this.velocity = velocity;
        this.renderBird();
        this.isFlying = false;
        window.addEventListener('keydown', function (event) {
            if (event.code === 'Space') {
                _this.handlePressKeyDown();
            }
        });
        window.addEventListener('keyup', function (event) {
            if (event.code === 'Space') {
                _this.handlePressKeyUp();
            }
        });
    }
    //GETTER
    Bird.prototype.getElement = function () {
        return this.element;
    };
    //methods 
    Bird.prototype.initialPosition = function () {
        this.position.x = 40;
    };
    Bird.prototype.moveWings = function () {
        var _this = this;
        var element = this.getElement();
        setInterval(function () {
            element.src = _this.imgUrl;
        }, 500);
        setTimeout(function () {
            setInterval(function () {
                element.src = _this.flyingBirdImgUrl;
            }, 500);
        }, 200);
        return element;
    };
    Bird.prototype.renderBird = function () {
        console.log("in render");
        try {
            this.element = document.createElement('img');
            if (!this.isFlying) {
                this.moveWings();
            }
            else {
                this.element.src = this.imgUrl;
            }
            // this.element.id = this.id;
            this.element.style.position = 'absolute';
            this.element.style.left = this.position.x + 'px';
            this.element.style.top = this.position.y + 'px';
            this.element.classList.add('bird');
            document.body.appendChild(this.element);
        }
        catch (e) {
            console.error(e);
        }
    };
    Bird.prototype.handlePressKeyDown = function () {
        console.log('pressed');
        this.position.y = this.position.y + 30;
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
    };
    return Bird;
}());
function main() {
    new Bird({ x: 300, y: 300 }, 0, 0);
}
;
