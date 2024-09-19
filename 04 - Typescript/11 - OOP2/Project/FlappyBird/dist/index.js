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
        this.isGameActive = false;
        window.addEventListener('keydown', function (event) {
            if (event.code === 'Space') {
                event.preventDefault();
                _this.handlePressKeyDown();
            }
        });
        window.addEventListener('keydown', function (event) {
            if (event.code === 'Space') {
                _this.handlePressKeyDown();
            }
        });
        // if(!this.isGameActive){
        //     this.startGame();
        // }
        this.gameLoop();
    }
    //GETTERS
    Bird.prototype.getElement = function () {
        return this.element;
    };
    // return the y of the bird.
    Bird.prototype.getY = function () {
        return this.position.y;
    };
    Bird.prototype.getGameActivity = function () {
        return this.isGameActive;
    };
    //SETTERS
    Bird.prototype.setGameActive = function (active) {
        this.isGameActive = active;
    };
    Bird.prototype.setIsFlying = function (isFlying) {
        this.isFlying = isFlying;
    };
    //METHODS 
    //position of X and Y initially
    Bird.prototype.initialPosition = function () {
        var posY = 300;
        var posX = 300;
        this.position = { x: posX, y: posY };
        this.initialPositionRender(posX, posY);
        return this.position;
    };
    //render the bird's position in px
    Bird.prototype.initialPositionRender = function (positionX, positionY) {
        this.element.style.left = positionX + 'px';
        this.element.style.top = positionY + 'px';
    };
    //effect of moving the bird's wings
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
    //render bird
    Bird.prototype.renderBird = function () {
        console.log("in render");
        try {
            this.element = document.createElement('img');
            var container = document.getElementById('container');
            if (!container)
                throw new Error('Element not found');
            if (this.isFlying) {
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
            container.appendChild(this.element);
        }
        catch (e) {
            console.error(e);
        }
    };
    Bird.prototype.startGame = function () {
        try {
            var startElement = document.createElement('h1');
            var container = document.getElementById('container');
            if (!container)
                throw new Error('Element not found');
            // startElement.style.position = 'relative';
            startElement.textContent = "Press on 'Space' key to start the game";
            startElement.classList.add('start');
            container.appendChild(startElement);
        }
        catch (e) {
            console.error(e);
        }
    };
    // checkYposition(): void{
    //     try {
    //         if(!this.checkYposition) throw new Error
    //         console.log("checkYposition function is enable")
    //     } catch (error) {
    //         console.error("cannot find the function")
    //     }
    // }
    // updateYPosition(): void {
    //     try {
    //         if(!this.updateYPosition) throw new Error
    //         setInterval(() => {
    //             console.log("Bird's Y position is: ", this.getY());
    //         }, 1000);
    //         console.log("updateYPosition function is enable")
    //     } catch (error) {
    //         console.error("cannot find the function")
    //     }
    // }
    Bird.prototype.handlePressKeyDown = function () {
        console.log('in press', this.isGameActive);
        this.isGameActive = true;
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
        this.position.y = this.position.y - 80;
        this.velocity = -5;
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
            if (_this.isGameActive) {
                _this.moveWings();
                _this.applyGravity();
                if (_this.checkGameOver()) {
                    clearInterval(gameloop);
                    _this.initialPosition();
                    console.log('inloop', _this.isGameActive);
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
        var _this = this;
        this.setGameActive(false);
        console.log('in gameOver', this.isFlying);
        try {
            var gameoverdiv = document.getElementById("gameoverdiv");
            if (!gameoverdiv)
                throw new Error("Ellement not found");
            var gameoverimg_1 = document.createElement("img");
            gameoverimg_1.src = './dist/images/gameOver.png';
            gameoverimg_1.style.position = 'absolute';
            gameoverdiv.appendChild(gameoverimg_1);
            gameoverimg_1.classList.add("gameover-img");
            setTimeout(function () {
                gameoverimg_1.style.display = 'none';
            }, 2000);
            if (!this.getGameActivity()) {
                this.element.style.visibility = 'hidden';
                setTimeout(function () {
                    _this.element.style.visibility = 'visible';
                    _this.initialPosition;
                    _this.setIsFlying(false);
                    window.location.assign(window.location.href);
                }, 2000);
                console.log("game not active", this.isGameActive);
            }
        }
        catch (error) {
            console.error("img is not found");
        }
    };
    return Bird;
}());
;
var Obstical = /** @class */ (function () {
    function Obstical() {
        this.imgUrl = "./dist/images/obstical.png";
        this.imgUrlReversed = "./dist/images/obstical-reversed.png";
        this.moveInObsticale = false;
    }
    Obstical.prototype.render = function () {
        try {
            //obstical 1 part 1
            var container = document.getElementById("obstical-1");
            if (!container)
                throw new Error("Element not found");
            var obstical1 = document.createElement("img");
            obstical1.src = this.imgUrl;
            obstical1.classList.add("obstical-1");
            container.appendChild(obstical1);
            //part 2 of obstical 1
            var obstical2 = document.createElement("img");
            obstical2.src = this.imgUrl;
            obstical2.classList.add("obstical-2");
            container.appendChild(obstical2);
            //obstical 2 part 1
            var container1 = document.getElementById("obstical-2");
            if (!container1)
                throw new Error("Element not found");
            var obstical3 = document.createElement("img");
            obstical3.src = this.imgUrl;
            obstical3.classList.add("obstical-3");
            container1.appendChild(obstical3);
            //part 2 of obstical 1
            var obstical4 = document.createElement("img");
            obstical4.src = this.imgUrl;
            obstical4.classList.add("obstical-4");
            container1.appendChild(obstical4);
        }
        catch (error) {
            console.error(error);
        }
    };
    Obstical.prototype.move = function () {
    };
    return Obstical;
}());
function main() {
    var bird1 = new Bird({ x: 200, y: 450 }, 0, 0.4);
    console.log("game has started");
    // bird1.updateYPosition();
    console.log("Bird's Y position is: ", bird1.getY());
    var obstical = new Obstical();
    obstical.render();
}
