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
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector("#message");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = message;

    } catch (error) {
        console.error(error);
    }
}
async function rng() {
    try {
        //we will call the server
        console.time('fetching bye');
        const response = await fetch('http://localhost:3000/api/rng');
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.timeEnd('fetching bye');
        let x = Math.floor(Math.random() * 1000) + 1;
      const {message} = data;
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector("#message");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = x.toString();

    } catch (error) {
        console.error(error);
    }
}

let y = 0
async function countUp() {
    try {
        //we will call the server
        console.time('fetching bye');
        y ++;
        const response = await fetch('http://localhost:3000/api/countUp');
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.timeEnd('fetching bye');

        const {message} = data;
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector("#counter");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML =y.toString() ;
;

    } catch (error) {
        console.error(error);
    }
}
getHello(); //calling the function