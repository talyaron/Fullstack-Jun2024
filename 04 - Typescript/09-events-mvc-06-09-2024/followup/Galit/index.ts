const words: string[] = [];

function handleStart(): void {
    const inputField = document.getElementById('input-word') as HTMLInputElement | null;

    if (inputField) {
        inputField.addEventListener('change', handleInput);
    } else {
        console.error("Input field not found");
    }
}

function handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    
    const word = target.value;
    
    words.push(word);

    target.value = '';

    console.log(words);
}