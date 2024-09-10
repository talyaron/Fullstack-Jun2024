class Ballon {
    imageURL: string;
    id: number;


constructor (imageURL: string)
{
    this.imageURL = imageURL;
    this.id = Math.random();
}

explode_ballon (){
    this.imageURL = 'https://pic1.yitweb.co.il/picserver/mynet/crop_images/2023/11/13/HJNPSnkNa/HJNPSnkNa_0_0_640_360_0_large.jpg'
}
}



const ballon = new Ballon('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Ec4AyjMzCAhhRfgWLLCCa1edXtULgPt64w&s')
console.log(ballon);

function main2()
{
    try {
        //get field, andd add event listener
        const box = document.getElementById('box');
        if (!box) {
            throw new Error('Field not found');
        }
        box.addEventListener('click', handleMove);
    } catch (error) {
        console.error(error);

    }
}


function renderNewBallon(ballon: Ballon) {
    try {
        const BallonElement = document.createElement('img');
        BallonElement.src = ballon.imageURL;
        const box = document.getElementById('box');
        if (!box) {
            throw new Error('Box not found');
        }

        box.appendChild(BallonElement);
         const field = document.getElementById('field');

        }
      
    catch (error) {
        console.error(error);
    }
}

function handleMove(event: MouseEvent) {
    try {
        const box = document.getElementById('box');
        if (!box) {
            throw new Error('Box not found');
        }
        ballon.imageURL = 'https://pic1.yitweb.co.il/picserver/mynet/crop_images/2023/11/13/HJNPSnkNa/HJNPSnkNa_0_0_640_360_0_large.jpg'
        renderNewBallon(ballon)
        ballon.explode_ballon();
        console.log(ballon.imageURL)
   
}

catch (error)
    {
        console.error(error);
    }
}



main2();
renderNewBallon(ballon); 
