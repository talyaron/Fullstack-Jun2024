var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Packmen = /** @class */ (function () {
    function Packmen(imgUrl) {
        this.imgUrl = imgUrl;
    }
    Packmen.prototype.renderPackmen = function (mainElement, left, top) {
        var _this = this;
        this.domElement = document.createElement('div');
        this.domElement.classList.add('packmen');
        this.domElement.style.position = 'absolute';
        this.domElement.style.backgroundImage = "url(" + this.imgUrl + ")";
        this.domElement.style.backgroundSize = 'cover';
        this.domElement.style.width = '100px';
        this.domElement.style.height = '100px';
        this.domElement.style.left = left + "px";
        this.domElement.style.top = top + "px";
        mainElement.appendChild(this.domElement);
        document.addEventListener('keydown', function (event) {
            _this.positionPackmen(event);
        });
    };
    Packmen.prototype.positionPackmen = function (event) {
        var step = 34;
        var left = parseInt(this.domElement.style.left);
        var top = parseInt(this.domElement.style.top);
        switch (event.key) {
            case 'ArrowUp':
                top -= step;
                this.domElement.style.transform = 'rotate(90deg)';
                break;
            case 'ArrowDown':
                top += step;
                this.domElement.style.transform = 'rotate(-90deg)';
                break;
            case 'ArrowLeft':
                left -= step;
                this.domElement.style.transform = 'rotate(0deg)';
                break;
            case 'ArrowRight':
                left += step;
                this.domElement.style.transform = 'rotate(180deg)';
                break;
        }
        this.movePackmen(left, top);
        this.checkCollision();
    };
    Packmen.prototype.movePackmen = function (left, top) {
        this.domElement.style.left = left + "px";
        this.domElement.style.top = top + "px";
    };
    Packmen.prototype.checkCollision = function () {
        var packmanMove = this.domElement.getBoundingClientRect();
        var points = document.querySelectorAll('.point');
        points.forEach(function (point) {
            var pointPosition = point.getBoundingClientRect();
            var isCollision = !(packmanMove.right < pointPosition.left ||
                packmanMove.left > pointPosition.right ||
                packmanMove.bottom < pointPosition.top ||
                packmanMove.top > pointPosition.bottom);
            if (isCollision) {
                point.remove();
            }
        });
        if (points.length === 0) {
            winGame();
        }
    };
    return Packmen;
}());
var EnemyPackmen = /** @class */ (function (_super) {
    __extends(EnemyPackmen, _super);
    function EnemyPackmen(imgUrl) {
        var _this = _super.call(this, imgUrl) || this;
        _this.rightPosition = 'right';
        return _this;
    }
    EnemyPackmen.prototype.renderEnemyPackmen = function (mainElement, left, top) {
        this.domElement = document.createElement('div');
        this.domElement.classList.add('enemy-packmen');
        this.domElement.style.position = 'absolute';
        this.domElement.style.backgroundImage = "url(" + this.imgUrl + ")";
        this.domElement.style.backgroundSize = 'cover';
        this.domElement.style.width = '100px';
        this.domElement.style.height = '100px';
        this.domElement.style.left = left + "px";
        this.domElement.style.top = top + "px";
        mainElement.appendChild(this.domElement);
    };
    EnemyPackmen.prototype.startMoving = function () {
        var _this = this;
        this.id = setInterval(function () {
            _this.randomPosition();
        }, 1000);
        this.id = setInterval(function () {
            _this.stepEnemy();
        }, 100);
    };
    EnemyPackmen.prototype.randomPosition = function () {
        var move = ['right', 'left', 'up', 'down'];
        this.rightPosition = move[Math.floor(Math.random() * move.length)];
    };
    EnemyPackmen.prototype.stepEnemy = function () {
        var step = 50;
        var left = parseInt(this.domElement.style.left);
        var top = parseInt(this.domElement.style.top);
        switch (this.rightPosition) {
            case 'right':
                left += step;
                this.domElement.style.transform = 'rotate(180deg)';
                break;
            case 'left':
                left -= step;
                this.domElement.style.transform = 'rotate(0deg)';
                break;
            case 'up':
                top -= step;
                this.domElement.style.transform = 'rotate(90deg)';
                break;
            case 'down':
                top += step;
                this.domElement.style.transform = 'rotate(-90deg)';
                break;
        }
        left = Math.max(0, Math.min(left, window.innerWidth - 100));
        top = Math.max(0, Math.min(top, window.innerHeight - 100));
        this.movePackmen(left, top);
    };
    EnemyPackmen.prototype.stopMovingEnemy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    return EnemyPackmen;
}(Packmen));
var GameBoard = /** @class */ (function () {
    function GameBoard(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.boardElement = document.getElementById('game-board');
        this.createBoard();
    }
    GameBoard.prototype.createBoard = function () {
        var totalCells = this.rows * this.columns;
        this.boardElement.innerHTML = '<div class="cell"><div class="point"></div></div>'.repeat(totalCells);
    };
    return GameBoard;
}());
function showGameOver() {
    var message = document.createElement('div');
    message.innerText = 'GAME OVER';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'red';
    message.style.color = 'white';
    message.style.padding = '20px';
    document.body.appendChild(message);
}
function winGame() {
    var messageWinner = document.createElement('div');
    messageWinner.innerText = 'WINNER';
    messageWinner.style.position = 'fixed';
    messageWinner.style.top = '50%';
    messageWinner.style.left = '50%';
    messageWinner.style.transform = 'translate(-50%, -50%)';
    messageWinner.style.backgroundColor = 'green';
    messageWinner.style.color = 'white';
    messageWinner.style.padding = '20px';
    document.body.appendChild(messageWinner);
    enemy.stopMovingEnemy();
    enemySecond.stopMovingEnemy();
    enemyThird.stopMovingEnemy();
}
function checkPositionTwoPlayers(packman, enemy) {
    var packmanRect = packman.domElement.getBoundingClientRect();
    var enemyRect = enemy.domElement.getBoundingClientRect();
    return !(packmanRect.right < enemyRect.left ||
        packmanRect.left > enemyRect.right ||
        packmanRect.bottom < enemyRect.top ||
        packmanRect.top > enemyRect.bottom);
}
var mainElement = document.getElementById('game-board');
var board = new GameBoard(10, 10);
var packman = new Packmen('packman.png');
packman.renderPackmen(mainElement, 0, 0);
var enemy = new EnemyPackmen('enemy.png');
enemy.renderEnemyPackmen(mainElement, 300, 300);
enemy.startMoving();
var enemySecond = new EnemyPackmen('enemy.png');
enemySecond.renderEnemyPackmen(mainElement, 400, 400);
enemySecond.startMoving();
var enemyThird = new EnemyPackmen('enemy.png');
enemyThird.renderEnemyPackmen(mainElement, 500, 500);
enemyThird.startMoving();
setInterval(function () {
    if (checkPositionTwoPlayers(packman, enemy)) {
        showGameOver();
        enemy.stopMovingEnemy();
        enemySecond.stopMovingEnemy();
        enemyThird.stopMovingEnemy();
    }
}, 100);
