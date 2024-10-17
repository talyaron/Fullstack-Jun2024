var Bird = /** @class */ (function () {
    function Bird() {
        this.birdElement = document.getElementById('bird');
        this.position = window.innerHeight / 2;
        this.velocity = 0;
        this.gravity = 0.6;
        this.setUpControls();
    }
    Bird.prototype.getElement = function () {
        return this.birdElement;
    };
    Bird.prototype.setUpControls = function () {
        var _this = this;
        window.addEventListener('keydown', function () {
            _this.velocity = -10;
        });
    };
    Bird.prototype.updatePosition = function () {
        this.velocity += this.gravity;
        this.position += this.velocity;
        if (this.position > window.innerHeight - 40)
            this.position = window.innerHeight - 40;
        if (this.position < 0)
            this.position = 0;
        this.birdElement.style.top = this.position + "px";
    };
    Bird.prototype.getPosition = function () {
        return this.position;
    };
    Bird.prototype.setPosition = function (newPosition) {
        this.position = newPosition;
        this.birdElement.style.top = this.position + "px";
    };
    return Bird;
}());
var Pipe = /** @class */ (function () {
    function Pipe(onScore, pipePosition) {
        this.gameContainer = document.querySelector('.game-container');
        this.upperPipe = document.createElement('div');
        this.lowerPipe = document.createElement('div');
        this.gap = 150;
        this.pipePosition = pipePosition;
        this.speed = 2;
        this.passed = false;
        this.onScore = onScore;
        this.upperPipe.classList.add('pipe', 'pipe-top');
        this.lowerPipe.classList.add('pipe', 'pipe-bottom');
        this.generatePipes();
        this.gameContainer.appendChild(this.upperPipe);
        this.gameContainer.appendChild(this.lowerPipe);
    }
    Pipe.prototype.generatePipes = function () {
        var totalHeight = window.innerHeight;
        var availableHeight = totalHeight - 40;
        var gapStart = Math.random() * (availableHeight - this.gap);
        this.upperPipe.style.height = gapStart + "px";
        this.upperPipe.style.top = "20px";
        var lowerHeight = availableHeight - gapStart - this.gap;
        this.lowerPipe.style.height = lowerHeight + "px";
        this.lowerPipe.style.bottom = "20px";
    };
    Pipe.prototype.updatePosition = function () {
        this.pipePosition -= this.speed;
        this.upperPipe.style.left = this.pipePosition + "px";
        this.lowerPipe.style.left = this.pipePosition + "px";
        if (this.pipePosition < 50 && !this.passed) {
            this.passed = true;
            this.onScore();
        }
        if (this.pipePosition < -50) {
            this.pipePosition = window.innerWidth;
            this.passed = false;
            this.generatePipes();
        }
    };
    Pipe.prototype.getUpperPipe = function () {
        return this.upperPipe;
    };
    Pipe.prototype.getLowerPipe = function () {
        return this.lowerPipe;
    };
    return Pipe;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.bird = new Bird();
        this.pipes = [];
        this.scoreElement = document.getElementById('score');
        this.score = 0;
        this.pipeDistance = 350;
        this.startGame();
    }
    Game.prototype.startGame = function () {
        var _this = this;
        this.pipes.push(new Pipe(function () { return _this.incrementScore(); }, window.innerWidth));
        this.pipes.push(new Pipe(function () { return _this.incrementScore(); }, window.innerWidth + this.pipeDistance));
        this.pipes.push(new Pipe(function () { return _this.incrementScore(); }, window.innerWidth + this.pipeDistance * 2));
        setInterval(function () { return _this.gameLoop(); }, 20);
    };
    Game.prototype.incrementScore = function () {
        this.score += 1;
        this.scoreElement.textContent = "Score: " + this.score;
    };
    Game.prototype.gameLoop = function () {
        this.bird.updatePosition();
        this.pipes.forEach(function (pipe) { return pipe.updatePosition(); });
        this.checkCollision();
    };
    Game.prototype.checkCollision = function () {
        var _this = this;
        var birdRect = this.bird.getElement().getBoundingClientRect();
        var birdTop = birdRect.top;
        var birdBottom = birdRect.bottom;
        var birdLeft = birdRect.left;
        var birdRight = birdRect.right;
        if (birdTop <= 0) {
            alert("Game Over! The bird hit the top of the screen.");
            window.location.reload();
            this.bird.setPosition(window.innerHeight / 2);
        }
        if (birdBottom >= window.innerHeight) {
            alert("Game Over! The bird hit the ground.");
            window.location.reload();
            this.bird.setPosition(window.innerHeight / 2);
        }
        this.pipes.forEach(function (pipe) {
            var upperPipeRect = pipe.getUpperPipe().getBoundingClientRect();
            var lowerPipeRect = pipe.getLowerPipe().getBoundingClientRect();
            if (birdRight >= upperPipeRect.left && birdLeft <= upperPipeRect.right) {
                if (birdTop <= upperPipeRect.bottom) {
                    alert("Game Over! The bird hit the upper pipe..");
                    window.location.reload();
                    _this.bird.setPosition(window.innerWidth / 2);
                }
                if (birdBottom >= lowerPipeRect.top) {
                    alert("Game Over! The bird hit the lower pipe");
                    window.location.reload();
                    _this.bird.setPosition(window.innerWidth / 2);
                }
            }
        });
    };
    return Game;
}());
window.onload = function () {
    var game = new Game();
};
