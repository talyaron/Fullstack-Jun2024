async function getHello() {
    try {
        console.time('Fetching hello');
        const response = await fetch('http://localhost:3000/api/get-hello');
        const data = await response.json();
        console.timeEnd('Fetching hello');

        const { message } = data;
        if (!message) throw new Error('No message found');

        const messageElement = document.querySelector("#message");
        if (!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = message;
    } catch (error) {
        console.error(error);
    }
}

getHello();
