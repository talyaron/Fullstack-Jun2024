"use strict";
exports.__esModule = true;
var main_1 = require("../Controller/dist/main");
window.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded, trying to add navbar...');
    var navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        console.log('Navbar container found:', navbarContainer);
        navbarContainer.appendChild(main_1.createNavbar());
    }
    else {
        console.error('Navbar container not found');
    }
});
