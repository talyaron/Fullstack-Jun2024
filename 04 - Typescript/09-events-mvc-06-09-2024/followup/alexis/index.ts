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
function handleInput(event): void {
  try {
    console.log(event);

    if (event.key === "Enter") {
      if (!event) throw new Error("no event");
      const word = event.target.value;
      if (word) {
        article.push(word);
        event.target.value = "";
        console.log(article);
        renderWords(article);
      }
      console.log(word);
      console.log(event);
    
    }
  } catch (error) {
    console.error(error);
  }
}
function renderWords(article) {
    try {
        const wordsList = document.getElementById("text") as HTMLElement;
        wordsList.innerHTML = article
          .map((word) => `<li>${word}</li>`)
          .join('');
      
    } catch (error) {
        console.error(error);
    }
}

