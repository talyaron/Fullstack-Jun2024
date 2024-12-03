//model
interface Computer {
    id:string;
    imageUrl: string;
    name: string;
    price: number;
    sale:boolean;
}

const computers: Computer[] = [
    { id:'1',imageUrl: 'https://picsum.photos/200/300', name: 'Dell', price: 2000, sale: true },
    { id:'2',imageUrl: 'https://picsum.photos/200/300', name: 'HP', price: 1500, sale: false },
    { id:'3',imageUrl: 'https://picsum.photos/200/300', name: 'Apple', price: 3000, sale: true },
    { id:'4',imageUrl: 'https://picsum.photos/200/300', name: 'Lenovo', price: 999, sale: false },
    { id:'5',imageUrl: 'https://picsum.photos/200/300', name: 'Asus', price: 2500, sale: true },
    { id:'6',imageUrl: 'https://picsum.photos/200/300', name: 'Acer', price: 500, sale: false },
    { id:'7',imageUrl: 'https://picsum.photos/200/300', name: 'Samsung', price: 1200, sale: true },
    { id:'8',imageUrl: 'https://picsum.photos/200/300', name: 'Toshiba', price: 800, sale: true },
    { id:'9',imageUrl: 'https://picsum.photos/200/300', name: 'Sony', price: 2700, sale: true },
    { id:'10',imageUrl: 'https://picsum.photos/200/300', name: 'LG', price: 700, sale: false },
]

//view
function renderComputer(computer: Computer): string {
    return `
    <div class="computer-card">
        <img src="${computer.imageUrl}" alt="${computer.name}">
        <h2>${computer.name}</h2>
        <p>${computer.price}</p>
        ${computer.sale ? '<p class="sale">On Sale</p>' : ''}
    </div>
    `;
}

function renderComputers(computers: Computer[]): string {
    return computers.map(renderComputer).join('');
}


//controllers

function getComputerLessThanPrice(price: number): Computer[] {
    return computers.filter(computer => computer.price <= price);
}

function mainComputer() {
    try {
        const computerList = document.querySelector('#computer-list');
        if (!computerList) throw new Error('Computer list not found');

        const lowPriceComputers = getComputerLessThanPrice(1000);
        computerList.innerHTML = renderComputers(lowPriceComputers);

    } catch (error) {
        console.error(error);

    }

}
mainComputer();