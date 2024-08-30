function main() {
    var elements = document.querySelectorAll('.line');
    console.log(elements);
    elements.forEach(function (element) {
        element.style.color = 'red';
        element.textContent = 'Hello World';
    });
    var theOne = document.querySelector('#theOne');
    theOne.style.color = 'blue';
    theOne.textContent = 'I am special';
}
main();
