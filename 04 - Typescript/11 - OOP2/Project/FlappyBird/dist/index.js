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
        this.gameLoop();
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
        }, 1000);
        setTimeout(function () {
            setInterval(function () {
                element.src = _this.flyingBirdImgUrl;
            }, 1000);
        }, 1000);
        return element;
    };
    Bird.prototype.renderBird = function () {
        console.log("in render");
        try {
            this.element = document.createElement('img');
            var container = document.getElementById('container');
            if (!container)
                throw new Error('Element not found');
            if (this.isFlying) {
                // this.moveWings();
            }
            else {
                this.element.src = this.imgUrl;
            }
            // this.element.id = this.id;
            this.element.style.position = 'absolute';
            this.element.style.left = this.position.x + 'px';
            this.element.style.top = this.position.y + 'px';
            this.element.classList.add('bird');
            container.appendChild(this.element);
        }
        catch (e) {
            console.error(e);
        }
    };
    Bird.prototype.handlePressKeyDown = function () {
        this.isFlying = true;
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
        this.position.y = this.position.y - 80;
        this.velocity = -5;
    };
    Bird.prototype.handlePressKeyUp = function () {
        // this.isFlying=false;
    };
    Bird.prototype.applyGravity = function () {
        this.velocity += this.gravity;
        this.position.y += this.velocity;
        if (this.position.y > window.innerHeight) {
            this.position.y = window.innerHeight;
            this.gameOver();
        }
        this.element.style.top = this.position.y + 'px';
    };
    Bird.prototype.gameLoop = function () {
        var _this = this;
        setInterval(function () {
            if (_this.isFlying) {
                // this.moveWings();
                _this.applyGravity();
            }
        }, 20);
    };
    Bird.prototype.gameOver = function () {
        var gameover = document.createElement("img");
        gameover.src = './dist/images/gameover.png';
    };
    return Bird;
}());
function main() {
    new Bird({ x: 300, y: 300 }, 0, 0.4);
}
;
