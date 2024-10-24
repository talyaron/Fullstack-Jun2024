// Model - check if user is logged in
function isUserLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
}

// View - display user's name and email
function displayUserDetails() {
    const userString = localStorage.getItem('user');
    if (userString) {
        const user = JSON.parse(userString);

        if (user.name && user.email) {
            const userInfoParagraph = document.createElement('p');
            userInfoParagraph.textContent = `Welcome ${user.name}!, Your Email is: ${user.email}`;
            userInfoParagraph.classList.add("userinfo");
            document.body.appendChild(userInfoParagraph);
        } else {
            console.error('User data is incomplete or corrupted');
        }
    } else {
        console.error('No user data found in localStorage');
    }
}

// Controller - redirect to login if not logged in
function redirectToLoginIfNotLoggedIn() {
    if (!isUserLoggedIn()) {
        console.log('User not logged in, redirecting to login page...');
        window.location.href = 'login.html';
    } else {
        console.log('User is logged in, displaying details...');
        displayUserDetails();
    }
}

// Existing view and controller functions

// View - render sidebar to DOM
function addSidebarToPage() {
    const sidebar = createSidebar();
    document.body.appendChild(sidebar);
}

const userInfoParagraph = document.createElement("h1")
userInfoParagraph.innerHTML = "User Details";
userInfoParagraph.classList.add("userinfop");
document.body.appendChild(userInfoParagraph);

// Controller - create sidebar function
function createSidebar(): HTMLElement {
    // Sidebar div
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    // Sidebar header
    const title = document.createElement('h2');
    title.textContent = 'Dashboard Page';
    sidebar.appendChild(title);

    const menu = document.createElement('ul');

    // Array of links and etc..
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

// View - create header function
function createHeader(): HTMLElement {
    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.classList.add("header__input");
    searchInput.placeholder = "Search";
    document.body.appendChild(searchInput);
    return searchInput;
}

// Run after DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    // Check login status when the page loads
    redirectToLoginIfNotLoggedIn();

    // Render the sidebar and header after user verification
    addSidebarToPage();
    createHeader();
});