function main() {
    var elements = document.querySelectorAll('.line');
    console.log(elements);
    elements.forEach(function (element) {
        element.style.color = 'red';
        element.textContent = 'Hello';
    });
}
