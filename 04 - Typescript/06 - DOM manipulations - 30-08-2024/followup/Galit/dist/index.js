function main() {
    var elements = document.querySelectorAll('.line');
    console.log(elements);
    elements.forEach(function (element) {
        element.style.color = 'pink';
        element.textContent = 'Hello Hello';
    });
    var theOne = document.querySelector('#theOne');
    theOne.style.color = 'purple';
    theOne.textContent = 'By Bye';
    theOne.style.background = 'white';
}
main();
document.body.style.backgroundColor = 'teal';
