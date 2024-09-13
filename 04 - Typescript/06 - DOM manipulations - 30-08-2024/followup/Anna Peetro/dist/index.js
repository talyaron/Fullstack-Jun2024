/*function createItems(imageURL : string,brand : string,model : string,price : number, id : string) : Rackets {
    try {
        if(!imageURL || !brand || !model || price < 0 || !id) throw new Error('Invalid Input');
        return {
            imageURL: imageURL,
            brand : brand,
            model : model,
            price : price,
            id : id
        }
    } catch (error) {
        console.error(error);
        return{
            imageURL : "",
            brand : "",
            model : "",
            price : 0,
            id : `id - ${crypto.randomUUID()}`
        }
   }
}*/
var rackets = [
    { imageURL: './dist/images/Blade.png', brand: "Wilson", model: "Blade 104", price: 200, id: "1" },
    { imageURL: './dist/images/clash.png', brand: "Wilson", model: "Clash 100", price: 180, id: "2" },
    { imageURL: './dist/images/ProStaff.png', brand: "Wilson", model: "Pro Staff 97", price: 250, id: "3" },
    { imageURL: './dist/images/Ultra.png', brand: "Wilson", model: "Ultra 100L", price: 150, id: "4" },
    { imageURL: './dist/images/Burn.png', brand: "Wilson", model: "Burn 100", price: 170, id: "5" }
];
function renderRackets() {
    try {
        var storeElement_1 = document.querySelector('#gallery');
        if (!storeElement_1)
            throw new Error('Invalud Input!!!');
        rackets.forEach(function (racket) {
            var racketElement = document.createElement('rackets');
            racketElement.innerHTML = "\n            <img src=\"" + racket.imageURL + "\" />\n            <h2>" + racket.model + "</h2>\n            <h4> " + racket.brand + " </h4>\n            <p> " + racket.price + " </p>\n            <p id=\"itemID\"> " + racket.id + " </p>";
            racketElement.classList.add('racket');
            storeElement_1.appendChild(racketElement);
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderRackets();
