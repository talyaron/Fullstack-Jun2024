const words2: string[] = [];
var word:any = '';

function handleStart2(): void {
    console.log('Start');
    try{
        const take_input = document.getElementById('input_text') as HTMLInputElement;
        if (!take_input)    
            throw new Error('Input element not found');

        take_input.addEventListener("keyup", handleInput2);
     }
     catch (error){
        console.error(error);
    }

}

function handleInput2 (event:any): void {
    console.log('Input', event.key);
    if (event.key == 'Enter')
        if (event.target instanceof HTMLInputElement){
             const new_word = event.target.value;
             if (new_word){
            words2.push(new_word);
            word = String(new_word);
            console.log(words2);
            event.target.value = '';
            renderWords2();
        }

    }
        
}

function renderWords2() : void {
    try {
        
        const wordList = document.getElementById('words') as HTMLOListElement;
        if (!wordList) throw new Error('Word list not found');

        wordList.innerHTML = words2.map((word2) => `<li>${word2}</li>`).join('');


    } catch (error) {
        console.error(error);

    }
}

// הגדרת הפונקציה קודם כל
function clearConsole(): void {
    console.clear(); // מנקה את הקונסולה
    alert('Clearing');
    words2.length = 0;
    renderWords2(); // מרי��ה את הפו��קצי�� להצי�� את המי��ים שנשמרו
}


window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn') as HTMLButtonElement | null;

    if (button) {
        try {
            
            button.addEventListener('click', clearConsole);
        } catch (error) {
            console.error('שגיאה בהוספת מאזין לאירוע:', error);
        }
    } else {
        console.error('הכפתור עם המזהה "btn" לא נמצא.');
    }
});



