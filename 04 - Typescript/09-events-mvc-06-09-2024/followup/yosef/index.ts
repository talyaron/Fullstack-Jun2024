

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
        const new_work = event.target.value;
        
}
