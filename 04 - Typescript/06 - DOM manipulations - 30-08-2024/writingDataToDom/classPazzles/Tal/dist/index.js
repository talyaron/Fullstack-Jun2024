//model
function createShoe(name, image, price) {
    return { name: name, image: image, price: price, id: crypto.randomUUID() };
}
var shoes = [];
shoes.push(createShoe('Nike', 'https://m.media-amazon.com/images/I/71Q8z8IF6IL._AC_UY900_.jpg', 100));
shoes.push(createShoe('Adidas', 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/184fa7f3-2070-45eb-b258-7fe6762dc6de/custom-nike-gt-cut-academy.png', 120));
shoes.push(createShoe('Puma', 'https://m.media-amazon.com/images/I/61+hrj2FI5L._AC_UY1000_.jpg', 80));
shoes.push(createShoe('Reebok', 'https://reebok.bynder.com/transform/fa107404-7316-44ae-aa42-26711ba97767/100009276_SLC_eCom-tif?io=transform:fit,width:500&quality=100', 90));
//view
function renderShoes(shoes) {
    try {
        var storeProducts_1 = document.getElementById('storeProducts');
        if (!storeProducts_1)
            throw new Error('storeProducts not found');
        shoes.forEach(function (shoe) {
            var shoeDiv = document.createElement('div');
            shoeDiv.innerHTML = "\n            <h2>" + shoe.name + "</h2>\n            <img src=\"" + shoe.image + "\" alt=\"" + shoe.name + "\">\n            <p>Price: $" + shoe.price + "</p>\n        ";
            shoeDiv.classList.add('shoe');
            storeProducts_1.appendChild(shoeDiv);
        });
    }
    catch (e) {
        console.error(e);
    }
}
renderShoes(shoes);
