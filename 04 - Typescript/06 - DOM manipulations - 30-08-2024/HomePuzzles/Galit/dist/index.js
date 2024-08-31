function main() {
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function (item) {
        item.style.color = 'black';
        item.style.fontFamily = 'Assistant';
    });
    var img = document.querySelector('#logo-img');
    document.addEventListener('DOMContentLoaded', function () {
        var img = document.querySelector('#logo-img');
        img.addEventListener('mouseenter', function () {
            img.src = './images/asus-logo-blue.png';
        });
        img.addEventListener('mouseleave', function () {
            img.src = './images/Asus-Logo-black.png';
        });
    });
}
main();
