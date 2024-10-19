"use strict";
exports.__esModule = true;
exports.createNavbar = void 0;
function createNavbar() {
    console.log('Creating navbar...');
    //create element of nav
    var navElement = document.createElement('nav');
    //craete "navbar" class
    navElement.classList.add('navbar');
    //create ul element
    var ul = document.createElement('ul');
    //create class called "navbar-list"
    ul.classList.add('navbar-list');
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
        ul.appendChild(li);
    });
    navElement.appendChild(ul);
    console.log(navElement);
    return navElement;
}
exports.createNavbar = createNavbar;
