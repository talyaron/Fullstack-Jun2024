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

        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                this.handlePressKeyDown();
            }
        });
        // if(!this.isGameActive){
        //     this.startGame();
        // }

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
   

    // checkYposition(): void{
    //     try {
    //         if(!this.checkYposition) throw new Error
    //         console.log("checkYposition function is enable")
    //     } catch (error) {
    //         console.error("cannot find the function")
    //     }
    // }
    
    // updateYPosition(): void {
    //     try {
    //         if(!this.updateYPosition) throw new Error
    //         setInterval(() => {
    //             console.log("Bird's Y position is: ", this.getY());
    //         }, 1000);
    //         console.log("updateYPosition function is enable")
    //     } catch (error) {
    //         console.error("cannot find the function")
    //     }
    // }

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

                if (this.checkGameOver()){
                    clearInterval(gameloop);
                    this.initialPosition();
                    console.log('inloop', this.isGameActive)
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

    // פונקציה שאומרת כאשר המשחק נגמר אז מופיעה תמונה על המסך.
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


class Obsticals {
    private position: Position;
    private imgUrl: string;
    private imgUrlReversed: string;

    constructor() {
        this.imgUrl = "./dist/images/obsticals.png";
        this.imgUrlReversed = "./dist/images/obsticals-reversed.png";
    }

    render() {
        
    }

    move() {

    }
}

function main(): void {
    const bird1 = new Bird({ x: 300, y: 300 }, 0, 0.4);
    console.log("game has started");
    // bird1.updateYPosition();
    console.log("Bird's Y position is: ", bird1.getY());
}