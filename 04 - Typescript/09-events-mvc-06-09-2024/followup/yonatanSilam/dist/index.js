var words = [];
function handleStart() {
    try {
        var input = document.querySelector('#input-word');
        if (!input)
            throw new Error('there are no input-word');
        input.addEventListener('keyup', handleInput);
    }
    catch (e) {
        console.log(e);
    }
}
function handleInput(event) {
    if (event.key == "Enter") {
        words.push(event.target.value);
        console.log(words);
        event.target.value = '';
    }
    renderInput();
}
function renderInput() {
    try {
        var list = document.querySelector('#words');
        if (!list)
            throw new Error('not found words list');
        list.innerHTML = words.map(function (string) { return "<li>" + string + "</li>"; }).join('');
    }
    catch (e) {
        console.log(e);
    }
}
