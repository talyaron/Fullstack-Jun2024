function test() {
    var items = ['banana', 'pizza', 'document', 'followups'];
    var array = document.getElementById("array");
    items.forEach(function (item) {
        var p = document.createElement("p");
        p.textContent = item;
        p.style.color = "blue";
        p.style.fontSize = "31px";
        p.style.fontFamily = "bold";
        array === null || array === void 0 ? void 0 : array.appendChild(p);
    });
}
test();
