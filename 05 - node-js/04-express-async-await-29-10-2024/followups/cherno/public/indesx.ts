async function getHello() {
    try {
        //we will call the server
        console.time('fetching hello');
        const response = await fetch('http://localhost:3000/api/press-button');
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.timeEnd('fetching hello');

        const {message} = data;
        const count = message.split(' ')[3] as number;
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector<HTMLElement>("#message");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = message;
        messageElement.style.backgroundColor = `#${count.toString(16)}`; // why is the color not changing, why is toString not converting to hex. fix this and send help

    } catch (error) {
        console.error(error);
    }
}

function main()
{
    try
    {
        const buttonElement = document.querySelector("#button");
        if(!buttonElement) throw new Error('Button element not found');

        buttonElement.addEventListener('click', getHello);
    }
    catch (error)
    {
        console.error(error);
    }
}
main();