async function example() {
    try {
        const response = await fetch('http://localhost:3000/api/example');
        console.log(response);
        const data = await response.json();

        const {text} = data;
        if(!text) throw new Error('No message found');

        const messageElement = document.getElementById("try");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = text;
        console.log(`string: ${text}`)

    } catch (error) {
        console.error(error);
    }
}

example();