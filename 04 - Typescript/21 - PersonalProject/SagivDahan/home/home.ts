//model

//view

//render sidebar to dom
function addSidebarToPage() {
    const sidebar = createSidebar();
    document.body.appendChild(sidebar);
}
addSidebarToPage();

//controller
//sidebar create function
function createSidebar(): HTMLElement {
    //sidebar div
    const sidebar = document.createElement('div');
    //add sidebar div element to class "sidebar"
    sidebar.className = 'sidebar';

    //sidebar header
    const title = document.createElement('h2');
    title.textContent = 'Menu';
    sidebar.appendChild(title);
    const menu = document.createElement('ul');

    //array of links and etc..
    const items = [
        { name: 'Dashboard', link: './home.html' },
        { name: 'Profile', link: 'Profile.html' },
        { name: 'Courses', link: 'Courses.html' },
        { name: 'Zoom', link: 'Zoom.html' },
        { name: 'Forum', link: 'Forum.html' },
        { name: 'Lessons', link: 'Lessons.html' }
    ];

    items.forEach(item => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = item.name;
        anchor.href = item.link;
        anchor.target = '_self';

        listItem.appendChild(anchor);
        menu.appendChild(listItem);
    });
    sidebar.appendChild(menu);
    return sidebar;
}

