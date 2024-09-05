"use strict";

var computers = [{
  name: ' asus screen 1920*1490 ',
  price: 1480,
  id: 1298,
  sale: true
}, {
  name: ' asus screen 1700*1500 ',
  price: 1100,
  id: 1254,
  sale: true
}, {
  name: ' asus screen 1600*1250 ',
  price: 1200,
  id: 78967864,
  sale: false
}, {
  name: ' asus screen 1200*800 ',
  price: 900,
  id: 868456645,
  sale: true
}, {
  name: ' asus screen 1100*600 ',
  price: 700,
  id: 456786783,
  sale: true
}, {
  name: ' asus screen 1000*500 ',
  price: 600,
  id: 48646456776,
  sale: false
}, {
  name: ' asus screen 1920*1490 ',
  price: 1700,
  id: 6456345646,
  sale: false
}, {
  name: ' asus screen 1600*1100 ',
  price: 999,
  id: 87634534345,
  sale: true
}, {
  name: ' asus screen 890*600 ',
  price: 400,
  id: 456456456,
  sale: true
}, {
  name: ' asus screen 3000*1490 ',
  price: 1900,
  id: 48645645,
  sale: false
}];
var navbar = [{
  name: 'allcomputer',
  link: '/all-computers'
}, {
  name: 'computers',
  link: '/computers'
}, {
  name: 'phones',
  link: '/phones'
}, {
  name: 'tablet',
  link: '/tablet'
}, {
  name: 'screen',
  link: '/screen'
}]; //view

function renderNav() {
  try {
    var navbarItems_1 = document.querySelector('#navbar');
    if (!navbarItems_1) throw new Error("could not found");
    navbar.forEach(function (item) {
      var navItem = document.createElement('div');
      navItem.innerHTML = "<a href=\"" + item.link + "\">" + item.name + "</a>";
      navItem.classList.add("nav-item");
      navbarItems_1.appendChild(navItem);
    });
  } catch (e) {
    console.error(e);
  }
}

renderNav();

function renderComputers() {
  var computersItem = document.querySelector('#computers');

  try {
    if (!computersItem) throw new Error("could not found");
    computers.forEach(function (itemComp) {
      var computerItem = document.createElement('div');

      if (itemComp.price <= 1000 && itemComp.sale) {
        computerItem.innerHTML = "<h1> " + itemComp.name + "</h1>,\n            <h2> " + itemComp.price + "</h2>\n            <button> ' show more ' </button>\n            <img src= \"https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_UF1000,1000_QL80_.jpg\">\n            " + (itemComp.sale === true ? "<div class='sale'>On Sale </div>" : "") + "\n            ";
      }

      computerItem.classList.add("computer_list");
      computersItem.appendChild(computerItem);
    });
  } catch (e) {
    console.error(e);
  }
}

renderComputers(); // navbarSelectId();