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

    constructor (position: Position, velocity: number, gravity: number) {
        this.id = `-id${crypto.randomUUID()}`;
        this.position = position;
        this.imgUrl = "./dist/images/bird-down.png";
        this.flyingBirdImgUrl = "./dist/images/bird-up.png";
        this.gravity = gravity;
        this.velocity = velocity;
        this.renderBird();
        this.isFlying = false;

        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Space'){
                this.handlePressKeyDown();
            }
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.code === 'Space'){
                this.handlePressKeyUp();
            }
        });
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
        }, 500);
        setTimeout(() => {
            setInterval(() => {
                element.src = this.flyingBirdImgUrl
            }, 500);
          }, 200);
        return element;
    }

    renderBird(): void {
        console.log("in render");
        try {
            this.element = document.createElement('img');
            if (!this.isFlying) {
                this.moveWings();
            } else {
                this.element.src = this.imgUrl;
            }
            // this.element.id = this.id;
            this.element.style.position = 'absolute';
            this.element.style.left = this.position.x + 'px';
            this.element.style.top = this.position.y + 'px';
            this.element.classList.add('bird');
            document.body.appendChild(this.element);
            
        } catch (e) {
            console.error(e);
        }
    }

    handlePressKeyDown(): void{
        console.log('pressed');

        this.position.y = this.position.y + 30;
        
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
    }

    // handlePressKeyUp(): void {
    //     this.position.y = this.position.y --;
        
    //     this.element.style.left = this.position.x + 'px';
    //     this.element.style.top = this.position.y + 'px';
    // }
}

function main():void {
    new Bird({x: 300, y: 300}, 0, 0);
};
