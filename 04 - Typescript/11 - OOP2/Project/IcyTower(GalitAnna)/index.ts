const character: string = './images/character1.png';

class Player {
    private positionX: number;
    private positionY: number;
    private imageUrl: string;
    private velocityY: number;
    private gravity: number;
    private element: HTMLImageElement | null;
    private isJumping: boolean;
    private isPaused: boolean;

    constructor(x: number, y: number, imageUrl: string, velocityY: number, gravity: number, isJumping: boolean) {
        this.positionX = x;
        this.positionY = y;
        this.imageUrl = imageUrl;
        this.velocityY = velocityY;
        this.gravity = gravity;
        this.isJumping = isJumping;
        this.isPaused = false;
        this.element = null; 
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
            this.element = player;

            this.addEventListeners();
            this.update();
        } catch (error) {
            console.error(error);
        }
    }

    private addEventListeners() {
        window.addEventListener('keydown', (event) => {
            if (!this.isPaused) { 
                if (event.key === 'ArrowRight') {
                    this.moveRight();
                }
                if (event.key === 'ArrowLeft') {
                    this.moveLeft();
                }
                if (event.key === ' ' || event.key === 'ArrowUp') {
                    this.jump();
                }
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
        if (!this.isPaused) { 
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
    }

    private updatePosition() {
        if (this.element) {
            this.element.style.left = `${this.positionX}vw`;
            this.element.style.bottom = `${this.positionY}vh`;
        }
    }

    public pauseGame() {
        this.isPaused = true;
    }

    public resumeGame() {
        if (this.isPaused) {
            this.isPaused = false;
            this.update();
        }
    }

    public resetGame() {
        this.positionX = 50; 
        this.positionY = 0;
        this.velocityY = 0;
        this.isJumping = false;
        this.updatePosition();
    }
}

class Step {
    private positionX: number;
    private positionY: number;
    private width: number;
    private height: number;
    private element: HTMLDivElement | null;

    constructor() {
        this.width = Math.floor(Math.random() * (40 - 10) + 10);
        this.height = 5;
        this.positionX = Math.floor(Math.random() * (60 - 8) + 8);
        this.positionY = 0;
        this.element = null;
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
        step.style.animationPlayState = 'running';
        mainElement.appendChild(step);
        this.element = step;
    }

    public stopAnimation() {
        if (this.element) {
            this.element.style.animationPlayState = 'paused'; 
        }
    }

    public resumeAnimation() {
        if (this.element) {
            this.element.style.animationPlayState = 'running';
        }
    }
}

const newPlayer = new Player(50, 0, character, 0, 0.5, false);
let isGamePaused = false;
let stepIntervalId: number | null = null;
let steps: Step[] = [];

function main() {
    const mainElement = document.getElementById('IcyTower') as HTMLDivElement;
    newPlayer.renderPlayer(mainElement);
    createStepWithDelay();
}

function createSteps(): Step {
    return new Step();
}

function pauseGame() {
    isGamePaused = true;
    newPlayer.pauseGame();
    steps.forEach(step => step.stopAnimation());
    if (stepIntervalId !== null) {
        clearTimeout(stepIntervalId);
    }
}

function resumeGame() {
    isGamePaused = false;
    newPlayer.resumeGame();
    steps.forEach(step => step.resumeAnimation()); 
    createStepWithDelay();
}

function resetGame() {
  
    const mainElement = document.getElementById('IcyTower') as HTMLDivElement;
    const existingSteps = mainElement.querySelectorAll('.stepDesign');
    existingSteps.forEach(step => step.remove());

    newPlayer.resetGame();

    if (stepIntervalId !== null) {
        clearTimeout(stepIntervalId);
    }
    steps = []; 
    createStepWithDelay();
}

function createStepWithDelay() {
    if (!isGamePaused) {
        const mainElement = document.getElementById('IcyTower') as HTMLDivElement;
        const newStep = createSteps();
        newStep.renderStep(mainElement);
        steps.push(newStep);
    }
    stepIntervalId = setTimeout(createStepWithDelay, 1500);
}

window.onload = () => {
    const pauseButton = document.getElementById('pauseButton') as HTMLButtonElement;
    const startOverButton = document.getElementById('startOverButton') as HTMLButtonElement;

    pauseButton.addEventListener('click', () => {
        if (isGamePaused) {
            resumeGame();
            pauseButton.textContent = '||';
        } else {
            pauseGame();
            pauseButton.textContent = '▶';
        }
    });

    startOverButton.addEventListener('click', () => {
        resetGame();
        if (isGamePaused) {
            resumeGame();
            pauseButton.textContent = '||';
        }
    });

    main(); 
};
