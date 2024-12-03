var words2 = [];
var word = '';
function handleStart2() {
    console.log('Start');
    try {
        var take_input = document.getElementById('input_text');
        if (!take_input)
            throw new Error('Input element not found');
        take_input.addEventListener("keyup", handleInput2);
    }
    catch (error) {
        console.error(error);
    }
}
function handleInput2(event) {
    console.log('Input', event.key);
    if (event.key == 'Enter')
        if (event.target instanceof HTMLInputElement) {
            var new_word = event.target.value;
            if (new_word) {
                words2.push(new_word);
                word = String(new_word);
                console.log(words2);
                event.target.value = '';
                renderWords2();
            }
        }
}
function renderWords2() {
    try {
        var wordList = document.getElementById('words');
        if (!wordList)
            throw new Error('Word list not found');
        wordList.innerHTML = words2.map(function (word2) { return "<li>" + word2 + "</li>"; }).join('');
    }
    catch (error) {
        console.error(error);
    }
}
// הגדרת הפונקציה קודם כל
function clearConsole() {
    console.clear(); // מנקה את הקונסולה
    alert('Clearing');
    words2.length = 0;
    renderWords2(); // מרי��ה את הפו��קצי�� להצי�� את המי��ים שנשמרו
}
window.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('btn');
    if (button) {
        try {
            button.addEventListener('click', clearConsole);
        }
        catch (error) {
            console.error('שגיאה בהוספת מאזין לאירוע:', error);
        }
    }
    else {
        console.error('הכפתור עם המזהה "btn" לא נמצא.');
    }
});
