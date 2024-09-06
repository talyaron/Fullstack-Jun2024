var words = [];
function handleLoad() {
    console.log("loaded");
    try {
        var inputElement = document.getElementById("input");
        if (!inputElement)
            throw new Error("cant find input element");
        inputElement.onkeyup = function (event) { return handleInput(event); };
    }
    catch (e) {
        console.log(e);
    }
}
function handleInput(event) {
    if ("Enter" === event.key) {
        words.push(event.target.value);
        event.target.value = "";
        renderWords();
    }
}
function renderWords() {
    try {
        var wordsElement = document.getElementById("words-list");
        if (!wordsElement)
            throw new Error("cant find words element");
        wordsElement.innerHTML = words.map(function (word) { return "<li> " + word + " </li>"; }).join('');
    }
    catch (e) {
        console.log(e);
    }
}
