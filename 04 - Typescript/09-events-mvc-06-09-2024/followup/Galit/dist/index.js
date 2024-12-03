var words = [];
function handleStart() {
    var inputField = document.getElementById('input-word');
    if (inputField) {
        inputField.addEventListener('keyup', handleInput);
    }
    else {
        console.error("Input field not found");
    }
}
function handleInput(event) {
    var target = event.target;
    var word = target.value.trim();
    if (event.key === 'Enter' && word) {
        words.push(word);
        target.value = '';
        console.log(words);
        renderWords(words);
    }
}
function renderWords(words) {
    try {
        var wordItem = document.getElementById("items");
        if (!wordItem)
            throw new Error("Word list container not found");
        wordItem.innerHTML = words.map(function (item) { return "<li>" + item + "</li>"; }).join('');
    }
    catch (e) {
        console.error(e);
    }
}
