var navbars = [
    "<img src=./asus.png alt=asus>",
    'Mobile / Handhelds',
    'Laptops',
    'Displays / Desktops',
    'Motherboards / Components',
    'Networking / IoT / Servers',
    'Accessories',
];
var store = [
    { id: 1001, name: "Dell XPS 13", price: 999, sale: true },
    { id: 1002, name: "Apple MacBook Air", price: 1299, sale: false },
    { id: 1003, name: "HP Spectre x360", price: 1149, sale: true },
    { id: 1004, name: "Lenovo ThinkPad X1 Carbon", price: 1399, sale: false },
    { id: 1005, name: "Asus ROG Zephyrus G14", price: 1499, sale: true },
    { id: 1006, name: "Acer Aspire 5", price: 649, sale: true },
    { id: 1007, name: "Microsoft Surface Laptop 4", price: 1599, sale: false },
    { id: 1008, name: "Samsung Galaxy Book Pro", price: 1199, sale: true },
    { id: 1009, name: "Razer Blade 15", price: 1899, sale: false },
    { id: 1010, name: "MSI Prestige 14", price: 1099, sale: true }
];
function renderNavbar() {
    try {
        var navbar_1 = document.querySelector('#navbar');
        if (!navbar_1)
            throw new Error('Could not find an element with the id "navbar"');
        navbars.forEach(function (art) {
            var newart = document.createElement('a');
            newart.innerHTML = "" + art;
            newart.classList.add('navItem');
            navbar_1.appendChild(newart);
        });
    }
    catch (e) {
        console.log(e);
    }
}
function renderComputerUnder1000() {
    try {
        var section_1 = document.querySelector('#section');
        if (!section_1)
            throw new Error('Could not find an element with the id "section"');
        store.forEach(function (comp) {
            if (comp.price < 1000) {
                var newComp = document.createElement('div');
                newComp.innerHTML = "   \n        <img src=\"./\u05E6\u05D9\u05DC\u05D5\u05DD \u05DE\u05E1\u05DA 2024-09-01 001648.png\" alt=\"compeuter\">\n        <h1> id: " + comp.id + "<br> name: " + comp.name + " </h1>\n        <h3>price: " + comp.price + " $<h3>";
                newComp.classList.add('continer');
                section_1.appendChild(newComp);
            }
        });
    }
    catch (e) {
        console.log(e);
    }
}
renderNavbar();
renderComputerUnder1000();
renderComputerOnSale();
function renderComputerOnSale() {
    try {
        var section_2 = document.querySelector('#onSaleSection');
        if (!section_2)
            throw new Error('Could not find an element with the id "onSaleSection"');
        store.forEach(function (comp) {
            if (comp.sale) {
                var newComp = document.createElement('div');
                newComp.innerHTML = "   \n        <img src=\"./\u05E6\u05D9\u05DC\u05D5\u05DD \u05DE\u05E1\u05DA 2024-09-01 001648.png\" alt=\"compeuter\">\n        <h1> id: " + comp.id + "<br> name: " + comp.name + " </h1>\n        <h3>price: " + comp.price + " $<h3>";
                newComp.classList.add('continer');
                newComp.classList.add('onSale');
                newComp.innerHTML += "<h4>ON SALE!!!</h4>";
                section_2.appendChild(newComp);
            }
        });
    }
    catch (e) {
        console.log(e);
    }
}
