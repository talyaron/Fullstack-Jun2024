function createComputer(id, image, name, price, sale) {
    return { id: id, image: image, name: name, price: price, sale: sale };
}
var Computers = [
    createComputer(227890553, 'https://officejo.com/wp-content/uploads/2024/06/GU605MY-QR104W_01-1024x1024.jpg', 'ASUS ROG Zephyrus G16 Laptop – Intel Core Ultra 9, RTX 4090, 16″ 240Hz WQXGA OLED HDR, ROG Zephyrus Sleeve, ROG Impact Gaming Mouse, Win 11', 899, true),
    createComputer(227896784, 'https://officejo.com/wp-content/uploads/2023/11/G614JV-N3111_01.jpg', 'ASUS ROG Strix G16 Laptop – Core i7, RTX 4060, 16GB RAM', 2125, false),
    createComputer(227423384, 'https://officejo.com/wp-content/uploads/2024/06/UX8406MA-PZ044W_01-1024x1024.jpg', 'ASUS Zenbook Duo OLED Laptop – Intel Core Ultra 7, 16GB DDR5X, 1TB SSD, 14.0″ Double Screen 3K OLED, Backpack Sleeve & ASUS Pen, Win 11 Home', 790, true),
    createComputer(208643383, 'https://officejo.com/wp-content/uploads/2023/11/K3605VC-N1177_01.jpg', 'ASUS Vivobook 16X Laptop – Core i7, RTX 3050, 8GB RAM', 1990, false),
    createComputer(567883383, 'https://officejo.com/wp-content/uploads/2024/06/G614JV-N3129_01-1024x1024.jpg', 'ASUS ROG Strix G16 Laptop – Intel Core i7-13650HX, RTX 4060 8GB DDR6, 16GB DDR5, 16″ FHD+ 165Hz, Eclipse Gray', 1490, true),
    createComputer(567883999, 'https://officejo.com/wp-content/uploads/2024/06/FA607PV-N3060_01-1024x1024.jpg', 'ASUS TUF Gaming A16 2024 Laptop – AMD R9-7845HX, NVIDIA RTX 4060 8GB, 16.0″ WUXGA ANTI-GLARE 165Hz, Mecha Gray', 2390, true),
    createComputer(567545889, 'https://officejo.com/wp-content/uploads/2024/06/G634JZR-N4111_04-1024x1024.jpg', 'ASUS ROG Strix SCAR 16 Laptop – Intel Core i9-14900HX, RTX 4080, 32GB DDR5, 16″ QHD+ 240Hz, with ROG Backpack & ROG Gladius III Mouse, Off Black', 1390, false),
    createComputer(567883535, 'https://officejo.com/wp-content/uploads/2023/08/FX506HF-HN114_01-1024x1024.jpg', 'ASUS TUF Gaming F15 Laptop – i5 11th Gen, RTX 2050, 144Hz', 999, false),
    createComputer(543243556, 'https://officejo.com/wp-content/uploads/2022/07/VG27AQ_01.jpg', 'ASUS TUF Gaming VG27AQ HDR 27″ 2K Gaming Monitor', 6390, true),
    createComputer(567883535, 'https://officejo.com/wp-content/uploads/2023/08/FX506HF-HN114_01-1024x1024.jpg', 'ASUS TUF Gaming F15 Laptop – i5 11th Gen, RTX 2050, 144Hz', 1390, false),
];
function renderComputers(maxPrice) {
    try {
        var computersElement_1 = document.querySelector('#Computers');
        if (!computersElement_1)
            throw new Error('Could not find an element with the id "Computers"');
        computersElement_1.innerHTML = ''; // Clear the existing content
        var filteredComputers = maxPrice
            ? Computers.filter(function (computer) { return computer.price < maxPrice; })
            : Computers;
        filteredComputers.forEach(function (computer) {
            var computerElement = document.createElement('article');
            computerElement.innerHTML = "\n                <h5>" + computer.id + "</h5>\n                <img src=\"" + computer.image + "\" alt=\"" + computer.name + "\" />\n                <h1>" + computer.name + "</h1>\n                <h3>" + computer.price + "$</h3>\n                <h3 class=\"" + (computer.sale ? 'sale' : '') + "\">" + (computer.sale ? 'On Sale!' : 'Regular Price') + "</h3>\n            ";
            computerElement.classList.add('Computer');
            computerElement.id = computer.id.toString();
            computersElement_1.appendChild(computerElement);
        });
    }
    catch (error) {
        console.error(error.message);
    }
}
function main() {
    document.addEventListener('DOMContentLoaded', function () {
        var menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(function (item) {
            item.style.color = 'black';
            item.style.fontFamily = 'Assistant';
        });
        var img = document.querySelector('#logo-img');
        if (img) {
            img.addEventListener('mouseenter', function () {
                img.src = './images/asus-logo-blue.png';
            });
            img.addEventListener('mouseleave', function () {
                img.src = './images/Asus-Logo-black.png';
            });
        }
        var filterButton = document.querySelector('#filter-button');
        var allComputersButton = document.querySelector('#Computers-button');
        if (filterButton) {
            filterButton.addEventListener('click', function () {
                renderComputers(1000);
            });
        }
        if (allComputersButton) {
            allComputersButton.addEventListener('click', function () {
                renderComputers();
            });
        }
        renderComputers();
    });
}
main();
