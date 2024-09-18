const character: string = './images/character1.png';

class Player {
    private positionX: number;
    private positionY: number;
    private imageUrl: string;
    private velocityY: number;
    private gravity: number;
    private element: HTMLImageElement | null;
    private isJumping: boolean;

    constructor(x: number, y: number, imageUrl: string, velocityY: number, gravity: number, isJumping: boolean) {
        this.positionX = x;
        this.positionY = y;
        this.imageUrl = './images/character1.png';
        this.velocityY = 0;
        this.gravity = 0.5;
        this.isJumping = false;
        this.element = null; // Initialize element as null
    }

    get getPositionX() {
        return this.positionX;
    }

    get getPositionY() {
        return this.positionY;
    }

    get getImageUrl() {
        return this.imageUrl;
    }

    set setPositionX(x: number) {
        this.positionX = x;
    }

    set setPositionY(y: number) {
        this.positionY = y;
    }

    set setImageUrl(image: string) {
        this.imageUrl = image;
    }

    renderPlayer(mainElement: HTMLDivElement) {
        try {
            if (!mainElement) throw new Error('Main element is required');
            const player = document.createElement('img');
            player.src = this.imageUrl;
            player.style.position = 'absolute';
            player.style.bottom = `${this.positionY}px`;
            player.style.left = `${this.positionX}vw`;
            player.classList.add('player');
            player.style.zIndex = '1';
            mainElement.appendChild(player);
            this.element = player; // Store reference to the player element

            this.addEventListeners();
            this.update();
        } catch (error) {
            console.error(error);
        }
    }

    private addEventListeners() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.moveRight();
            }
            if (event.key === 'ArrowLeft') {
                this.moveLeft();
            }
            if (event.key === ' ' || event.key === 'ArrowUp') {
                this.jump();
            }
        });
    }

    private moveRight() {
        this.positionX += 5;
        this.updatePosition();
    }

    private moveLeft() {
        this.positionX -= 5;
        this.updatePosition();
    }

    private jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.velocityY = 5;
        }
    }

    private update() {
        if (this.isJumping) {
            this.positionY += this.velocityY;
            this.velocityY -= this.gravity;

            if (this.positionY <= 0) {
                this.positionY = 0;
                this.isJumping = false;
            }
        }

        this.updatePosition();

        requestAnimationFrame(() => this.update());
    }

    private updatePosition() {
        if (this.element) {
            this.element.style.left = `${this.positionX}vw`;
            this.element.style.bottom = `${this.positionY}vh`;
        }
    }
}

class Step {
    private positionX: number;
    private positionY: number;
    private width: number;
    private height: number;

    constructor() {
        this.width = Math.floor(Math.random() * (40 - 10) + 10);
        this.height = 5;
        this.positionX = Math.floor(Math.random() * (60 - 8) + 8);
        this.positionY = 0;
    }

    get getPositionX() {
        return this.positionX;
    }

    get getPositionY() {
        return this.positionY;
    }

    get getWidth() {
        return this.width;
    }

    get getHeight() {
        return this.height;
    }

    set setPositionX(x: number) {
        this.positionX = x;
    }

    set setPositionY(y: number) {
        this.positionY = y;
    }

    set setWidth(width: number) {
        this.width = width;
    }

    set setHeight(height: number) {
        this.height = height;
    }

    renderStep(mainElement: HTMLDivElement) {
        const step = document.createElement('div');
        step.classList.add('stepDesign');
        step.style.width = `${this.width}vw`;
        step.style.position = 'absolute';
        step.style.height = `${this.height}vh`;
        step.style.top = `${this.positionY}vh`;
        step.style.left = `${this.positionX}vw`;
        step.style.setProperty('--initial-positionY', `${this.positionY}vh`);
        const animationDuration = 10;
        step.style.animationDuration = `${animationDuration}s`;
        step.addEventListener('animationend', () => {
            mainElement.removeChild(step);
        });
        mainElement.appendChild(step);
    }
}

const newPlayer = new Player(50, 0, character, 0, 0.5, false);

function main() {
    const mainElement = document.getElementById('IcyTower') as HTMLDivElement;
    newPlayer.renderPlayer(mainElement);

    function createStepWithDelay() {
        const newStep = createSteps();
        newStep.renderStep(mainElement);

        setTimeout(createStepWithDelay, 1500);
    }
    createStepWithDelay();
}

function createSteps(): Step {
    return new Step();
}

main();
