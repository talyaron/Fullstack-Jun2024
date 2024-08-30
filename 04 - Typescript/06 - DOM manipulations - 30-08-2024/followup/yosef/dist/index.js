// function yosef() {
//     const elements = document.querySelectorAll('.yosefib') as NodeListOf<HTMLElement>;
//     console.log(elements);
//     document.body.style.backgroundColor = 'blue';
//     elements.forEach((element) => {
//         element.style.color ='red';
//     });
var yosk_market = [];
yosk_market.push({ name: 'bamba', price: 5, quantity: 60, img: 'https://d226b0iufwcjmj.cloudfront.net/gs1-products/1062/large/7290000068787-802953/7290000068787/2023-10-06T08-14-26-991Z.jpg' });
yosk_market.push({ name: 'besle', price: 4, quantity: 30, img: 'https://www.pizohaizion.co.il/wp-content/uploads/2021/02/7290000066172.jpg' });
yosk_market.push({ name: 'xl', price: 7, quantity: 50, img: 'hsad' });
yosk_market.push({ name: 'cola', price: 12, quantity: 10, img: 'hsad' });
yosk_market.push({ name: 'fanta', price: 11, quantity: 88, img: 'hsad' });
console.log(yosk_market);
function render_yosef_market() {
    try {
        var market_element_1 = document.querySelector('#yosk');
        if (!market_element_1)
            throw new Error('No such element');
        yosk_market.forEach(function (item) {
            var item_element = document.createElement('div');
            market_element_1.innerHTML = "\n            <h3>" + item.name + "</h3>\n            <img src=\"" + item.img + "\" />\n        ";
            market_element_1.classList.add('pet');
            market_element_1.appendChild(market_element_1);
        });
    }
    catch (error) {
        console.error(error);
    }
}
render_yosef_market();
