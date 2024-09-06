var list = [];
function handleEnter() {
    try {
        var input = document.getElementById("input-word");
        if (!input)
            throw new Error("Input field not found");
        input.addEventListener("keyup", handleInput);
    }
    catch (e) {
        console.error("Error", e);
    }
}
;
function handleInput(event) {
    if (event.key === "Enter") {
        var newWord = event.target.value;
        console.log(newWord);
        if (newWord) {
            list.push(newWord);
            event.target.value = '';
            console.log("the array: " + list);
        }
    }
    renderList(list);
}
;
function renderList(list) {
    try {
        var listItem = document.getElementById("items");
        if (!listItem)
            throw new Error("list item not found");
        listItem.innerHTML = list.map(function (item) { return "<li>" + item + "</li>"; }).join('');
    }
    catch (e) {
        console.error(e);
    }
}
