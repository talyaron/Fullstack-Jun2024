function main2() {
    try {
    const theForm = document.querySelector('#the_form');
    if (!theForm) throw new Error('The form is not found');

    theForm.addEventListener('submit', handleSubmit2);
    
    }
    catch (error) {
        console.error(error);
    }
}

function handleSubmit2(event: Event) {
    try{
        event.preventDefault(); 
           const array : any= [];
           const year = document.getElementById('year') as HTMLSelectElement;
         console.log('the selected year', year.value); 
         console.dir(event)
        }
        catch (error) {
            console.log(error);
        }

        alert('asdas');
    }
