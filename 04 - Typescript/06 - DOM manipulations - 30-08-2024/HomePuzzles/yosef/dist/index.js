var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b, _c, _d;
var navbarList = [
    { name: 'Mobile/Handheld' },
    { name: 'Laptops' },
    { name: 'Display/Desktops' },
    { name: 'Motherbords/Componens' },
    { name: 'Newwork/Lot/Servers' },
    { name: 'Accessories' }
];
var Computers = [
    { id: 1, name: 'ASUS TUF Gaming F15', price: 1200, sale: false, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 2, name: 'ASUS ROG Strix G535', price: 1500, sale: true, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 3, name: 'ASUS ZenBook Pro Duo', price: 1000, sale: false, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 4, name: 'ASUS ZenBook Flip C', price: 1300, sale: true, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 5, name: 'MSI Laptop Turbo', price: 900, sale: true, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 6, name: 'Acer Aspire 5', price: 700, sale: false, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 7, name: 'HP Spectre x360', price: 1100, sale: false, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 8, name: 'Lenovo Ideapad 5', price: 800, sale: false, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 9, name: 'Dell 2025', price: 900, sale: true, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 10, name: 'Lenovo Ideapad 7', price: 1000, sale: false, img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' }
];
displayNavbar();
// display_All_Computers();
// display_Computers_Down_1000$();
// display_Computers_on_sale();
(_a = document.getElementById("only_with_sale")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", display_Computers_on_sale);
(_b = document.getElementById("hide_all")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", hide_All_Computers);
(_c = document.getElementById("all_computers")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", display_All_Computers);
(_d = document.getElementById("computers_under_1000_dollars")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", display_Computers_Down_1000$);
function hide_All_Computers() { alert("asd"); }
;
function display_All_Computers() {
    try {
        var comp_item_1 = document.querySelector('#computers');
        if (!comp_item_1)
            throw new Error('No such element');
        Computers.forEach(function (new_computer) {
            var computerItem = document.createElement('div');
            computerItem.innerHTML =
                "\n            <h3>Computer " + new_computer.name + "</h3>\n            <h3>Price: $" + new_computer.price + "</h3>\n            <p>ID:" + new_computer.id + "</p>\n            <p>Sale: " + (new_computer.sale ? 'Yes' : 'No') + "</p>\n            <img src=\"" + new_computer.img + "\" />\n            ";
            comp_item_1.appendChild(computerItem);
            computerItem.classList.add('computer-item');
        });
    }
    catch (error) {
        console.error(error);
    }
}
function display_Computers_Down_1000$() {
    var temp = __spreadArrays(Computers);
    console.log(temp);
    var array_by_price = temp.filter(function (x) { return x.price < 1000; });
    console.log(array_by_price);
    try {
        var comp_item_2 = document.querySelector('#computers');
        if (!comp_item_2) {
            throw new Error('No such element');
        }
        array_by_price.forEach(function (new_computer) {
            var computerItem = document.createElement('div');
            computerItem.innerHTML =
                "\n            <h3>Computer " + new_computer.name + "</h3>\n            <h3>Price: $" + new_computer.price + "</h3>\n            <p>ID:" + new_computer.id + "</p>\n            <p>Sale: " + (new_computer.sale ? 'Yes' : 'No') + "</p>\n            <img src=\"" + new_computer.img + "\" />\n            ";
            comp_item_2.appendChild(computerItem);
            computerItem.classList.add('computer-item');
        });
    }
    catch (error) {
        console.error(error);
    }
}
function display_Computers_on_sale() {
    var temp = __spreadArrays(Computers);
    console.log(temp);
    var array_by_price = temp.filter(function (x) { return x.sale; });
    console.log(array_by_price);
    try {
        var comp_item_3 = document.querySelector('#computers');
        if (!comp_item_3) {
            throw new Error('No such element');
        }
        array_by_price.forEach(function (new_computer) {
            var computerItem = document.createElement('div');
            computerItem.innerHTML =
                "\n                <h3>Computer " + new_computer.name + "</h3>\n                <h3>Price: $" + new_computer.price + "</h3>\n                <p>ID:" + new_computer.id + "</p>\n                <p>Sale: " + (new_computer.sale ? 'Yes' : 'No') + "</p>\n                <img src=\"" + new_computer.img + "\" />\n                ";
            comp_item_3.appendChild(computerItem);
            computerItem.classList.add('computer-item');
        });
    }
    catch (error) {
        console.error(error);
    }
}
function displayNavbar() {
    try {
        var navbar_1 = document.querySelector('#navbar');
        if (!navbar_1)
            throw new Error('No such element');
        // const x = document.querySelector(`#navbar`) as HTMLElement;
        // x.style.display = "block";
        var asus_img = document.createElement('img');
        asus_img.src = 'https://www.freepnglogos.com/uploads/logo-asus-png/asus-logo-hd-photo-15.png';
        navbar_1.appendChild(asus_img);
        navbar_1.classList.add('img_navbar');
        navbarList.forEach(function (item) {
            var navbarItem = document.createElement('div');
            navbarItem.innerHTML = "\n            <a href=\"https://www.asus.com/\">" + item.name + "</a>";
            navbar_1.appendChild(navbarItem);
            navbarItem.classList.add('nav-item');
        });
    }
    catch (error) {
        console.error(error);
    }
}
