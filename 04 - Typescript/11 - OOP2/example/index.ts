interface Position {
    x: number;
    y: number;
}

class Ballon{
    
    private id: string;
    constructor(public imageUrl: string, private position: Position){
        try {
            this.imageUrl = imageUrl;
            this.position = position;
            this.id =`id-${crypto.randomUUID()}`;
        } catch (error) {
            console.error(error);
        }
    }
    //methods

    //explode ballon
    explode(){
        console.log(`Ballon ${this.id} exploded`);
    }

    // changeId(id: string){
    //     this.id = id;
    // }

    //setter and getters
    get positionObj(){
        return this.position;
    }
    getPositionObj2(){
        return this.position;
    }

    set positionObj(position: Position){
        this.position = position;
    }
    setPositionObj2(position: Position){
        this.position = position;
    }
}

const ballon = new Ballon('ballon.png', {x: 0, y: 0});
console.log(ballon);
ballon.changeId("id-123");
console.log(ballon.positionObj);

ballon.positionObj = {x: 10, y: 10}; //SETTER
ballon.setPositionObj2({x: 20, y: 20}); //method

console.log(ballon.positionObj); //GETTER
console.log(ballon.getPositionObj2()); //method