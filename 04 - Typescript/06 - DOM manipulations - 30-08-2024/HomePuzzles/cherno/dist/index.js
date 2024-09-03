function generateComputer(name, price, sale) {
    return { id: crypto.randomUUID(), name: name, price: price, sale: sale };
}
function renderNav(logo, elements) {
    try {
        var nav_1 = document.querySelector('#navBar');
        if (!nav_1)
            throw new Error('couldnt find nav');
        var navLogo = document.createElement('img');
        navLogo.setAttribute('src', logo);
        navLogo.classList.add('nav_element');
        nav_1.appendChild(navLogo);
        elements.forEach(function (element) {
            var navElement = document.createElement('a');
            navElement.textContent = element;
            navElement.classList.add('nav_element');
            nav_1.appendChild(navElement);
        });
    }
    catch (e) {
        console.error(e);
    }
}
function renderListing(computers) {
    try {
        var listingElement_1 = document.querySelector('#listing');
        if (!listingElement_1)
            throw new Error('could not find listing element');
        computers = computers.filter(function (computer) { return computer.price < 1000; });
        computers.forEach(function (computer) {
            var computerElement = document.createElement('article');
            computerElement.innerHTML = "\n            <h2>" + computer.name + "</h2>\n            <h3>" + computer.price + "$</h3>\n            <footer id=\"saleAd\">on sale!</footer>\n            ";
            var footer = computerElement.querySelector('#saleAd');
            if (!computer.sale)
                footer.style.display = 'none';
            computerElement.classList.add('listing__computer');
            computerElement.id = computer.id;
            listingElement_1.appendChild(computerElement);
        });
    }
    catch (e) {
        console.log(e);
    }
}
function renderSales(computers) {
    try {
        var salesElement_1 = document.querySelector('#sales');
        if (!salesElement_1)
            throw new Error('could not find listing element');
        computers = computers.filter(function (computer) { return computer.sale; });
        computers.forEach(function (computer) {
            var computerElement = document.createElement('article');
            computerElement.innerHTML = "\n            <h2>" + computer.name + "</h2>\n            <h3>" + computer.price + "$</h3>\n            <footer id=\"saleAd\">on sale!</footer>\n            ";
            computerElement.classList.add('sales__computer');
            computerElement.id = computer.id;
            salesElement_1.appendChild(computerElement);
        });
    }
    catch (e) {
        console.log(e);
    }
}
function main() {
    var logo = 'logo.png';
    var navElements = ['Mobile/Handhelds', 'Laptops', 'Displays/Desktops', 'MotherBoards/Components', 'Networking/IoT/Servers', 'Accessories'];
    renderNav(logo, navElements);
    var computers = [];
    computers.push(generateComputer('Vivobook 15', 2000, false));
    computers.push(generateComputer('Vivobook 14', 1500, true));
    computers.push(generateComputer('Vivobook 13', 800, false));
    computers.push(generateComputer('TUF Gaming', 3000, true));
    computers.push(generateComputer('X515MA', 600, true));
    computers.push(generateComputer('ZenBook Pro 14', 2500, false));
    computers.push(generateComputer('ROG Strix G15', 3200, true));
    computers.push(generateComputer('ExpertBook B9', 1800, false));
    computers.push(generateComputer('Chromebook Flip', 700, true));
    computers.push(generateComputer('ProArt StudioBook 16', 3500, true));
    renderListing(computers);
    renderSales(computers);
}
main();
