
class Ballon {
    imageUrl:string
    imageForExplosion:string
    id?:string|undefined
    ballonElement:HTMLImageElement
    constructor(imageB:string,imageE:string){
        this.imageUrl=imageB;
        this.imageForExplosion=imageE;
        this.id=`id-${crypto.randomUUID()}`;
        try {
            const game = document.querySelector('#game');
            if(!game) throw new Error('there are no #game');
            this.ballonElement = document.createElement('img');
            this.ballonElement.src=this.imageUrl;
            this.ballonElement.alt='ballon';
            this.ballonElement.id=`${this.id}`;
            this.ballonElement.addEventListener('click',() => this.explode())
            game.appendChild(this.ballonElement);
        } catch (error) {
            console.log(error)
        }
    }
    explode(){
        this.ballonElement.src=this.imageForExplosion;
    }
}



const ballon1= new Ballon('./ballon.jpeg','./explode.png');
const ballon2= new Ballon('./ballon.jpeg','./explode.png');

function mainGame(){
    for(var i:number=0;i<1000;i++){
        const ballon = new Ballon('./ballon.jpeg','./explode.png');
    }
    
}