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
        this.speedX = 6;
        this.direction = 1; // תנועה ימינה ברירת מחדל
        window.addEventListener("keydown", function (event) {
            if (event.code === "Space") {
                event.preventDefault();
                _this.handlePressKeyDown();
            }
        });
        window.addEventListener("keydown", function (event) {
            if (event.code === "Space") {
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
    // Method to make the bird fly horizontally
    Bird.prototype.flyHorizontally = function () {
        this.position.x += this.speedX * this.direction;
        // Update direction and position to prevent going off-screen
        if (this.position.x >= window.innerWidth - this.element.width) {
            this.position.x = window.innerWidth - this.element.width;
            this.direction = -1; // Change direction to left
        }
        else if (this.position.x <= 0) {
            this.position.x = 0;
            this.direction = 1; // Change direction to right
        }
        // Update the bird's position in the DOM
        this.element.style.left = this.position.x + "px";
    };
    //render the bird's position in px
    Bird.prototype.initialPositionRender = function (positionX, positionY) {
        this.element.style.left = positionX + "px";
        this.element.style.top = positionY + "px";
    };
    Bird.prototype.checkCollisionWithObstacle = function () {
        var _this = this;
        var birdRect = this.element.getBoundingClientRect();
        var obstacles = this.obsticle.getObstacles();
        obstacles.forEach(function (obstacle) {
            var obstacleRect = obstacle.getBoundingClientRect();
            // הוספת פד לקוליז'ן כדי לשפר את ההרגשה
            var padding = 129; // המרחק שנוסיף לחישוב
            var hit = (birdRect.right > obstacleRect.left + padding &&
                birdRect.left < obstacleRect.right - padding &&
                birdRect.bottom > obstacleRect.top + padding &&
                birdRect.top < obstacleRect.bottom - padding);
            if (hit) {
                console.log("Collision detected!");
                _this.gameOver();
            }
        });
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
            this.element = document.createElement("img");
            var container = document.getElementById("container");
            if (!container)
                throw new Error("Element not found");
            this.element.src = this.imgUrl;
            this.element.style.position = "absolute";
            this.element.style.zIndex = "999";
            this.element.classList.add("bird");
            container.appendChild(this.element);
            this.initialPositionRender(this.position.x, this.position.y);
        }
        catch (e) {
            console.error(e);
        }
    };
    Bird.prototype.startGame = function () {
        try {
            var startElement = document.createElement("h1");
            var container = document.getElementById("container");
            if (!container)
                throw new Error("Element not found");
            // startElement.style.position = 'relative';
            startElement.textContent = "Press on 'Space' key to start the game";
            startElement.classList.add("start");
            container.appendChild(startElement);
        }
        catch (e) {
            console.error(e);
        }
    };
    Bird.prototype.handlePressKeyDown = function () {
        console.log("in press", this.isGameActive);
        this.isGameActive = true;
        this.position.y = Math.max(this.position.y - 80, 0); // מונע מהעוף לצאת מהמסך
        this.velocity = -5;
        this.element.style.top = this.position.y + "px";
    };
    Bird.prototype.applyGravity = function () {
        this.velocity += this.gravity;
        this.position.y += this.velocity;
        if (this.position.y > window.innerHeight - this.element.height) {
            this.position.y = window.innerHeight - this.element.height;
            this.velocity = 0;
        }
        this.element.style.top = this.position.y + "px";
    };
    Bird.prototype.gameLoop = function () {
        var _this = this;
        var gameloop = setInterval(function () {
            if (_this.isGameActive) {
                _this.moveWings();
                _this.applyGravity();
                _this.flyHorizontally();
                _this.obsticle.moveObstacles();
                _this.checkCollisionWithObstacle();
                console.log("Bird position: x=" + _this.position.x + ", y=" + _this.position.y);
                if (_this.checkGameOver()) {
                    clearInterval(gameloop);
                }
            }
        }, 20); // Adjust if necessary
    };
    Bird.prototype.checkGameOver = function () {
        if (this.position.y >= window.innerHeight - this.element.height) {
            this.gameOver();
            return true;
        }
        return false;
    };
    Bird.prototype.gameOver = function () {
        var _this = this;
        if (!this.isGameActive)
            return; // מניעת הפעלה כפולה של gameOver
        this.setGameActive(false);
        console.log("המשחק נגמר");
        try {
            var gameoverdiv = document.getElementById("gameoverdiv");
            if (!gameoverdiv)
                throw new Error("Element not found");
            var gameoverimg_1 = document.createElement("img");
            gameoverimg_1.src = "./dist/images/gameOver.png";
            gameoverimg_1.style.position = "absolute";
            gameoverimg_1.classList.add("gameover-img");
            gameoverdiv.appendChild(gameoverimg_1);
            setTimeout(function () {
                gameoverimg_1.style.display = "none";
                _this.element.style.visibility = "hidden";
                setTimeout(function () {
                    _this.element.style.visibility = "visible";
                    _this.initialPosition();
                    _this.setIsFlying(false);
                }, 2000);
            }, 2000);
        }
        catch (error) {
            console.error("Error in gameOver", error);
        }
    };
    return Bird;
}());
var Obstical = /** @class */ (function () {
    function Obstical() {
        this.elements = [];
        this.gapSize = 200;
        this.imgUrl = "./dist/images/obstical.png";
        this.obsticalsVelocity = 4; // מהירות המכשולים
        this.render();
    }
    Obstical.prototype.render = function () {
        try {
            var container = document.getElementById("obstical-1");
            if (container) {
                var elementTop = document.createElement("img");
                elementTop.src = this.imgUrl;
                elementTop.classList.add("obstical-1");
                container.appendChild(elementTop);
                var elementBottom = document.createElement("img");
                elementBottom.src = this.imgUrl;
                elementBottom.classList.add("obstical-2");
                container.appendChild(elementBottom);
                this.elements = [elementTop, elementBottom];
                this.setObstaclePositions(); // מקם את המכשולים בצורה נכונה
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    Obstical.prototype.setObstaclePositions = function () {
        var topHeight = Math.random() * (window.innerHeight - this.gapSize - 150); // Random height for top obstacle
        this.elements[0].style.height = topHeight + "px";
        this.elements[1].style.height = window.innerHeight - topHeight - this.gapSize + "px";
        this.elements[0].style.left = window.innerWidth + 50 + "px"; // Start position for the top obstacle
        this.elements[1].style.left = window.innerWidth + 50 + "px"; // Start position for the bottom obstacle
        this.elements[0].style.top = "0"; // Position of the top obstacle
        this.elements[1].style.bottom = "0"; // Position of the bottom obstacle
    };
    Obstical.prototype.moveObstacles = function () {
        var _this = this;
        this.elements.forEach(function (element) {
            var currentPos = parseFloat(element.style.left) || window.innerWidth;
            currentPos -= _this.obsticalsVelocity;
            // Reset position if off-screen
            if (currentPos < -element.offsetWidth) {
                _this.setObstaclePositions(); // Reset position
                currentPos = window.innerWidth + 50; // Start again from the right
            }
            element.style.left = currentPos + "px";
        });
    };
    Obstical.prototype.initialPosition = function () {
        return { x: window.innerWidth, y: window.innerHeight / 2 }; // Adjust initial position
    };
    Obstical.prototype.getObstacles = function () {
        return this.elements;
    };
    return Obstical;
}());
function main() {
    var bird1 = new Bird({ x: 300, y: 300 }, 0, 0.4);
    console.log("Game has started");
    console.log("Bird's initial position: ", bird1.getY());
    bird1.obsticle.getObstacles().forEach(function (obstacle, index) {
        console.log("Obstacle " + index + " initial position: left=" + obstacle.style.left + ", top=" + obstacle.style.top);
    });
}
