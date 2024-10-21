"use strict";
exports.__esModule = true;
exports.createNavbar = void 0;
function createNavbar() {
    try {
        console.log('Creating navbar...');
        //create element of nav
        var navElement = document.createElement('nav');
        //hold the element inside of the html file:
        var containerElement = document.getElementById("navbar-container");
        //craete "navbar" class
        navElement.classList.add('navbar');
        //create ul element
        var ul_1 = document.createElement('ul');
        //create class called "navbar-list"
        ul_1.classList.add('navbar-list');
        //array of name and links for the navbar
        var links = [
            { name: 'My Account', url: '#' },
            { name: 'Courses', url: '#' },
            { name: 'Zoom', url: '#' },
            { name: 'Forum', url: '#' },
            { name: 'Lessons', url: '#' }
        ];
        links.forEach(function (link) {
            var li = document.createElement('li');
            li.classList.add('navbar-item');
            var a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.name;
            a.classList.add('navbar-link');
            li.appendChild(a);
            ul_1.appendChild(li);
        });
        navElement.appendChild(ul_1);
        //append child the created element to the one in the html 
        //it wont show if you dont append child 
        containerElement.appendChild(navElement);
        console.log(navElement);
        return navElement;
    }
    catch (error) {
        console.error("function isnt found");
        return null;
    }
}
exports.createNavbar = createNavbar;
