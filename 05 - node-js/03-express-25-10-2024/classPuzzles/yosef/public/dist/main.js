var show = document.getElementById("show");
if (!show)
    throw new Error;
function show_to_user(event) {
    try {
        if (!event)
            throw new Error('Event object not found');
        show.innerHTML = "you write  " + event.target.value;
        console.log(event.target.value);
    }
    catch (error) {
        console.error(error);
    }
}
