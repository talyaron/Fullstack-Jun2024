interface Position {
    x: number;
    y: number;
}
const balloons: Balloon[] = [];

class Balloon {
    protected domElement: HTMLDivElement;
    private explosionUrl: string
    protected position: Position;
    private id: string;
    constructor(private imageUrl: string, protected initialHeight?: number) {
        try {
            this.position.x = initialHeight || 50;
            this.imageUrl = imageUrl;
            this.id = `id-${crypto.randomUUID()}`;
            this.explosionUrl = './explosion.png';
        } catch (error) {
            console.error(error);
        }
    }
    //methods

    //explode ballon


    renderBallon(mainElement: HTMLDivElement) {
        try {
            if (!mainElement) throw new Error('Main element is required');

            this.position = this.createRandomPosition();

            this.domElement = document.createElement('div');
            this.domElement.classList.add('balloon');
            this.domElement.style.position = 'absolute';
            this.domElement.style.left = `${this.position.x}%`;
            this.domElement.style.top = `${this.position.y}%`;
            this.domElement.style.backgroundImage = `url(${this.imageUrl})`;
            this.domElement.style.width = '10%';
            this.domElement.style.height = '10%';
            this.domElement.style.backgroundSize = 'contain';
            this.domElement.style.backgroundRepeat = 'no-repeat';
            this.domElement.addEventListener('click', () => {
                this.explode();
            });
            this.domElement.addEventListener('transitionend', () => {
               
                this.explode();
            });




            mainElement.appendChild(this.domElement);
        } catch (error) {
            console.error(error);
        }


    }
    createRandomPosition() {
        return {
            x: Math.random() * 100,
            y: this.initialHeight
        }
    }
    get getPosition() {
        return this.position;
    }

    flyBalloon() {
        this.domElement.style.top = "-20px";
    }

  

    explode() {
        this.imageUrl = this.explosionUrl;
        this.domElement.style.backgroundImage = `url(${this.imageUrl})`;
        setTimeout(() => {
            this.domElement.remove();
        }, 3000);
    }

    get balloonId() {
        return this.id;
    }

}





setInterval(() => {
    const ballon = new Balloon('./balloon.png');
    // console.log(checkIfBallonHasSamePosition(ballon));
    balloons.push(ballon);
    ballon.renderBallon(document.querySelector("#balloons") as HTMLDivElement);
    setTimeout(() => {
        ballon.flyBalloon();
        removeBallonFromList(ballon.balloonId);
    }, 20);
}, 1000);

function removeBallonFromList(id: string) {
    const index = balloons.findIndex(b => b.balloonId === id);
    if (index !== -1) {
        balloons.splice(index, 1);
    }
}

class Dragon extends Balloon{
    constructor(imageUrl: string, initialHeight: number){
        super(imageUrl); //take the constructor from the parent class
    }

    moveLeft(){
        this.position.x -= 10;
        this.domElement.style.left = `${this.position.x}%`;
    }
    moveRight(){
        this.position.x += 10;
        this.domElement.style.left = `${this.position.x}%`;
    }

    
}

const dragon = new Dragon('./dragon.png');
dragon.renderBallon(document.querySelector("#balloons") as HTMLDivElement);

console.log("test 2")
document.body.addEventListener('keydown', (e) => {
    console.log("test")
    if(e.key === 'ArrowLeft'){
        console.log("move left");
        dragon.moveLeft();
    }
    if(e.key === 'ArrowRight'){
        console.log("move right");
        dragon.moveRight();
    }
})
