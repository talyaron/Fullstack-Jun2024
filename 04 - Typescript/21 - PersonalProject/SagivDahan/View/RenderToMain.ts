import { createNavbar } from '../Controller/dist/main.js';
console.log("page is loaded");
window.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, trying to add navbar...');
    const navbarContainer = document.getElementById('navbar-container');
    
    if (navbarContainer) {
        console.log('Navbar container found:', navbarContainer);
        const navbarElement = createNavbar();
        if (navbarElement) {
            navbarContainer.appendChild(navbarElement);
        } else {
            console.error('Failed to create navbar');
        }
    } else {
        console.error('Navbar container not found');
    }
}); 