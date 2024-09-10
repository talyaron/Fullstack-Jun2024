class Baloon {
    imageUrl : string;
    id : string;

    constructor(imageUrl : string){
        this.imageUrl =imageUrl;
        this.id = `id - ${crypto.randomUUID()}`
    }

    setImageURL ( imageUrl : string){
        this.imageUrl = imageUrl;
    }
}

const annaBallon = new Baloon('./dist/image/Purple_Balloon.png');
const raamBallon = new Baloon('./dist/image/blue-baloon-removebg-preview.png');

function renderNewBallon(baloon : Baloon){
    const baloonElement = document.createElement('img');
    baloonElement.src = baloon.imageUrl;
    baloonElement.id = baloon.id;
    baloonElement.style.top = 0 + 'px';
    baloonElement.style.left = 0 + 'px';
    document.body.appendChild(baloonElement);
    
    baloonElement.addEventListener('click', () => {
        baloon.setImageURL('./dist/image/purpleblowup.png');
    });
}

renderNewBallon(annaBallon);
console.log(annaBallon);
//renderNewBallon(raamBallon);