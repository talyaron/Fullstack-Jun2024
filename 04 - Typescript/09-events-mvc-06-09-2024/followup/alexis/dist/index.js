var article = [];
function addWords() {
    console.log("start");
    try {
        var wordsInput = document.getElementById("input-text");
        if (!wordsInput)
            throw new Error("there is no input");
        wordsInput.addEventListener("keyup", handleInput);
    }
    catch (error) {
        console.error(error);
    }
}
addWords();
function handleInput(event) {
    try {
        if (event.key === 'Enter') {
            if (!event)
                throw new Error('no event');
            var word = event.target.value;
            if (word) {
                article.push(word);
                event.target.value = '';
            }
            console.log(word);
            console.log(event);
        }
    }
    catch (error) {
        console.error(error);
    }
}
