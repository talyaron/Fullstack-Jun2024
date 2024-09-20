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
    isGameActive: boolean;
    isFlying: boolean;
    obsticle: Obstical;
    

    constructor(position: Position, velocity: number, gravity: number) {
        this.id = `-id${crypto.randomUUID()}`;
        this.position = position;
        this.imgUrl = "./dist/images/bird-down.png";
        this.flyingBirdImgUrl = "./dist/images/bird-up.png";
        this.gravity = gravity;
        this.velocity = velocity;
        this.renderBird();
        this.isFlying = false;
        this.isGameActive = false;
        this.obsticle = new Obstical();


        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                event.preventDefault();
                this.handlePressKeyDown();
            }
        });

        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                this.handlePressKeyDown();
            }
        });

        this.gameLoop();
    }

    //GETTERS
    getElement(): HTMLImageElement {
        return this.element;
    }
    
     // return the y of the bird.
     getY(): number {
        return this.position.y;
    }

    getGameActivity(): boolean {
        return this.isGameActive;
    }

    //SETTERS

    setGameActive(active: boolean) {
        this.isGameActive = active;
    }

    setIsFlying(isFlying: boolean) {
        this.isFlying = isFlying;
    }

    //METHODS 

    //position of X and Y initially
    initialPosition(): Position {
        const posY = 300;
        const posX = 300;
        this.position = {x: posX, y: posY};
        this.initialPositionRender(posX, posY);
        return this.position;
    }

    //render the bird's position in px
    initialPositionRender(positionX: number, positionY: number): void{
        this.element.style.left = positionX + 'px';
        this.element.style.top = positionY + 'px';
    } 

    //effect of moving the bird's wings
    moveWings(): HTMLImageElement {
        const element = this.getElement();
        setInterval(() => {
            element.src = this.imgUrl;
        }, 1000);
        setTimeout(() => {
            setInterval(() => {
                element.src = this.flyingBirdImgUrl
            }, 1000);
        }, 200);
        return element;
    }

    //render bird
    renderBird(): void {
        console.log("in render");
        try {
            this.element = document.createElement('img');
            const container = document.getElementById('container');
            if (!container) throw new Error('Element not found');

            if (this.isFlying) {
                this.moveWings();
            } else {
                this.element.src = this.imgUrl;
            }
            // this.element.id = this.id;
            this.element.style.position = 'absolute';
            this.element.style.zIndex = '999';
            this.element.style.left = this.position.x + 'px';
            this.element.style.top = this.position.y + 'px';
            this.element.classList.add('bird');
            container.appendChild(this.element);
            

        } catch (e) {
            console.error(e);
        }
    }

    startGame(): void {
        try {
            const startElement:HTMLElement = document.createElement('h1');
            const container = document.getElementById('container');
            if (!container) throw new Error('Element not found');

            // startElement.style.position = 'relative';
            startElement.textContent = `Press on 'Space' key to start the game`;
            startElement.classList.add('start');
            container.appendChild(startElement);
            
        } catch (e) {
            console.error(e);
        }
    }
 
    handlePressKeyDown(): void {
        console.log('in press', this.isGameActive);
        this.isGameActive = true;
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
        this.position.y = this.position.y - 80;
        this.velocity = - 5;
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
        const gameloop = setInterval(() => {
            if (this.isGameActive) {
                this.moveWings();
                this.applyGravity();
                if (this.checkGameOver()) {
                    clearInterval(gameloop);
                    this.initialPosition();
                    console.log('inloop', this.isGameActive);
                }
            }
        }, 20);
    }

    checkGameOver(): boolean {
        if (this.getY() >= window.innerHeight) {
            this.gameOver();
            return true;
        }
        return false;
    }

     gameOver(): void {
        this.setGameActive(false);
        console.log('in gameOver', this.isFlying);
        try {
            const gameoverdiv = document.getElementById("gameoverdiv");
            if (!gameoverdiv) throw new Error("Ellement not found");

            const gameoverimg: HTMLImageElement = document.createElement("img");
            gameoverimg.src = './dist/images/gameOver.png';
            gameoverimg.style.position = 'absolute';
            gameoverdiv.appendChild(gameoverimg);
            gameoverimg.classList.add("gameover-img");

            setTimeout(() => {
                gameoverimg.style.display = 'none';
            }, 2000);
            if (!this.getGameActivity()) {
                this.element.style.visibility = 'hidden';

                setTimeout(() => {
                    this.element.style.visibility = 'visible';
                    this.initialPosition;
                    this.setIsFlying(false);
                    window.location.assign(window.location.href);
                }, 2000);
                console.log("game not active", this.isGameActive);
            }
            
        
        }  catch (error) {
        console.error("img is not found")
        }
    }
};


class Obstical {
    private position: Position;
    private imgUrl: string;
    private moveInObsticale: boolean;
    private obsticalsVelocity: number;
    private elementTop: HTMLImageElement;
    private elementBottom: HTMLImageElement;

    constructor() {
        this.imgUrl = "./dist/images/obstical.png";
        this.moveInObsticale = false;
        this.obsticalsVelocity = 5; 
        this.position = this.initialPosition();

        console.log("initial position", this.position);
    }

    render(): HTMLElement[] {
        try {
            const obstacles: HTMLElement[] = [];
            
            const container = document.getElementById("obstical-1");  
            if (container) {
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
            }

        return obstacles;
        } catch (error) {
            console.error(error);
            return [];
        }

    }

    initialPosition(): Position {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return ({x: width, y: height /2});
    }

    // moveObstacles(obstacles: Obstacle[]) {
    //     obstacles.forEach(obstacle => {
    //         const currentLeftPosition = parseInt(obstacle.element.style.left, 10);
    //         const newLeftPosition = currentLeftPosition - obstacle.speed;
    //         obstacle.element.style.left = newLeftPosition + 'px';
    //      });
    //     }
    }

        
                // // עדכון מכשולים
                // const obstical = new Obstical();
                // const obstaclesList = obstical.render(); // Render and get obstacles
                // obstical.moveObstacles(obstaclesList); // Move obstacles
    

function main(): void {
    const bird1 = new Bird({ x: 300, y: 300 }, 0, 0.4);
    console.log("game has started");
    // bird1.updateYPosition();
    console.log("Bird's Y position is: ", bird1.getY());
    const obstical = new Obstical();
    obstical.render();
}