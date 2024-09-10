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