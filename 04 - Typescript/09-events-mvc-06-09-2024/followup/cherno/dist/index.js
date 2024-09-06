function handleLoad() {
    console.log("loaded");
    try {
        var inputElement = document.getElementById("input");
        if (!inputElement)
            throw new Error("cant find input element");
        inputElement.onkeydown = function (event) { return handleInput(event); };
    }
    catch (e) {
        console.log(e);
    }
}
function handleInput(event) {
    console.log(event);
}
