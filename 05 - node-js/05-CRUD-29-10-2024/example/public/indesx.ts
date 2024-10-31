async function getHello() {
    try {
        //we will call the server
        console.time('fetching hello');
        const response = await fetch('http://localhost:3000/api/get-hello');
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.timeEnd('fetching hello');

        const {message} = data;
        // const message = data.message;
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector("#message");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = message;

    } catch (error) {
        console.error(error);
    }
}

getHello(); //calling the function


async function handleSendWord(ev){
    try {
        ev.preventDefault();

        const word = ev.target.word.value;
        console.log(word);

        const response = await fetch('http://localhost:3000/api/send-word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({word}) //data to send (to string format) )
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
