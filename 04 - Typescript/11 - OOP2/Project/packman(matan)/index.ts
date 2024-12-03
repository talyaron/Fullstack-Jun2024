interface position {
    x: number;
    y: number;
}

class Packmen {
    imgUrl: string;
    position: position;
    domElement: HTMLDivElement;

    constructor(imgUrl: string) {
        this.imgUrl = imgUrl;
    }

    renderPackmen(mainElement: HTMLDivElement, left: number, top: number) {
        this.domElement = document.createElement('div');
        this.domElement.classList.add('packmen');
        this.domElement.style.position = 'absolute';
        this.domElement.style.backgroundImage = `url(${this.imgUrl})`;
        this.domElement.style.backgroundSize = 'cover';
        this.domElement.style.width = '100px';
        this.domElement.style.height = '100px';
        this.domElement.style.left = `${left}px`;
        this.domElement.style.top = `${top}px`;

        mainElement.appendChild(this.domElement);

        document.addEventListener('keydown', (event) => {
            this.positionPackmen(event);
        });
    }

    positionPackmen(event: KeyboardEvent) {
        const step = 34;
        let left = parseInt(this.domElement.style.left);
        let top = parseInt(this.domElement.style.top);

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
    }

    movePackmen(left: number, top: number) {
        this.domElement.style.left = `${left}px`;
        this.domElement.style.top = `${top}px`;
    }

    checkCollision() {
        const packmanMove = this.domElement.getBoundingClientRect();
        const points = document.querySelectorAll('.point');

        points.forEach((point) => {
            const pointPosition = point.getBoundingClientRect();

            const isCollision = !(packmanMove.right < pointPosition.left ||
                                  packmanMove.left > pointPosition.right ||
                                  packmanMove.bottom < pointPosition.top ||
                                  packmanMove.top > pointPosition.bottom);

            if (isCollision) {
                point.remove();
            }

            

            
        });

        if(points.length === 0){
            winGame(); 
        

        }
    }




}


class EnemyPackmen extends Packmen {
    id: number;
    rightPosition: string = 'right';

    constructor(imgUrl: string) {
        super(imgUrl);
    }



    renderEnemyPackmen(mainElement: HTMLDivElement, left: number, top: number) {
        this.domElement = document.createElement('div');
        this.domElement.classList.add('enemy-packmen');
        this.domElement.style.position = 'absolute';
        this.domElement.style.backgroundImage = `url(${this.imgUrl})`;
        this.domElement.style.backgroundSize = 'cover';
        this.domElement.style.width = '100px';
        this.domElement.style.height = '100px';
        this.domElement.style.left = `${left}px`;
        this.domElement.style.top = `${top}px`;

        mainElement.appendChild(this.domElement);
    }

    startMoving() {
        this.id = setInterval(() => {
            this.randomPosition();
        }, 1000);

        this.id = setInterval(() => {
            this.stepEnemy();
        }, 100);
    }

    randomPosition() {
        const move = ['right', 'left', 'up', 'down'];
        this.rightPosition = move[Math.floor(Math.random() * move.length)];
    }

    stepEnemy() {
        const step = 50;
        let left = parseInt(this.domElement.style.left);
        let top = parseInt(this.domElement.style.top);

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
    }

    stopMovingEnemy() {
        if (this.id) {
            clearInterval(this.id);
        }
    }
}

class GameBoard {
    rows: number;
    columns: number;
    boardElement: HTMLDivElement;

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.boardElement = document.getElementById('game-board') as HTMLDivElement;
        this.createBoard();
    }

    createBoard() {
        const totalCells = this.rows * this.columns;
        this.boardElement.innerHTML = '<div class="cell"><div class="point"></div></div>'.repeat(totalCells);
    }
}

function showGameOver() {
    const message = document.createElement('div');
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
    const messageWinner = document.createElement('div');
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

function checkPositionTwoPlayers(packman: Packmen, enemy: EnemyPackmen) {
    const packmanRect = packman.domElement.getBoundingClientRect();
    const enemyRect = enemy.domElement.getBoundingClientRect();

    return !(packmanRect.right < enemyRect.left  ||
             packmanRect.left > enemyRect.right ||
             packmanRect.bottom < enemyRect.top ||
             packmanRect.top > enemyRect.bottom);
}

const mainElement = document.getElementById('game-board') as HTMLDivElement;
const board = new GameBoard(10, 10);

const packman = new Packmen('packman.png');
packman.renderPackmen(mainElement, 0, 0);

const enemy = new EnemyPackmen('enemy.png');
enemy.renderEnemyPackmen(mainElement, 300, 300);
enemy.startMoving();


const enemySecond = new EnemyPackmen('enemy.png');
enemySecond.renderEnemyPackmen(mainElement, 400, 400);
enemySecond.startMoving();

const enemyThird = new EnemyPackmen('enemy.png');
enemyThird.renderEnemyPackmen(mainElement, 500, 500);
enemyThird.startMoving();


setInterval(() => {
    if (checkPositionTwoPlayers(packman, enemy)) {
        showGameOver()
        enemy.stopMovingEnemy();
        enemySecond.stopMovingEnemy();
        enemyThird.stopMovingEnemy();

    }

  
}, 100);


