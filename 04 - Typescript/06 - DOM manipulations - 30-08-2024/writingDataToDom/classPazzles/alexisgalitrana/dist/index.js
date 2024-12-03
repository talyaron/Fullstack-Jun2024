function createProduct(name, image, price) {
    return { name: name, image: image, price: price, id: crypto.randomUUID() };
}
var products = [];
products.push(createProduct('Blouse', 'https://www.thespruce.com/thmb/tafFWeEWcJqDsj4rRybGfYwvSmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wash-new-clothes-before-wearing-2146345-03-999483b3d51a435ba53c8d9ef5c2d5c4.jpg', 452));
products.push(createProduct('Bag', 'https://cdn-images.farfetch-contents.com/20/09/06/00/20090600_45209303_1000.jpg', 1500));
products.push(createProduct('Fragrance', 'https://i0.wp.com/anais.al/wp-content/uploads/2023/10/cofanetto-donna-prada-paradoxe.jpg?fit=800%2C800&ssl=1', 150));
function renderProducts() {
    try {
        var productsElement_1 = document.querySelector('#products');
        if (!productsElement_1)
            throw new Error('Could not find an element with the id "products"');
        products.forEach(function (product) {
            var productElement = document.createElement('article');
            productElement.innerHTML =
                "\n    <h1> " + product.name + "</h1>\n    <img src = \"" + product.image + "\"/>\n    <h3> " + product.price + "$</h3>\n    <h5>" + [product.id] + "</h5>";
            productElement.classList.add('product');
            productElement.id = product.id;
            productsElement_1.appendChild(productElement);
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderProducts();
