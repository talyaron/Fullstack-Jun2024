"use strict";

function renderNav(logo, elements) {
  try {
    var nav_1 = document.querySelector('nav');
    if (!nav_1) throw new Error('couldnt find nav');
    var navLogo = document.createElement('img');
    navLogo.setAttribute('src', logo);
    navLogo.classList.add('navElement');
    navLogo.appendChild(nav_1);
    elements.forEach(function (element) {
      var navElement = document.createElement('h3');
      navElement.textContent = element;
      navElement.classList.add('navElement');
      navElement.appendChild(nav_1);
    });
  } catch (e) {
    console.error(e);
  }
}

function main() {
  var logo = 'logo.png';
  var navElements = ['Mobile/Handhelds', 'Laptops', 'Displays/Desktops', 'MotherBoards/Components', 'Networking/IoT/Servers', 'Accessories'];
  renderNav(logo, navElements);
}

main();