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

const btn = document.querySelector("#btn") as HTMLButtonElement;
if(!btn) throw new Error("Element not found");
btn.addEventListener("click",handleClick);

async function handleClick() {
    try {
        const response = await fetch('http://localhost:3000/api/get-rand');
        const data = await response.json();
        console.log(response);
        console.log(data);
        const {number} = data;
        if(!number) throw new Error("No random num is found");
        const randMeesage = document.querySelector("#rand") as HTMLDivElement;
        if(!randMeesage) throw new Error("element not found");
        randMeesage.innerHTML = number;
    } catch (error) {
        console.error(error);
    }
}