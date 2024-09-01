// function yosef() {
//     const elements = document.querySelectorAll('.yosefib') as NodeListOf<HTMLElement>;
//     console.log(elements);
//     document.body.style.backgroundColor = 'blue';
//     elements.forEach((element) => {
//         element.style.color ='red';
//     });
var yosk_market = [];
yosk_market.push({ name: 'Bama', price: 5, quantity: 60, img: 'https://d226b0iufwcjmj.cloudfront.net/gs1-products/1062/large/7290000068787-802953/7290000068787/2023-10-06T08-14-26-991Z.jpg' });
yosk_market.push({ name: 'Besli', price: 4, quantity: 30, img: 'https://www.pizohaizion.co.il/wp-content/uploads/2021/02/7290000066172.jpg' });
yosk_market.push({ name: 'XL', price: 7, quantity: 50, img: 'https://www.rami-levy.co.il/_ipx/w_366,f_webp/https://img.rami-levy.co.il/product/5906485301012/small.jpg' });
yosk_market.push({ name: 'Coca Cola', price: 12, quantity: 10, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/1200px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg' });
yosk_market.push({ name: 'Fanta', price: 11, quantity: 88, img: 'https://media.istockphoto.com/id/594923352/photo/fanta-can-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=AomCsSv_rk3LC_uWzEFn3eRN5K3zWWLuO5K-rgcuV_I=' });
console.log(yosk_market);
function render_yosef_market() {
    try {
        var market_element_1 = document.querySelector('#yosk');
        if (!market_element_1)
            throw new Error('No such element');
        yosk_market.forEach(function (item) {
            var item_element = document.createElement('div');
            item_element.innerHTML = "\n            <h2>" + item.name + "</h2>\n            <h2>Price is : " + item.price + "</h2>\n            <p>Quantity for this item is : " + item.quantity + " pcs</p>\n            <img src=\"" + item.img + "\" />\n            <button onclick=\"buy_item(" + item.name + ")\">Buy " + item.name + "</button>\n        ";
            market_element_1.appendChild(item_element);
            item_element.classList.add('item');
        });
    }
    catch (error) {
        console.error(error);
    }
}
render_yosef_market();
