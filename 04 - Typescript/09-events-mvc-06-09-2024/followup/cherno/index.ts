function handleLoad()
{
    console.log("loaded")
    try
    {
        const inputElement = document.getElementById("input")
        if (!inputElement) throw new Error("cant find input element")

        inputElement.onkeydown = (event) => handleInput(event);
    }
    catch (e)
    {
        console.log(e)
    }
}

function handleInput(event)
{
    console.log(event);
}
