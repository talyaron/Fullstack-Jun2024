var navbarList = [
    { name: 'Mobile/Handheld' },
    { name: 'Laptops' },
    { name: 'Display/Desktops' },
    { name: 'Motherbords/Componens' },
    { name: 'Newwork/Lot/Servers' },
    { name: 'Accessories' }
];
console.log(navbarList);
function displayNavbar() {
    try {
        var navbar_1 = document.querySelector('#navbar');
        if (!navbar_1)
            throw new Error('No such element');
        // const x = document.querySelector(`#navbar`) as HTMLElement;
        // x.style.display = "block";
        navbarList.forEach(function (item) {
            var navbarItem = document.createElement('div');
            navbarItem.innerHTML = "\n            <a href=\"#\">" + item.name + "</a>\n            ";
            navbar_1.appendChild(navbarItem);
            navbarItem.classList.add('nav-item');
        });
    }
    catch (error) {
        console.error(error);
    }
}
displayNavbar();
