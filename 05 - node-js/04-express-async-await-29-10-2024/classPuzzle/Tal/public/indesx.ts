async function getHello() {
    try {
        //we will call the server
        console.time('fetching hello');
        const response = await fetch('http://localhost:3000/api/get-hello');
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.timeEnd('fetching hello');

        const { message } = data;
        // const message = data.message;
        if (!message) throw new Error('No message found');

        const messageElement = document.querySelector("#message");
        if (!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = message;

    } catch (error) {
        console.error(error);
    }
}


getHello(); //calling the function

const btn = document.querySelector("#btn");
if (btn) {
    btn.addEventListener("click", handleGetNumber);
} else {
    console.log("missing btn")
}

async function handleGetNumber() {
    try {
        const r = await fetch('http://localhost:3000/api/get-random-number')
        const data = await r.json();
        if (!data.number) throw new Error('No number found');

        const numberElement = document.querySelector("#number");
        if (!numberElement) throw new Error('No number element found');

        numberElement.innerHTML = data.number;

    } catch (error) {
        console.error(error);
    }
}
