async function getHello() {
    try {
        //we will call the server
        console.time('fetching hello');
        const response = await fetch('http://localhost:3000/api/get-hello');
        console.log(response);
        const data = await response.json();
        console.log('data is :');
        console.log(data);
        console.timeEnd('fetching hello');

        const message = data.message;
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector("#yosk");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = `hey yosef <br> ${message} `;
        document.createElement("div")
        


    } catch (error) {
        console.error(error);
    }
}

// getHello(); //calling the function

async function getRandomNumber(){
    try
    {
        const response = await fetch('http://localhost:3000/api/get-randomNumber')
        const data = await response.json();
        console.log(data);
        const x = document.getElementById("show_the_number");
        if(!x) throw new Error('No show_the_number element found');

        x.innerHTML = x.innerHTML + data + "<br>";       


    }
    catch (error) {
        console.error(error);
}
}