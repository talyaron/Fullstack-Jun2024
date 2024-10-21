"use strict";
exports.__esModule = true;
var main_js_1 = require("../Controller/dist/main.js");
console.log("page is loaded");
window.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded, trying to add navbar...');
    var navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        console.log('Navbar container found:', navbarContainer);
        var navbarElement = main_js_1.createNavbar();
        if (navbarElement) {
            navbarContainer.appendChild(navbarElement);
        }
        else {
            console.error('Failed to create navbar');
        }
    }
    else {
        console.error('Navbar container not found');
    }
});
