//# Followup for event -> DOM
//## Instructions
//### Create onload handler
//- add input field to the HTML
//- add event listener to the input field
//- create event handler for the input field -> write event to console. 
var words = [];
function handleStart() {
    try {
        var inputhello = document.getElementById('input-hello');
        if (!inputhello)
            throw new Error('Input element not found');
        inputhello.addEventListener("keyup", handleInput);
    }
    catch (error) {
        console.error(error);
    }
}
function handleInput(event) {
    try {
        if (event.key === 'Enter') {
            if (!event)
                throw new Error('no event');
            var newWord = event.target.value;
            if (newWord) {
                words.push(newWord);
                event.target.value = '';
                console.log(words);
            }
        }
        console.log(event);
    }
    catch (error) {
        console.error(error);
    }
    renderWords();
}
function renderWords() {
    try {
        var wordList = document.getElementById('words');
        if (!wordList)
            throw new Error('Word list not found');
        wordList.innerHTML = words.map(function (word) { return "<li>" + word + "</li>"; }).join('');
    }
    catch (error) {
        console.error(error);
    }
}
