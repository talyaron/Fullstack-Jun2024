var click = {};
function main() {
    try {
        var localStorageUsers = localStorage.getItem("clickNumber");
        var num = localStorageUsers ? JSON.parse(localStorageUsers) : 0;
        click.num = num;
        var num1 = document.querySelector("#number");
        if (!num1)
            throw new Error("not find number");
        num1.innerHTML = "" + click.num;
        var btn = document.querySelector("#btn");
        if (!btn)
            throw new Error("not find btn");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", counter);
    }
    catch (e) {
        console.error(e);
    }
}
function counter() {
    if (click.num != undefined)
        click.num++;
    console.log(click.num);
    localStorage.setItem("clickNumber", JSON.stringify(click.num));
    var num = document.querySelector("#number");
    if (!num)
        throw new Error("not find number");
    num.innerHTML = "" + click.num;
}
