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

    constructor (position: Position, velocity: number, gravity: number) {
        this.id = `-id${crypto.randomUUID()}`;
        this.position = position;
        this.imgUrl = "./dist/images/bird1.png";
        this.gravity = gravity;
        this.velocity = velocity;
        this.renderBird();
    }

    getElement(): HTMLImageElement
    {
        return this.element;
    }

    //methods 
    renderBird(): void {
        console.log("in render");
        try {
            this.element = document.createElement('img');
            this.element.src = this.imgUrl;
            this.element.id = this.id;
            this.element.style.position = 'absolute';
            this.element.style.left = this.position.x + '%';
            this.element.style.top = this.position.y + '%';
            this.element.classList.add('bird');
            document.body.appendChild(this.element);
            
        } catch (e) {
            console.error(e);
        }
    }


}

function main():void {
    new Bird({x: 50, y: 50}, 0, 0);
    console.log("i");
};
