

const show = document.getElementById("show") as HTMLInputElement
if (!show) throw new Error

function show_to_user(event: Event){
    try{
        if (!event)
            throw new Error('Event object not found');
    
        show.innerHTML = `you write  ${event.target.value}`;
        console.log(event.target.value)

    }
    catch (error){
        console.error(error);
    }
}
