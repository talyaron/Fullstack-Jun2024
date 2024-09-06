const wordList: string[] = [];

function getElement() {
  try {
    const textElement = document.getElementById(
      "textInput"
    ) as HTMLInputElement;
    if (!textElement) throw new Error("No element found");

    textElement.addEventListener("keyup", handleInput);
  } catch (e) {
    console.error(e);
  }
}

getElement();

function handleInput(event: KeyboardEvent) {
  const eventElement = event.target as HTMLInputElement; 
  if (event.key === "Enter") {
    event.preventDefault();

    const userInput = eventElement.value.trim();
    if (userInput) {
      wordList.push(userInput);
      console.log(wordList);
    } else {
      console.log("Please enter a word");
    }
  }
}
