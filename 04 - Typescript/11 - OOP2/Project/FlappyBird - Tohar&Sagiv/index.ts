class Bird {
    private id: string;
    private position: number;
    private velocity: number;
    private imgUrl: string;
    private gravity: number;

    constructor(position: number) {
        this.id = `id${crypto.randomUUID()}`;
        this.position = position;
        this.imgUrl = "";
    }

    //methods 

}