function main() {
    var textArr = ["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
    var lines = document.querySelectorAll('.line');
    lines.forEach(function (line, index) {
        line.textContent = textArr[index];
    });
}
main();
