interface Position {
    x: number;
    y: number;
}
class Ballon {
    imageUrl:string
    imageForExplosion:string
    private id?:string|undefined
    ballonElement:HTMLImageElement
    position: Position
    constructor(imageB:string,imageE:string){
        this.imageUrl=imageB;
        this.imageForExplosion=imageE;
        this.id=`id-${crypto.randomUUID()}`;
        this.position={x:0,y:0}
        try {
            const game = document.querySelector('#game');
            if(!game) throw new Error('there are no #game');
            this.ballonElement = document.createElement('img');
            this.ballonElement.classList.add('ballon')
            this.ballonElement.src=this.imageUrl;
            this.ballonElement.alt='ballon';
            this.ballonElement.id=`${this.id}`;
            this.ballonElement.style.position='absolute'
            this.ballonElement.style.top='900px'//864
            const randomPosition=Math.floor(Math.random() * (1600 - 1 + 1)) + 1;//1536
            this.ballonElement.style.left=`${randomPosition}px`
            this.ballonElement.addEventListener('click',() => this.explode())
            game.appendChild(this.ballonElement);
        } catch (error) {
            console.log(error)
        }
    }
    explode(){
        this.ballonElement.src=this.imageForExplosion;
        console.log('click')
    }
    move(){
        this.position={x:this.position.x,y:-555}
        this.ballonElement.style.top=`-555px`
    }
}

class Dragon extends Ballon{
    constructor (imageUrl:string){
        super(imageUrl,imageUrl)
    }
    move(){
        const randomPosition=Math.floor(Math.random() * (1600 - 1 + 1)) + 1;//1536
        this.position={x:randomPosition,y:-555}
        this.ballonElement.style.top=`-555px`
        this.ballonElement.style.left=`${randomPosition}px`

    }

}



const allBallon:Ballon[]=[];
var i=0;
function mainGame(){

    for(var i:number=0;i<1000;i++){
        if(i%2==0){
        const ballon = new Ballon('./ballon.jpeg','./explode.png');
        allBallon.push(ballon);
        }else{
            const dragon = new Dragon('./dragon.jpeg');
            allBallon.push(dragon);
        }
    }
    const intervalId = setInterval(newBallon, 1000);  
}
function newBallon(){
    allBallon[i].move();
    console.log('saa')
    i++;
}
