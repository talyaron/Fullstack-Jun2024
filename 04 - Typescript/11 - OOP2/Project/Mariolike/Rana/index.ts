interface Position {
    x: number;
    y: number;
}

class Player {
    private id: string;
    playerElement: HTMLDivElement;
    position: Position;
    imageRight: string;
    imageLeft: string;
    currentDirection: 'right' | 'left';

    constructor(imageRight: string, imageLeft: string) {
        this.id = crypto.randomUUID();
        this.imageRight = imageRight;
        this.imageLeft = imageLeft;
        this.position = { x: 0, y: 160 };  
        this.playerElement = document.createElement("div");
        this.playerElement.classList.add("player");  
        this.currentDirection = 'right';  
    }

    renderPlayer(mainElement: HTMLDivElement) {
        if (!mainElement) {
            throw new Error("No main element provided for player rendering");

        }

        
        this.playerElement.style.position = "relative";
        this.playerElement.style.left = `${this.position.x}px`;
        this.playerElement.style.top = `${this.position.y}px`;
        this.playerElement.style.backgroundImage = `url(${this.currentDirection === 'right' ? this.imageRight : this.imageLeft})`;
        this.playerElement.style.width = "130px";  
        this.playerElement.style.height = "130px";

        
        if (!mainElement.contains(this.playerElement)) {
            mainElement.appendChild(this.playerElement);
        }
    }

    move(direction: 'left' | 'right' | 'up' | 'down') {
        const speed = 10;  

        switch (direction) {
            case 'left':
                this.position.x -= speed;
                this.currentDirection = 'left';
                break;
            case 'right':
                this.position.x += speed;
                this.currentDirection = 'right'; 
                break;
            case 'up':
                this.position.y -= speed;
                break;
            case 'down':
                this.position.y += speed;
                break;
        }

        
        this.renderPlayer(document.getElementById("main") as HTMLDivElement);
    }
}


class Mushroom {
    enemyElement: HTMLDivElement;
    position: Position;
    speedX: number;
    speedY: number;
    directionX: number;
    directionY: number;

    constructor(speedX: number, speedY: number, startX: number, startY: number) {
        this.position = { x: startX, y: startY };
        this.speedX = speedX;
        this.speedY = speedY;
        this.directionX = Math.random() < 0.5 ? 1 : -1;
        this.directionY = Math.random() < 0.5 ? 1 : -1;
        this.enemyElement = document.createElement("div");
        this.enemyElement.classList.add("mushroom");
        this.renderMushroom(document.getElementById("main") as HTMLDivElement);
    }

    renderMushroom(mainElement: HTMLDivElement) {
        this.enemyElement.style.position = "absolute";
        this.enemyElement.style.left = `${this.position.x}px`;
        this.enemyElement.style.top = `${this.position.y}px`;
        this.enemyElement.style.width = "50px";
        this.enemyElement.style.height = "50px";
        this.enemyElement.style.backgroundImage = "url('./photos/mushroom.png')";
        this.enemyElement.style.backgroundSize = "contain";
        this.enemyElement.style.backgroundRepeat = "no-repeat";
        if (!mainElement.contains(this.enemyElement)) {
            mainElement.appendChild(this.enemyElement);
        }
    }

    move() {
        this.position.x += this.speedX * this.directionX;
        this.position.y += this.speedY * this.directionY;

        // אם הפטריה יוצאת מהמסך, מחזירים אותה להתחלה
        if (this.position.x < 0 || this.position.x > window.innerWidth) {
            this.directionX *= -1;
        }
        if (this.position.y < 0 || this.position.y > window.innerHeight) {
            this.directionY *= -1;
        }

        this.renderMushroom(document.getElementById("main") as HTMLDivElement);
    }
}


const mainElement = document.getElementById("main") as HTMLDivElement;
document.body.style.backgroundImage = "url(./photos/back.jpg)";
document.body.style.backgroundAttachment = "fixed";
const mario = new Player("./photos/right.png", "./photos/left.png");
mario.renderPlayer(mainElement);


const mushrooms: Mushroom[] = [
    new Mushroom(2, 2, 800, 300),
    new Mushroom(2, 2, 800, 300),
    new Mushroom(2, 2, 800, 300),
    new Mushroom(1.5, 1.5, 1050, 300),
    new Mushroom(1.5, 1.5, 1100, 300),
    new Mushroom(1, 1, 1200, 300),
    new Mushroom(2, 2, 800, 300),
    new Mushroom(1.5, 1.5, 1300, 300),
    new Mushroom(1.5, 1.5, 1500, 300),
    new Mushroom(1, 1, 1200, 300),
    new Mushroom(1, 1, 1200, 300),
    new Mushroom(2, 1, 1400, 300),
    new Mushroom(2, 1, 1400, 300),
];


function checkCollisions() {
    mushrooms.forEach(mushroom => {
        const playerRect = mario.playerElement.getBoundingClientRect();
        const mushroomRect = mushroom.enemyElement.getBoundingClientRect();

        if (
            playerRect.top < mushroomRect.bottom &&
            playerRect.bottom > mushroomRect.top &&
            playerRect.left < mushroomRect.right &&
            playerRect.right > mushroomRect.left
        ) {
            alert("Game Over! You touched a mushroom!");
            window.location.reload();
        }
    });
}


setInterval(() => {
    mushrooms.forEach(mushroom => mushroom.move());
    checkCollisions(); 
}, 20);


window.addEventListener('keydown', (event: KeyboardEvent) => {
    switch (event.key) {
        case 'ArrowLeft':
            mario.move('left');
            break;
        case 'ArrowRight':
            mario.move('right');
            break;
        case 'ArrowUp':
            mario.move('up');
            break;
        case 'ArrowDown':
            mario.move('down');
            break;
    }
});
