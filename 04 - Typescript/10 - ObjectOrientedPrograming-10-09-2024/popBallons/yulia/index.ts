class Balloon {
    
    imgUrl: string;
    id: string;
    element: HTMLImageElement;

    readonly imgBalloon = './dist/img/balloon.png';
    readonly imgExplosion = './dist/img/explosion.png';

    constructor() {
        this.imgUrl = this.imgBalloon;
        this.id = 'balloon';
        this.element = document.createElement('img');
        this.renderBalloon();
        this.element.addEventListener('click', (event: MouseEvent) => this.explode(event));
    }

    renderBalloon(): void {
        this.element.src = this.imgUrl;
        this.element.id = this.id;
        document.body.appendChild(this.element);
    }

    explode(event: MouseEvent): void {
        this.element.src = this.imgExplosion;
        this.element.removeEventListener('click', (event: MouseEvent) => this.explode(event));
    }
}

function main() {
    const balloon = new Balloon();
}

main();

