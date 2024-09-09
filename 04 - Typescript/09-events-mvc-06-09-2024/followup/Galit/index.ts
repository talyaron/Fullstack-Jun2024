const words: string[] = [];

function handleStart(): void {
    const inputField = document.getElementById('input-word') as HTMLInputElement | null;

    if (inputField) {
        inputField.addEventListener('keyup', handleInput);
    } else {
        console.error("Input field not found");
    }
}

function handleInput(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const word = target.value.trim();

    if (event.key === 'Enter' && word) {
        words.push(word);

        target.value = '';

        console.log(words);

        renderWords(words);
    }
}

function renderWords(words: string[]): void {
    try {
        const wordItem = document.getElementById("items") as HTMLUListElement;
        if (!wordItem) throw new Error("Word list container not found");

        wordItem.innerHTML = words.map((item) => `<li>${item}</li>`).join('');
    } catch (e) {
        console.error(e);
    }
}
