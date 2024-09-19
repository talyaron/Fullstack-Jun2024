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
        var posY = 300;
        var posX = 300;
        this.position = { x: posX, y: posY };
        console.log("initialPosition: " + this.position.x, this.position.y);
        this.initialPositionRender(posX, posY);
        return this.position;
    };
    //render the bird's position in px
    Bird.prototype.initialPositionRender = function (positionX, positionY) {
        this.element.style.left = positionX + 'px';
        this.element.style.top = positionY + 'px';
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
        }, 200);
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
    // return the y of the bird.
    Bird.prototype.getY = function () {
        return this.position.y;
    };
    Bird.prototype.checkYposition = function () {
        try {
            if (!this.checkYposition)
                throw new Error;
            console.log("checkYposition function is enable");
        }
        catch (error) {
            console.error("cannot find the function");
        }
    };
    Bird.prototype.updateYPosition = function () {
        var _this = this;
        try {
            if (!this.updateYPosition)
                throw new Error;
            setInterval(function () {
                console.log("Bird's Y position is: ", _this.getY());
            }, 1000);
            console.log("updateYPosition function is enable");
        }
        catch (error) {
            console.error("cannot find the function");
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
        }
        this.element.style.top = this.position.y + 'px';
    };
    Bird.prototype.gameLoop = function () {
        var _this = this;
        var gameloop = setInterval(function () {
            if (_this.isFlying) {
                _this.moveWings();
                _this.applyGravity();
                _this.checkGameOver();
                if (_this.checkGameOver()) {
                    clearInterval(gameloop);
                    _this.initialPosition();
                }
            }
        }, 20);
    };
    Bird.prototype.checkGameOver = function () {
        if (this.getY() >= window.innerHeight) {
            this.gameOver();
            return true;
        }
        return false;
    };
    // פונקציה שאומרת כאשר המשחק נגמר אז מופיעה תמונה על המסך.
    Bird.prototype.gameOver = function () {
        try {
            var gameoverdiv = document.getElementById("gameoverdiv");
            if (!gameoverdiv)
                throw new Error("Ellement not found");
            var gameoverimg = document.createElement("img");
            gameoverimg.src = './dist/images/gameOver.png';
            gameoverimg.style.position = 'absolute';
            gameoverdiv.appendChild(gameoverimg);
            gameoverimg.classList.add("gameover-img");
        }
        catch (error) {
            console.error("img is not found");
        }
    };
    return Bird;
}());
function main() {
    var bird1 = new Bird({ x: 300, y: 300 }, 0, 0.4);
    console.log("game has started");
    bird1.updateYPosition();
    console.log("Bird's Y position is: ", bird1.getY());
}
