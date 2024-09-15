const character: string = './images/character1.png';

class Step {
private length: number;
private height: number;


constructor (length: number, height: number) {
    try {
    this.length= length;
    this.height=height;
}
 catch (error) {
    console.error(error);
}
}
}
