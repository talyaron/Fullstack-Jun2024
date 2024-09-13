var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var menu = ['Mobile / Handhelds', 'Laptops',
    'Displays / Desktops', 'Motherboards / Components', 'Networking / IoT / Servers',
    'Accessories', 'support'];
function renderAsusLogo() {
    try {
        var siteElement_1 = document.querySelector('#store');
        var logoImage = document.createElement('img');
        logoImage.src = "./dist/images/download.png";
        logoImage.alt = "Asus logo";
        logoImage.id = 'logo';
        siteElement_1.appendChild(logoImage);
        if (!siteElement_1)
            throw new Error('Not found a HTML Elemnt');
        menu.forEach(function (item) {
            var menuElement = document.createElement('menu');
            menuElement.innerHTML = "\n        <p> " + item + " </p>";
            menuElement.classList.add('menuItems');
            siteElement_1.appendChild(menuElement);
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderAsusLogo();
function removeMenuItem(arr, itemToRemove) {
    var indexToRemove = arr.findIndex(function (item) { return item === itemToRemove; });
    return __spreadArrays(arr).slice(0, indexToRemove).concat(__spreadArrays(arr).slice(indexToRemove + 1));
}
console.log();
