async function hello() {
    try {
        const response = await fetch('http://localhost:3000/api/hello');
        const messageData = await response.json();

        const {message} = messageData;
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector('#app');
        if (!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = message;


    } catch (e) {
        console.error(e);
    };
};

hello();