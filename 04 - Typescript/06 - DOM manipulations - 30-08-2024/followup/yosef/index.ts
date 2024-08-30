// function yosef() {
//     const elements = document.querySelectorAll('.yosefib') as NodeListOf<HTMLElement>;
//     console.log(elements);
//     document.body.style.backgroundColor = 'blue';
//     elements.forEach((element) => {
//         element.style.color ='red';
//     });

// }

// yosef();

interface item {
    name: string;
    price: number;
    quantity: number;
    img: string;
}

const yosk_market: item[] = [];
yosk_market.push({ name: 'bamba', price: 5, quantity: 60, img: 'https://d226b0iufwcjmj.cloudfront.net/gs1-products/1062/large/7290000068787-802953/7290000068787/2023-10-06T08-14-26-991Z.jpg' });
yosk_market.push({ name: 'besle', price: 4, quantity: 30, img: 'https://www.pizohaizion.co.il/wp-content/uploads/2021/02/7290000066172.jpg' });
yosk_market.push({ name: 'xl', price: 7, quantity: 50, img: 'hsad' });
yosk_market.push({ name: 'cola', price: 12, quantity: 10, img: 'hsad' });
yosk_market.push({ name: 'fanta', price: 11, quantity: 88, img: 'hsad' });

console.log(yosk_market);

function render_yosef_market() {
    try {
        const market_element = document.querySelector('#yosk') as HTMLElement;
        if (!market_element) throw new Error('No such element');

        yosk_market.forEach(item => {
            const item_element = document.createElement('div');
            item_element.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.img}" />
        `;
            item_element.classList.add('pet');
            market_element.appendChild(item_element);
        })

    } catch (error) {
        console.error(error);
    }
}

render_yosef_market();
