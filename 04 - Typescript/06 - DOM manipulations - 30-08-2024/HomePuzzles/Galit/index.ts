function main() {
    const menuItems = document.querySelectorAll('.menu-item') as NodeListOf<HTMLElement>;

    menuItems.forEach(item => {
        item.style.color = 'black';
        item.style.fontFamily = 'Assistant';
    });

    const img = document.querySelector('#logo-img') as HTMLImageElement;

    document.addEventListener('DOMContentLoaded', () => {
        const img = document.querySelector('#logo-img') as HTMLImageElement;
    
        img.addEventListener('mouseenter', () => {
            img.src = './images/asus-logo-blue.png';
        });
    
        img.addEventListener('mouseleave', () => {
            img.src = './images/Asus-Logo-black.png';
        });
    });
}
main();