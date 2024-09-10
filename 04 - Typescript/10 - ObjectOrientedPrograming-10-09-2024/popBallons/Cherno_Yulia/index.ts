const balloonImg: string = './dist/imgs/balloon.png';
const explosionImg: string = './dist/imgs/boom.png';

interface Position { x: number; y: number };

class Balloon
{
    imageurl: string;
    id: string;
    postion: Position;
    element: HTMLImageElement;
    
    constructor(imageurl: string)
    {
        this.imageurl = imageurl;
        this.id = `id-${crypto.randomUUID()}`;
        this.initialRender();

        this.element.addEventListener('click', (event: MouseEvent) => { this.pop(explosionImg);  });
    }

    // getters

    getElement(): HTMLImageElement
    {
        return this.element;
    }

    // methods

    pop(explosionImg: string): void
    {
        this.imageurl = explosionImg;
        this.handlePop();
    }
    
    // handlers and renderers

    handlePop(): void
    {
        this.element.src = this.imageurl;
    }

    initialRender(): void
    {
        this.element = document.createElement('img');
        this.element.src = this.imageurl;
        this.element.id = this.id;
        document.body.appendChild(this.element);
    }
}

function main()
{
    const balloon = new Balloon(balloonImg);
}
main();