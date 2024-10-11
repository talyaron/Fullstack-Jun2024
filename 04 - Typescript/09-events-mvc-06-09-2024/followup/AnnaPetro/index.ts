const movies : string [] = [];

function handleStartM() : void{
    try {
        console.log('start')
        const inputMovie = document.getElementById('input-movies') as HTMLInputElement;
        if(!inputMovie) throw new Error ('Input element not found');

        inputMovie.addEventListener("keyup",handleInputM)
    } catch (error) {
        console.error(error);
    }
}


function handleInputM(event : any){
    console.log(event);
}