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
        this.obsticle = new Obstical();
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
            this.element.style.zIndex = '999';
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
    Bird.prototype.gameOver = function () {
        var _this = this;
<<<<<<< HEAD
=======
        if (!this.isGameActive)
            return;
>>>>>>> b9f9fa17a0a1d90007b9a398df732edeb847ffc7
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
<<<<<<< HEAD
        this.moveInObsticale = false;
        this.obsticalsVelocity = 5;
        this.position = this.initialPosition();
        console.log("initial position", this.position);
=======
        this.obsticalsVelocity = 4;
        this.render();
>>>>>>> b9f9fa17a0a1d90007b9a398df732edeb847ffc7
    }
    Obstical.prototype.render = function () {
        try {
            var obstacles = [];
            var container = document.getElementById("obstical-1");
            if (container) {
<<<<<<< HEAD
                this.elementTop = document.createElement("img");
                this.elementTop.src = this.imgUrl;
                this.elementTop.classList.add("obstical-1");
                container.appendChild(this.elementTop);
                obstacles.push(this.elementTop);
                this.elementBottom = document.createElement("img");
                this.elementBottom.src = this.imgUrl;
                this.elementBottom.classList.add("obstical-2");
                container.appendChild(this.elementBottom);
                obstacles.push(this.elementBottom);
                this.elementTop.style.left = this.position.x + 'px';
                this.elementTop.style.top = this.position.y + 'px';
                this.elementBottom.style.left = this.position.x + 'px';
                this.elementBottom.style.top = this.position.y + 'px';
=======
                var elementTop = document.createElement("img");
                elementTop.src = this.imgUrl;
                elementTop.classList.add("obstical-1");
                container.appendChild(elementTop);
                var elementBottom = document.createElement("img");
                elementBottom.src = this.imgUrl;
                elementBottom.classList.add("obstical-2");
                container.appendChild(elementBottom);
                this.elements = [elementTop, elementBottom];
                this.setObstaclePositions();
>>>>>>> b9f9fa17a0a1d90007b9a398df732edeb847ffc7
            }
            return obstacles;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    };
    Obstical.prototype.initialPosition = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        return ({ x: width, y: height / 2 });
    };
    return Obstical;
}());
// // עדכון מכשולים
// const obstical = new Obstical();
// const obstaclesList = obstical.render(); // Render and get obstacles
// obstical.moveObstacles(obstaclesList); // Move obstacles
function main() {
    var bird1 = new Bird({ x: 300, y: 300 }, 0, 0.4);
    console.log("game has started");
    // bird1.updateYPosition();
    console.log("Bird's Y position is: ", bird1.getY());
    var obstical = new Obstical();
    obstical.render();
}
