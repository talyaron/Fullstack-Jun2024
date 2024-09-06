const article: string[] = [];

function addWords(): void {
  console.log("start");
  try {
    const wordsInput = document.getElementById("input-text") as HTMLElement;
    if (!wordsInput) throw new Error("there is no input");
    wordsInput.addEventListener("keyup", handleInput);

  } catch (error) {
    console.error(error);
  }
}
addWords();
function handleInput(event):void{
    try {
        console.log(event);
    
        if (event.key === 'Enter') {
            if(!event) throw new Error('no event');
            const word = event.target.value;
            if (word){
                article.push(word);
                event.target.value='';

            }
          console.log(word);
          console.log(event);
        }
      
    } catch (error) {
        console.error(error);
    }}
