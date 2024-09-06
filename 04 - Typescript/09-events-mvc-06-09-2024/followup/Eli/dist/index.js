var wordList = [];
function getElement() {
    try {
        var textElement = document.getElementById("textInput");
        if (!textElement)
            throw new Error("No element found");
        textElement.addEventListener("keyup", handleInput);
    }
    catch (e) {
        console.error(e);
    }
}
getElement();
function handleInput(event) {
    var textElement = event.target;
    if (event.key === "Enter") {
        event.preventDefault();
        var userInput = textElement.value.trim();
        if (userInput) {
            wordList.push(userInput);
            console.log(wordList);
        }
        else {
            console.log("Please enter a word.");
        }
    }
}
