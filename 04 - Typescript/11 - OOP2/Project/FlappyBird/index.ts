interface Position {
    x: number;
    y: number;
}

class Bird {
    private id: string;
    private position: Position;
    private velocity: number;
    private imgUrl: string;
    private gravity: number;
    private element: HTMLImageElement;
    private flyingBirdImgUrl: string;
    isFlying: boolean;

    constructor(position: Position, velocity: number, gravity: number) {
        this.id = `-id${crypto.randomUUID()}`;
        this.position = position;
        this.imgUrl = "./dist/images/bird-down.png";
        this.flyingBirdImgUrl = "./dist/images/bird-up.png";
        this.gravity = gravity;
        this.velocity = velocity;
        this.renderBird();
        this.isFlying = false;

        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                this.handlePressKeyDown();
            }
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                this.handlePressKeyUp();
            }
        });
        this.gameLoop();
    }

    //GETTER
    getElement(): HTMLImageElement {
        return this.element;
    }

    //methods 

    initialPosition(): void {
        this.position.x = 40;
    }

    moveWings(): HTMLImageElement {
        const element = this.getElement();
        setInterval(() => {
            element.src = this.imgUrl;
        }, 1000);
        setTimeout(() => {
            setInterval(() => {
                element.src = this.flyingBirdImgUrl
            }, 1000);
        }, 1000);
        return element;
    }

    renderBird(): void {
        console.log("in render");
        try {
            this.element = document.createElement('img');
            const container = document.getElementById('container');
            if (!container) throw new Error('Element not found');

            if (this.isFlying) {
                // this.moveWings();
            } else {
                this.element.src = this.imgUrl;
            }
            // this.element.id = this.id;
            this.element.style.position = 'absolute';
            this.element.style.left = this.position.x + 'px';
            this.element.style.top = this.position.y + 'px';
            this.element.classList.add('bird');
            container.appendChild(this.element);

        } catch (e) {
            console.error(e);
        }
    }

    handlePressKeyDown(): void {
        this.isFlying = true;

        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
        this.position.y = this.position.y - 80;
        this.velocity = - 5;
    }

    handlePressKeyUp(): void {
        // this.isFlying=false;
    }

    applyGravity(): void {
        this.velocity += this.gravity;
        this.position.y += this.velocity;

        if (this.position.y > window.innerHeight) {
            this.position.y = window.innerHeight;
        }
        this.element.style.top = this.position.y + 'px';
    }

    gameLoop(): void {
        setInterval(() => {
            if (this.isFlying) {
                this.moveWings();
                this.applyGravity();
            }
        }, 20);
    }

    gameOver(): void {
        console.log('game-over');
        const container = document.getElementById("bg-img");
        if (!container) throw new Error("Ellement not found");

        const gameover: HTMLImageElement = document.createElement("img");
        gameover.src = './dist/images/gameOver.png';
        gameover.style.position = 'absolute';
        container.appendChild(gameover);
        this.element.classList.add('gameover');
 }
}

function main(): void {
    new Bird({ x: 300, y: 300 }, 0, 0.4);
};
