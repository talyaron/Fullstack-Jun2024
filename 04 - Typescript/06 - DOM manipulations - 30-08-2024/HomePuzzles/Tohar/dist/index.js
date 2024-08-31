;
;
var navbar = [
    { name: "Mobile/Handhelds" },
    { name: "Laptops" },
    { name: "Displays/Desktops" },
    { name: "Motherboards/Components" },
    { name: "Networking/Iot/Servers" },
    { name: "Networking/Accessories" },
];
var computersList = [
    { id: 1, name: "Zenebook", price: 7700, sale: false },
    { id: 2, name: "Vivobook", price: 8000, sale: false },
    { id: 3, name: "Chromebook", price: 1000, sale: false },
    { id: 4, name: "ExpertBook", price: 800, sale: false },
    { id: 5, name: "Next-Gen Console", price: 10000, sale: true },
    { id: 6, name: "TUF Gaming VG28UQL1A", price: 10000, sale: true },
    { id: 7, name: "ASUS BR1104C", price: 900, sale: false },
    { id: 8, name: "ASUS BR1100F", price: 1100, sale: true },
    { id: 9, name: "BE24EQK", price: 2500, sale: true },
    { id: 10, name: "ProArt", price: 750, sale: false },
];
function renderNavbar() {
    try {
        var navbarElement_1 = document.querySelector("#navbar");
        if (!navbarElement_1)
            throw new Error("Could not find navbar element");
        navbar.forEach((function (item) {
            var menuItem = document.createElement("div");
            menuItem.innerHTML = "\n            <a>" + item.name + "</a>\n            ";
            menuItem.classList.add("navbarItem");
            navbarElement_1.appendChild(menuItem);
        }));
    }
    catch (e) {
        console.error(e);
    }
}
;
function renderComputersList() {
    try {
        var computersElement_1 = document.querySelector("#computersList");
        if (!computersElement_1)
            throw new Error("Could not find computers element!");
        computersList.forEach((function (computer) {
            var computerItem = document.createElement("div");
            if (computer.price <= 1000) {
                computerItem.innerHTML = "\n            <h1>" + computer.name + "</h1>\n            <h2>$" + computer.price + "</h2>\n            <button>Show More</button>\n            ";
            }
            computerItem.classList.add("navbarItem");
            computersElement_1.appendChild(computerItem);
            console.log(computerItem);
        }));
    }
    catch (e) {
        console.error(e);
    }
}
renderNavbar();
renderComputersList();
