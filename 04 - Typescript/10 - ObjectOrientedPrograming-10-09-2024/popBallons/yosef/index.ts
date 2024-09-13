const boom : string = 'https://pic1.yitweb.co.il/picserver/mynet/crop_images/2023/11/13/HJNPSnkNa/HJNPSnkNa_0_0_640_360_0_large.jpg';
const no_boom : string = 'https://cdn.pixabay.com/photo/2012/04/05/01/39/balloon-25734_1280.png';

interface position {x: number; y: number};

class Ballon {
    id: number;
    clicked: boolean;
    element: HTMLImageElement;
    position: position;
    

constructor (imageURL: string)
{
    this.id = Math.random();
    this.element = document.createElement('img');
    this.element.src = no_boom;
    this.position = {x: Math.random() * 1000, y:600};
    this.renderNewBallon()
    this.element.addEventListener('click', (event: MouseEvent) => {this.explode_ballon()})
 }


explode_ballon (){
    this.element.src = boom;
}



renderNewBallon() :  void {
    const box = document.getElementById('box');
    if (!box) throw new Error('Box not found.');

    this.element = document.createElement('img');
    this.element.src = no_boom;
    this.element.id = String(this.id);
    this.element.style.left = `${this.position.x}px`;
    this.element.style.top = `${this.position.y}px`;
    this.element.style.position = 'absolute';
    box.appendChild(this.element);
} 
}

function main2() : void {
    try {
        const ballon = new Ballon(boom);
        

    

}
catch (error) {
    console.error('An error occurred:', error);
}
}

const intervalId = setInterval(main2,1000);


