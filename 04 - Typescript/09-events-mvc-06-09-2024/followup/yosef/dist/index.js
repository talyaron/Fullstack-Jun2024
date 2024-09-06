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
        var new_work = event.target.value;
}
