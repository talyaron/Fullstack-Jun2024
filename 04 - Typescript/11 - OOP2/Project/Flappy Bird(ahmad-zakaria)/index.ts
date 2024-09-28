class Bird {
    public birdElement: HTMLElement;
    private position: number;
    private velocity: number;
    private gravity: number;

    constructor() {
        this.birdElement = document.getElementById('bird')!;
        this.position = window.innerHeight / 2;
        this.velocity = 0;
        this.gravity = 0.6;
        this.setUpControls();
    }

    getElement(): HTMLElement {
        return this.birdElement;
    }

    setUpControls() {
        window.addEventListener('keydown', () => {
            this.velocity = -10; 
        });
    }

    updatePosition() {
        this.velocity += this.gravity;
        this.position += this.velocity;

        if (this.position > window.innerHeight - 40) this.position = window.innerHeight - 40; 
        if (this.position < 0) this.position = 0;
        this.birdElement.style.top = `${this.position}px`;
    }
    getPosition(): number{
        return this.position;
    }
    setPosition (newPosition: number){
        this.position=newPosition;
        this.birdElement.style.top=`${this.position}px`
    }
}

class Pipe {
    private gameContainer: HTMLElement;
    public upperPipe: HTMLElement;
    public lowerPipe: HTMLElement;
    private gap: number;
    private pipePosition: number;
    private speed: number;
    private passed: boolean;
    private onScore: () => void;

    constructor(onScore: () => void, pipePosition: number) {
        this.gameContainer = document.querySelector('.game-container')!;
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

    generatePipes() {
        const totalHeight = window.innerHeight;
        const availableHeight = totalHeight - 40;
        const gapStart = Math.random() * (availableHeight - this.gap);

      
        this.upperPipe.style.height = `${gapStart}px`;
        this.upperPipe.style.top = `20px`;

      
        const lowerHeight = availableHeight - gapStart - this.gap;
        this.lowerPipe.style.height = `${lowerHeight}px`;
        this.lowerPipe.style.bottom = `20px`;
    }

    updatePosition() {
        this.pipePosition -= this.speed;
        this.upperPipe.style.left = `${this.pipePosition}px`;
        this.lowerPipe.style.left = `${this.pipePosition}px`;

        if (this.pipePosition < 50 && !this.passed) {
            this.passed = true;
            this.onScore();
        }

        if (this.pipePosition < -50) {
            this.pipePosition = window.innerWidth;
            this.passed = false;
            this.generatePipes();
        }
    }

    getUpperPipe(): HTMLElement {
        return this.upperPipe;
    }

    getLowerPipe(): HTMLElement {
        return this.lowerPipe;
    }
}

class Game {
    private bird: Bird;
    private pipes: Pipe[];
    private scoreElement: HTMLElement;
    private score: number;
    private pipeDistance: number;

    constructor() {
        this.bird = new Bird();
        this.pipes = [];
        this.scoreElement = document.getElementById('score')!;
        this.score = 0;
        this.pipeDistance = 350;
        this.startGame();
    }

    startGame() {
        this.pipes.push(new Pipe(() => this.incrementScore(), window.innerWidth));
        this.pipes.push(new Pipe(() => this.incrementScore(), window.innerWidth + this.pipeDistance));
        this.pipes.push(new Pipe(() => this.incrementScore(), window.innerWidth + this.pipeDistance * 2));

        setInterval(() => this.gameLoop(), 20);
    }

    incrementScore() {
        this.score += 1;
        this.scoreElement.textContent = `Score: ${this.score}`;
    }

    gameLoop() {
        this.bird.updatePosition();
        this.pipes.forEach(pipe => pipe.updatePosition());
        this.checkCollision()
    }
    checkCollision() {
        const birdRect = this.bird.getElement().getBoundingClientRect(); 
        const birdTop = birdRect.top;
        const birdBottom = birdRect.bottom;
        const birdLeft = birdRect.left;
        const birdRight = birdRect.right;

        
        if (birdTop <= 0) {
            alert("Game Over! The bird hit the top of the screen.");
            window.location.reload(); 
            this.bird.setPosition(window.innerHeight/2);
        }

        if (birdBottom >= window.innerHeight) {
            alert("Game Over! The bird hit the ground.");
            window.location.reload();
            this.bird.setPosition(window.innerHeight/2);
        }

        this.pipes.forEach(pipe => {
            const upperPipeRect = pipe.getUpperPipe().getBoundingClientRect();
            const lowerPipeRect = pipe.getLowerPipe().getBoundingClientRect();

            
            if (birdRight >= upperPipeRect.left && birdLeft <= upperPipeRect.right) {
               
                if (birdTop <= upperPipeRect.bottom) {
                    alert("Game Over! The bird hit the upper pipe..");
                    window.location.reload();
                    this.bird.setPosition(window.innerHeight/2);
                }
               
                if (birdBottom >= lowerPipeRect.top) {
                    alert("Game Over! The bird hit the lower pipe");
                    window.location.reload();
                    this.bird.setPosition(window.innerHeight/2);
                }
            }
        });
    }
}

window.onload = () => {
    const game = new Game();
};
