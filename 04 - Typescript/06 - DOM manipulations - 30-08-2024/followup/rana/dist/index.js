function information() {
    var elements = document.querySelectorAll('.firstline');
    console.log(elements);
    elements.forEach(function (element) {
        element.style.background = 'red';
        element.style.color = 'purple';
        element.textContent = 'Hello World';
    });
    var special = document.querySelector('#special');
    special.style.color = 'pink';
    special.textContent = 'I am special';
}
information();
