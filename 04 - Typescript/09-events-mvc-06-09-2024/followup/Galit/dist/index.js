var words = [];
function handleStart() {
    var inputField = document.getElementById('input-word');
    if (inputField) {
        inputField.addEventListener('change', handleInput);
    }
    else {
        console.error("Input field not found");
    }
}
function handleInput(event) {
    var target = event.target;
    var word = target.value;
    words.push(word);
    target.value = '';
    console.log(words);
}
