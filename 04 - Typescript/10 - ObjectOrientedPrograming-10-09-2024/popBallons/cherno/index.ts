const balloonImg: string = './dist/imgs/balloon.png';
const explosionImg: string = './dist/imgs/boom.png';

var counter = 0;

interface Position { x: number; y: number };

class Balloon
{
    imageurl: string;
    id: string;
    postion: Position;
    element: HTMLImageElement;
    
    constructor(position: Position)
    {
        this.postion = position;
        this.imageurl = balloonImg;
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
        counter++;
        renderCounter();
        this.element.src = this.imageurl;

        setTimeout(() => {this.element.remove()}, 2000);
    }

    initialRender(): void
    {
        this.element = document.createElement('img');
        this.element.src = this.imageurl;
        this.element.id = this.id;
        this.element.style.position = 'absolute';
        this.element.style.left = this.postion.x + 'px';
        this.element.style.top = this.postion.y + 'px';
        document.body.appendChild(this.element);
    }
}

function getRandomPosition(): Position
{
    const width = window.innerWidth - 200;
    const height = window.innerHeight - 200;
    return { x: Math.floor(Math.random() * width) + 100, y: Math.floor(Math.random() * height) + 100};
}

function renderCounter()
{
    try
    {
        const counterElement = document.getElementById('counter');
        if (!counterElement) throw new Error('Counter element not found');
        counterElement.textContent = `Popped balloons: ${counter}`;
    }
    catch (error)
    {
        console.error(error);
    }
}

function main()
{
    setInterval(() => {new Balloon(getRandomPosition())}, 1000);
}
main();