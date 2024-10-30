async function submitted(event) {
  try {
    event.preventDefault();
    const word = event.target.word.value;
    const img = event.target.img.value;
    console.log(word);

    const response = await fetch("http://localhost:3000/api/send-word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word ,img}), //data to send (to string format) )
    });
    const data = await response.json();
    console.log(data);
    renderWords() ;
  } catch (error) {
    console.error(error);
  }
}
setInterval(renderWords, 600);

async function renderWords() {
    try {
        //we will call the server
      //  console.time('renderWords');
        const response = await fetch('http://localhost:3000/api/renderWords');
        console.log(response);
        const data = await response.json();
        console.log(data);
      const {message} = data;
        if(!message) throw new Error('No message found');


        const messageElement = document.querySelector("#message");
        if(!messageElement) throw new Error('No message element found');
     console.log(data);
        messageElement.innerHTML = message;

    } catch (error) {
        console.error(error);
    }
}