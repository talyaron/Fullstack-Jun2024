var words = [];
function handlelStart() {
    console.log('Start');
    try {
        var inputWord = document.getElementById('input-word');
        if (!inputWord)
            throw new Error(' Input element is not found');
        inputWord.addEventListener('keyup', handleInput);
    }
    catch (error) {
        console.error(error);
    }
}
function handleInput(event) {
    console.log(event);
    if (event.key === 'Enter') {
        if (!(event.target instanceof HTMLInputElement))
            throw new Error('event targrt is not an element ');
        var newWord = event.target.value;
        if (newWord) {
            words.push(newWord);
            event.target.value = '';
            renderWords();
        }
    }
}
function renderWords() {
    try {
        var wordList = document.getElementById('worsd');
        if (!wordList)
            throw new Error('word list not found');
        wordList.innerHTML = words.map(function (word) { return "<li> " + word + "</li>"; }).join('');
    }
    catch (error) {
        console.error(error);
    }
}
