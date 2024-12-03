var words = [];
function handleStart() {
    console.log('Start');
    try {
        //add event listener to input field
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
    //when key is enter --> add  word to array
    if (event.key === 'Enter') {
        if (!(event.target instanceof HTMLInputElement))
            throw new Error('Event target is not an input element');
        var newWord = event.target.value;
        if (newWord) {
            //changed model
            words.push(newWord);
            event.target.value = '';
            //change view accordingly
            renderWords();
        }
    }
}
//on event input -> add word to array -> print array to DOM
function renderWords() {
    try {
        //catch the dom element
        var wordList = document.getElementById('words');
        if (!wordList)
            throw new Error('Word list not found');
        //render list to dom
        wordList.innerHTML = words.map(function (word) { return "<li>" + word + "</li>"; }).join('');
    }
    catch (error) {
        console.error(error);
    }
}
