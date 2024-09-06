const words: string[] = [];

function handleLoad()
{
    console.log("loaded")
    try
    {
        const inputElement = document.getElementById("input")
        if (!inputElement) throw new Error("cant find input element")

        inputElement.onkeyup = (event) => handleInput(event);
    }
    catch (e)
    {
        console.log(e)
    }
}

function handleInput(event)
{
    if ("Enter" === event.key)
    {
        words.push(event.target.value)
        event.target.value = ""

        renderWords();
    }
}

function renderWords()
{
    try
    {
        const wordsElement = document.getElementById("words-list");
        if (!wordsElement) throw new Error("cant find words element");

        wordsElement.innerHTML = words.map(word => `<li> ${word} </li>`).join('')
    }
    catch (e)
    {
        console.log(e);
    }
}