interface Product{
    name: string;
    image: string;
    price: number;
    id: string;
}


function createProduct(name:string, image:string, price:number): Product{
    return {name, image, price, id:crypto.randomUUID()};
}

const products:Product[]=[];
products.push(createProduct('Blouse', 'https://www.thespruce.com/thmb/tafFWeEWcJqDsj4rRybGfYwvSmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wash-new-clothes-before-wearing-2146345-03-999483b3d51a435ba53c8d9ef5c2d5c4.jpg', 452));
products.push(createProduct('Bag', 'https://cdn-images.farfetch-contents.com/20/09/06/00/20090600_45209303_1000.jpg', 1500));
products.push(createProduct('Fragrance', 'https://i0.wp.com/anais.al/wp-content/uploads/2023/10/cofanetto-donna-prada-paradoxe.jpg?fit=800%2C800&ssl=1', 150));


function renderProducts(){
try {
    const productsElement = document.querySelector('#products') as HTMLElement;
    if (!productsElement) throw new Error('Could not find an element with the id "products"');

products.forEach(product =>{
    const productElement = document.createElement('article');
    productElement.innerHTML =
    `
    <h1> ${product.name}</h1>
    <img src = "${product.image}"/>
    <h3> ${product.price}$</h3>
    <h5>${[product.id]}</h5>`;

    productElement.classList.add('product');

    productElement.id = product.id;

    productsElement.appendChild(productElement);
});


} catch (error) {
    console.error(error);
}
}
renderProducts();