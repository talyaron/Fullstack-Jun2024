const character: string = './images/character1.png';

class Player {
    private positionX: number;
    private positionY : number;
    private imageUrl : string;

    constructor (x : number , y : number, imageUrl : string){
        this.positionX = x;
        this.positionY = y;
        this.imageUrl = './images/character1.png';
    }

    get getPositionX(){
        return this.positionX;
    }

    get getPositionY(){
        return this.positionY;
    }

    get getImageUrl(){
        return this.imageUrl;
    }

    set setPositionX(x : number){
        this.positionX = x;
    }

    set setPositionY(y : number){
        this.positionY = y;
    }

    set setImageUrl(image : string){
        this.imageUrl = image;
    }

    renderPlayer(mainElement: HTMLDivElement){
        try {
            if(!mainElement) throw new Error('Main element is required');
            const player = document.createElement('img');
            player.src = this.imageUrl;
            player.style.position = 'absolute';
            player.style.bottom = `${this.positionY}px`;
            player.style.left = `${this.positionX}vw`;
            player.classList.add('player')
            player.style.zIndex = '1';
            mainElement.appendChild(player);

        } catch (error) {
            
        }
    }
}

class Step {
private positionX : number;
private positionY : number;
private width: number;
private height: number;


constructor () {
    try {
    this.width= Math.floor(Math.random() * (40-10)+10);
    this.height=5;
    this.positionX = Math.floor(Math.random() * (60-8)+8);
    this.positionY = 0; 
    }catch (error) {
    console.error(error);
    }
}

get getPositionX(){
    return this.positionX;
}

get getPositionY(){
    return this.positionY;
}

get getWidth(){
    return this.width;
}

get getHeight(){
    return this.height;
}

set setPositionX(x : number){
    this.positionX = x;
}

set setPositionY(y : number){
    this.positionY = y;
}

set setWidth(width : number){
    this.width = width;
}

set setHeight(height : number){
    this.height = height;
}
renderStep(mainElement: HTMLDivElement){
    let positionChanged  :boolean = false;
    const step = document.createElement('div');
    /*if(this.positionX  + this.width > 1600){
        this.positionX = Math.floor(Math.random()*(87.5 - 63)+63);
        this.width = Math.floor(Math.random()* (20 - 16)+16);
        positionChanged = true;
    }
    if(this.positionX < 100){
        this.positionX = 101;
    }*/
    step.classList.add('stepDesign');
    step.style.width = `${this.width}vw`;
    step.style.position = 'absolute'
    step.style.height = `${this.height}vh`;
    step.style.top = `${this.positionY}vh`;
    step.style.left = `${this.positionX}vw`;
    console.log('Step positionX:', this.positionX, 'Step width:', this.width, positionChanged, this.positionY);
    step.style.setProperty('--initial-positionY', `${this.positionY}vh`);
    const animationDuration = 10; 
    step.style.animationDuration = `${animationDuration}s`;
    step.addEventListener('animationend', () => {
        mainElement.removeChild(step);
    });
    mainElement.appendChild(step);
}

}
const newPlayer = new Player(50,0,character);



function main(){
    const mainElement = document.getElementById('IcyTower') as HTMLDivElement;
    newPlayer.renderPlayer(mainElement);
    function createStepWithDelay() {
        const newStep = createSteps();
        newStep.renderStep(mainElement);
    
        setTimeout(createStepWithDelay, 1500);
    }
    createStepWithDelay();
}

function createSteps() : Step{
    return new Step();
}



main();