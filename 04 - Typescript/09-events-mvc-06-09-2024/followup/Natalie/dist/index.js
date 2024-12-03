var word = [];
function handleStart() {
    console.log('Start');
    try {
        var inputWord = document.getElementById('input-word');
        if (!inputWord)
            throw new Error('Input element not found');
        inputWord.addEventListener("keyup", handleInput);
    }
    catch (error) {
        console.error(error);
    }
}
function handleInput(event) {
    console.log(event);
    if (event.key === 'Enter') {
        if (event.target instanceof HTMLInputElement) {
            var newWord = event.target.value;
            if (newWord) {
                word.push(newWord);
                event.target.value = '';
                renderWords();
            }
        }
    }
}
function renderWords() {
    try {
        var wordList = document.getElementById('words');
        if (!wordList)
            throw new Error('Word list not found');
        wordList.innerHTML = word.map(function (word) { return "<li>" + word + "</li>"; }).join('');
    }
    catch (error) {
        console.error(error);
    }
}
