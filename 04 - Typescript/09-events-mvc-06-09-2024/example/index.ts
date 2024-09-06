const words: string[] = [];

function handleStart(): void {
    console.log('Start');
    try {
        //add event listener to input field
        const inputWord = document.getElementById('input-word') as HTMLInputElement;
        if (!inputWord) throw new Error('Input element not found');

        inputWord.addEventListener("keyup", handleInput) 

    } catch (error) {
        console.error(error);

    }
}


function handleInput(event:any): void {
console.log(event);
    //when key is enter --> add  word to array
    if (event.key === 'Enter') {
        if (event.target instanceof HTMLInputElement) {
            const newWord = event.target.value;
            if (newWord) {
                
                //changed model
                words.push(newWord);
                event.target.value = '';

                //change view accordingly
                renderWords();
            }
        }
    }

}
//on event input -> add word to array -> print array to DOM

function

function renderWords(): void {
    try {
        //catch the dom element
        const wordList = document.getElementById('words') as HTMLOListElement;
        if (!wordList) throw new Error('Word list not found');
        //render list to dom

        wordList.innerHTML = words.map((word) => `<li>${word}</li>`).join('');


    } catch (error) {
        console.error(error);

    }
}