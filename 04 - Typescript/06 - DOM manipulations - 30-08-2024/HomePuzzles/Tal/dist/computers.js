var computers = [
    { id: '1', imageUrl: 'https://picsum.photos/200/300', name: 'Dell', price: 2000, sale: true },
    { id: '2', imageUrl: 'https://picsum.photos/200/300', name: 'HP', price: 1500, sale: false },
    { id: '3', imageUrl: 'https://picsum.photos/200/300', name: 'Apple', price: 3000, sale: true },
    { id: '4', imageUrl: 'https://picsum.photos/200/300', name: 'Lenovo', price: 999, sale: false },
    { id: '5', imageUrl: 'https://picsum.photos/200/300', name: 'Asus', price: 2500, sale: true },
    { id: '6', imageUrl: 'https://picsum.photos/200/300', name: 'Acer', price: 500, sale: false },
    { id: '7', imageUrl: 'https://picsum.photos/200/300', name: 'Samsung', price: 1200, sale: true },
    { id: '8', imageUrl: 'https://picsum.photos/200/300', name: 'Toshiba', price: 800, sale: true },
    { id: '9', imageUrl: 'https://picsum.photos/200/300', name: 'Sony', price: 2700, sale: true },
    { id: '10', imageUrl: 'https://picsum.photos/200/300', name: 'LG', price: 700, sale: false },
];
//view
function renderComputer(computer) {
    return "\n    <div class=\"computer-card\">\n        <img src=\"" + computer.imageUrl + "\" alt=\"" + computer.name + "\">\n        <h2>" + computer.name + "</h2>\n        <p>" + computer.price + "</p>\n        " + (computer.sale ? '<p class="sale">On Sale</p>' : '') + "\n    </div>\n    ";
}
function renderComputers(computers) {
    return computers.map(renderComputer).join('');
}
//controllers
function getComputerLessThanPrice(price) {
    return computers.filter(function (computer) { return computer.price <= price; });
}
function mainComputer() {
    try {
        var computerList = document.querySelector('#computer-list');
        if (!computerList)
            throw new Error('Computer list not found');
        var lowPriceComputers = getComputerLessThanPrice(1000);
        computerList.innerHTML = renderComputers(lowPriceComputers);
    }
    catch (error) {
        console.error(error);
    }
}
mainComputer();
