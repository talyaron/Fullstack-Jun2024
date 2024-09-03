//Generating a list of 10 computers
var menuItems = [
    { name: 'Mobile/Hnandsheld' },
    { name: 'Laptops' },
    { name: 'Displays/Desktops' },
    { name: 'Motherboards/Componets' },
    { name: 'Network/Lot/Servers' },
    { name: "Accessories" }
];
//Generating a list of 10 computers 
var Computer = [
    { id: 1, name: 'Laptop A', price: 950, sale: true, img: 'images/laptop-a.jpg' },
    { id: 2, name: 'Desktop B', price: 1200, sale: false, img: 'images/desktop-b.jpg' },
    { id: 3, name: 'Laptop C', price: 850, sale: true, img: 'images/laptop-c.jpg' },
    { id: 4, name: 'Desktop D', price: 500, sale: false, img: 'images/desktop-d.jpg' },
    { id: 5, name: 'Laptop E', price: 2000, sale: false, img: 'images/laptop-e.jpg' },
    { id: 6, name: 'Desktop F', price: 750, sale: true, img: 'images/desktop-f.jpg' },
    { id: 7, name: 'Laptop G', price: 300, sale: true, img: 'images/laptop-g.jpg' },
    { id: 8, name: 'Desktop H', price: 1800, sale: false, img: 'images/desktop-h.jpg' },
    { id: 9, name: 'Laptop I', price: 450, sale: true, img: 'images/laptop-i.jpg' },
    { id: 10, name: 'Desktop J', price: 1100, sale: false, img: 'images/desktop-j.jpg' }
];
function filterAffordableComputers(computers) {
    return computers.filter(function (computer) { return computer.price < 1000; });
}
console.log(menuItems);
console.log(Computer);
