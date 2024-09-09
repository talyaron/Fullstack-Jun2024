function main() {
    try {
        const theForm = document.querySelector('#the-form');
        if (!theForm) throw new Error('The form is not found');

        theForm.addEventListener('submit', handleSubmit);

    } catch (error) {
        console.error(error);

    }
}

function handleSubmit(event: Event) {
    try {

        event.preventDefault(); //prevent page reload

        console.dir(event.target);
        if(!(event.target instanceof HTMLFormElement)) throw new Error('The target is not a form');
        console.log(event.target.length);
       
       //another way to get the form data
        const data = {}
        for (let i = 0; i < (event.target.length -1); i++) {
            const inputElement = event.target[i] as HTMLInputElement;
            data[inputElement.name] = inputElement.value;
        }

        console.log(data);
        
        const form:any = event.target as HTMLFormElement;
        if(!form) throw new Error('The form is not found');

        
        const title = form.title.value;
        const year = form.year.value;
        const director = form.director.value;
        const rating = form.rating.value;
        const imageUrl = form.imageUrl.value;
        console.log(title, year, director, rating, imageUrl);
       
        
    } catch (error) {
        console.error(error);
        
    }
}