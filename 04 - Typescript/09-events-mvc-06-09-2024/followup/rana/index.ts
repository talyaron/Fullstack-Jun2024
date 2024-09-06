//# Followup for event -> DOM

//## Instructions

//### Create onload handler
  //- add input field to the HTML
  //- add event listener to the input field
  //- create event handler for the input field -> write event to console. 

  function handleStart (): void {
    try{
        const inputhello = document.getElementById('input-hello') as HTMLInputElement;
        if (!inputhello) throw new Error ('Input element not found');

        inputhello.addEventListener("keyup", handleInput => {
            console.log(handleInput);
        });


    } catch (error) {
        console.error(error);
    }
    }
  
function handleInput (event){
    console.log (event)
}

