const boom : string = 'https://pic1.yitweb.co.il/picserver/mynet/crop_images/2023/11/13/HJNPSnkNa/HJNPSnkNa_0_0_640_360_0_large.jpg';
const no_boom : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Ec4AyjMzCAhhRfgWLLCCa1edXtULgPt64w&s';

class Ballon {
    Ballon_imageURL: string;
    Expload_ballonURL: string;
    id: number;
    clicked: boolean;
    element: HTMLImageElement;

constructor (imageURL: string)
{
    this.Ballon_imageURL = imageURL;
    this.id = Math.random();
    this.element = document.createElement('img');
    this.element.src = no_boom;
    this.renderNewBallon()
    this.element.addEventListener('click', (event: MouseEvent) => {
 this.element.src = boom;
    });
 }


explode_ballon (){
    this
    this.Ballon_imageURL=boom;
}

renderNewBallon() :  void {
    const box = document.getElementById('box');
    if (!box) throw new Error('Box not found.');

    this.element = document.createElement('img');
    this.element.src = no_boom;
    this.element.id = String(this.id);
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


