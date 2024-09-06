var words = [];
function handleStart() {
    var inputField = document.getElementById('input-word');
    if (inputField) {
        inputField.addEventListener('keyup', handleInput);
    }
    else {
        console.error("Input field not found");
    }
}
function handleInput(event) {
    var target = event.target;
    var word = target.value.trim();
    if (event.key === 'Enter' && word) {
        words.push(word);
        target.value = '';
        console.log(words);
        // displayWords();
    }
}
// function displayWords(): void {
//     const wordsList = document.getElementById('words');
//     if (wordsList) {
//         wordsList.innerHTML = ''; // Clear existing list
//         words.forEach(word => {
//             const li = document.createElement('li');
//             li.textContent = word;
//             wordsList.appendChild(li);
//         });
//     }
// }
