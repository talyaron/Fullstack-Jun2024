//# Followup for event -> DOM

//## Instructions

//### Create onload handler
  //- add input field to the HTML
  //- add event listener to the input field
  //- create event handler for the input field -> write event to console. 
const words:string[]=[];

  function handleStart (): void {
    try{
        const inputhello = document.getElementById('input-hello') as HTMLInputElement;
        if (!inputhello) throw new Error ('Input element not found');

        inputhello.addEventListener("keyup", handleInput); 
       


    } catch (error) {
        console.error(error);
    }
    }
  
function handleInput (event:any):void{
    try{
        if(event.key==='Enter'){
            if(!event) throw new Error ('no event');
            const newWord= event.target.value;
            if (newWord){
                words.push(newWord);
                event.target.value='';

            console.log(words);
            }
        }
        
        console.log (event)


        } catch (error) {
    console.error(error);
}
    } 
    



