var navbar = [
    { name: "Mobile/Handhelds" },
    { name: "Laptops" },
    { name: "Displays/Desktops" },
    { name: "Motherboards/Components" },
    { name: "Networking/Iot/Servers" },
    { name: "Networking/Accessories" },
];
function renderNavbar() {
    try {
        var navbarElement_1 = document.querySelector("#navbar");
        if (!navbarElement_1)
            throw new Error("Could not find store navbar element");
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
renderNavbar();
