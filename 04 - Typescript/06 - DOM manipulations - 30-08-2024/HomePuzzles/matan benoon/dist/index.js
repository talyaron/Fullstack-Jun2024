var computers = [
    {
        name: ' asus screen 1920*1490 ',
        price: 1480,
        id: 1298,
        sale: true
    },
    {
        name: ' asus screen 1700*1500 ',
        price: 1100,
        id: 1298,
        sale: true
    },
    {
        name: ' asus screen 1600*1250 ',
        price: 1200,
        id: 1298,
        sale: false
    },
    {
        name: ' asus screen 1200*800 ',
        price: 900,
        id: 1298,
        sale: true
    },
    {
        name: ' asus screen 1100*600 ',
        price: 700,
        id: 1298,
        sale: true
    },
    {
        name: ' asus screen 1000*500 ',
        price: 600,
        id: 1298,
        sale: false
    },
    {
        name: ' asus screen 1920*1490 ',
        price: 1700,
        id: 1298,
        sale: false
    },
    {
        name: ' asus screen 1600*1100 ',
        price: 999,
        id: 1298,
        sale: true
    },
    {
        name: ' asus screen 890*600 ',
        price: 400,
        id: 1298,
        sale: true
    },
    {
        name: ' asus screen 3000*1490 ',
        price: 1900,
        id: 1298,
        sale: false
    },
];
var navbar = [
    {
        name: 'allcomputer'
    },
    {
        name: 'computers'
    },
    {
        name: 'phones'
    },
    {
        name: 'tablet'
    },
    {
        name: 'screen'
    },
];
function navbarSelectId() {
    var navbarItems = document.querySelector('#navbar');
    try {
        if (!navbarSelectId)
            throw new Error("could not found");
        navbar.forEach(function (item) {
            var menuList = document.createElement('div');
            menuList.innerHTML =
                " <a>" + item.name;
            menuList.classList.add("navlist");
            navbarItems.appendChild(menuList);
        });
    }
    catch (e) {
        console.error(e);
    }
}
function computersSelcetId() {
    var computersItem = document.querySelector('#computers');
    try {
        if (!computersSelcetId)
            throw new Error("could not found");
        computers.forEach(function (itemComp) {
            var computersList = document.createElement('div');
            if (itemComp.price <= 1000 && itemComp.sale) {
                computersList.innerHTML =
                    "<h1> " + itemComp.name + "</h1>,\n            <h2> " + itemComp.price + "</h2>\n            <button> ' show more ' </button>\n            <img src= \"https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_UF1000,1000_QL80_.jpg\">\n            ";
            }
            computersList.classList.add("computer_list");
            computersItem.appendChild(computersList);
        });
    }
    catch (e) {
        console.error(e);
    }
}
computersSelcetId();
navbarSelectId();
