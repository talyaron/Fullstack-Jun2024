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
            
        } catch (error) {
            
        }
    }
}

class Step {
private length: number;
private height: number;


constructor (length: number, height: number) {
    try {
    this.length= length;
    this.height=height;
    }catch (error) {
    console.error(error);
    }
    }



}
