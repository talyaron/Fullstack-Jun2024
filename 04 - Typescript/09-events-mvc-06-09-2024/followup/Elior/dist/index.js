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
