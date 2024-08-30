function main() {
    var elements = document.querySelectorAll('.line');
    console.log(elements);
    elements.forEach(function (element) {
        element.style.color = 'blue';
    });
    var best = document.querySelector('#best');
    best.style.color = 'red';
}
main();
