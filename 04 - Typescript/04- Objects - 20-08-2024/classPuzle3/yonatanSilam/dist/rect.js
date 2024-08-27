function getRectSize() {
    var widht = Number(prompt("pls enter widht"));
    var height = Number(prompt("pls enter height"));
    var rect = {
        widht: widht,
        height: height
    };
    return rect;
}
function culcArea(rect) {
    var widht = rect.widht;
    var height = rect.height;
    var area = widht * height;
    return "" + area;
}
document.write(culcArea(getRectSize()));
