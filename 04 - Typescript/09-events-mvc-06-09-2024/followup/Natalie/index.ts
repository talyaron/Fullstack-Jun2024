const word: string[] = [];

function handleStart(): void {
    console.log('Start');
    try {
        const inputWord = document.getElementById('input-word') as HTMLInputElement;
        if (!inputWord) throw new Error('Input element not found');
        
        inputWord.addEventListener("keyup", handleInput)

    } catch (error) {
        console.error(error);
    }
}

function handleInput(event:any): void {
    console.log(event);

    if (event.key === 'Enter') {
        if (event.target instanceof HTMLInputElement) {
            const newWord = event.target.value;
            if (newWord) {
                words.push(newWord);
                event.target.value = '';

                renderWords();
            }
        }
    }
}

function renderWords(): void {
    try {
        const wordList = document.getElementById('words') as HTMLUListElement;
        if (!wordList) throw new Error('Word list not found');

        wordList.innerHTML = words.map((word) => `<li>${word}</li>`).join('');

        
    } catch (error) {
        console.error(error);
    }
}
