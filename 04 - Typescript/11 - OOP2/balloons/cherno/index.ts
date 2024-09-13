const balloonImg: string = './dist/imgs/balloon.png';
const explosionImg: string = './dist/imgs/boom.png';

var counter = 0;

interface Position { x: number; y: number };

class Balloon
{
    private imageurl: string;
    private id: string;
    postion: Position;
    element: HTMLImageElement;

    private popped: boolean;
    
    constructor()
    {
        this.postion = this.createRandomPosition();
        this.imageurl = balloonImg;
        this.id = `id-${crypto.randomUUID()}`;
        this.popped = false;

        this.initialRender();


        setInterval(() => {this.fly()}, 100);
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
        this.popped = true;
        this.handlePop();
    }

    createRandomPosition(): Position
    {
        const width = window.innerWidth - 200;
        const height = window.innerHeight - 200;
        return { x: Math.floor(Math.random() * width) + 100, y: height};
    }

    fly(): void
    {
        if (this.popped) return;
        
        this.postion.y -= 10;
        this.postion.x += Math.floor(Math.random() * 5) - 2;

        this.handleMove();
    }
    
    // handlers and renderers
    handleMove(): void
    {
        this.element.style.left = this.postion.x + 'px';
        this.element.style.top = this.postion.y + 'px';
    }

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
    setInterval(() => {new Balloon()}, 1000);
}
main();