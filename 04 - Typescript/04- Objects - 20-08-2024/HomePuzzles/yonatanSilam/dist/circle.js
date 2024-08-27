function getArea(circle) {
    var area = (circle.radios * circle.radios) * Math.PI;
    return "" + area;
}
var x = {
    radios: 5
};
x.radios = Number(prompt("enter the R"));
document.write(getArea(x));
