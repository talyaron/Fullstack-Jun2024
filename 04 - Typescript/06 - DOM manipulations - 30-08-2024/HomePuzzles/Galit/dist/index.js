var menuItems = [
    { name: "Mobile / Handhelds", url: "#" },
    { name: "Laptops", url: "#" },
    { name: "Displays / Desktop", url: "#" },
    { name: "Motherboards / Components", url: "#" },
    { name: "Networking / IoT / Servers", url: "#" },
    { name: "Accessories", url: "#" }
];
function renderMenu(menuItems) {
    var menuDiv = document.querySelector('#menu-container');
    menuDiv.className = 'menu';
    // Logo
    var logoDiv = document.createElement('div');
    logoDiv.className = 'menu-item';
    var logoImg = document.createElement('img');
    logoImg.id = 'logo-img';
    logoImg.src = './images/Asus-Logo-black.png';
    logoImg.alt = 'Asus Logo';
    logoDiv.appendChild(logoImg);
    menuDiv.appendChild(logoDiv);
    // Menu items
    menuItems.forEach(function (item) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        var itemLink = document.createElement('a');
        itemLink.href = item.url;
        itemLink.textContent = item.name;
        itemDiv.appendChild(itemLink);
        menuDiv.appendChild(itemDiv);
    });
}
var Computers = [
    { id: 227890553, image: 'https://officejo.com/wp-content/uploads/2024/06/GU605MY-QR104W_01-1024x1024.jpg', name: 'ASUS ROG Zephyrus G16 Laptop', price: 899, sale: true },
    { id: 227896784, image: 'https://officejo.com/wp-content/uploads/2023/11/G614JV-N3111_01.jpg', name: 'ASUS ROG Strix G16 Laptop', price: 2125, sale: false },
    { id: 227423384, image: 'https://officejo.com/wp-content/uploads/2024/06/UX8406MA-PZ044W_01-1024x1024.jpg', name: 'ASUS Zenbook Duo OLED Laptop', price: 790, sale: true },
    { id: 208643383, image: 'https://officejo.com/wp-content/uploads/2023/11/K3605VC-N1177_01.jpg', name: 'ASUS Vivobook 16X Laptop', price: 1990, sale: false },
    { id: 567883383, image: 'https://officejo.com/wp-content/uploads/2024/06/G614JV-N3129_01-1024x1024.jpg', name: 'ASUS ROG Strix G16 Laptop', price: 1490, sale: true },
    { id: 567545889, image: 'https://officejo.com/wp-content/uploads/2024/06/G634JZR-N4111_04-1024x1024.jpg', name: 'ASUS ROG Strix SCAR 16 Laptop', price: 1390, sale: false },
    { id: 567883535, image: 'https://officejo.com/wp-content/uploads/2023/08/FX506HF-HN114_01-1024x1024.jpg', name: 'ASUS TUF Gaming F15 Laptop', price: 999, sale: false },
    { id: 543243556, image: 'https://officejo.com/wp-content/uploads/2022/07/VG27AQ_01.jpg', name: 'ASUS TUF Gaming VG27AQ HDR Monitor', price: 6390, sale: true }
];
function renderComputers(maxPrice) {
    var computersElement = document.querySelector('#Computers');
    computersElement.innerHTML = ''; // Clear the existing content
    var filteredComputers = maxPrice
        ? Computers.filter(function (computer) { return computer.price < maxPrice; })
        : Computers;
    filteredComputers.forEach(function (computer) {
        var computerElement = document.createElement('article');
        computerElement.innerHTML = "\n            <h5>ID: " + computer.id + "</h5>\n            <img src=\"" + computer.image + "\" alt=\"" + computer.name + "\" />\n            <h1>" + computer.name + "</h1>\n            <h3>" + computer.price + "$</h3>\n            <h3 class=\"" + (computer.sale ? 'sale' : '') + "\">" + (computer.sale ? 'On Sale!' : 'Regular Price') + "</h3>\n        ";
        computerElement.classList.add('Computer');
        computerElement.id = computer.id.toString();
        computersElement.appendChild(computerElement);
    });
}
function main() {
    document.addEventListener('DOMContentLoaded', function () {
        renderMenu(menuItems);
        var logoImg = document.querySelector('#logo-img');
        logoImg.addEventListener('mouseenter', function () {
            logoImg.src = './images/asus-logo-blue.png';
        });
        logoImg.addEventListener('mouseleave', function () {
            logoImg.src = './images/Asus-Logo-black.png';
        });
        var filterButton = document.querySelector('#filter-button');
        var allComputersButton = document.querySelector('#Computers-button');
        filterButton.addEventListener('click', function () {
            renderComputers(1000);
        });
        allComputersButton.addEventListener('click', function () {
            renderComputers();
        });
        renderComputers();
    });
}
main();
