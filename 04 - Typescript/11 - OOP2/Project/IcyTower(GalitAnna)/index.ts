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
            player.style.bottom = `${this.positionX}px`;
            player.style.left = `${this.positionY}px`;
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
    this.width= Math.floor(Math.random() * (500-100)+100);
    this.height=60;
    }catch (error) {
    console.error(error);
    }
    }


renderStep(mainElement: HTMLDivElement){
    const step = document.createElement('steps');
    step.classList.add('stepDesign');
    step.style.width = `${this.width}px`;
    step.style.height = `${this.height}px`;
    step.style.bottom = `${Math.floor(Math.random() * (1080-280)+280)}px`;
    step.style.left = `${Math.floor(Math.random() * (1500-150)+150)}px`;
    mainElement.appendChild(step);
}
}
const newPlayer = new Player(0,912.5,character);
const newStep = new Step();
function main(){
    const mainElement = document.getElementById('IcyTower') as HTMLDivElement;
    newPlayer.renderPlayer(mainElement);
    newStep.renderStep(mainElement);
}

main();