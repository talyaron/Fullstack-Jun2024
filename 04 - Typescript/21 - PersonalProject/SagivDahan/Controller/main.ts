export function createNavbar(): HTMLElement {
    console.log('Creating navbar...');
    //create element of nav
    const navElement = document.createElement('nav');
    //craete "navbar" class
    navElement.classList.add('navbar');
    //create ul element
    const ul = document.createElement('ul');
    //create class called "navbar-list"
    ul.classList.add('navbar-list');

    //array of name and links for the navbar
    const links = [
        { name: 'My Account', url: '#' },
        { name: 'Courses', url: '#' },
        { name: 'Zoom', url: '#' },
        { name: 'Forum', url: '#' },
        { name: 'Lessons', url: '#' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('navbar-item');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.classList.add('navbar-link');
        li.appendChild(a);
        ul.appendChild(li);
    });

    navElement.appendChild(ul);
    console.log(navElement)
    return navElement;
    
}