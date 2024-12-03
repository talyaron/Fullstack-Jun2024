async function getHello() {
  try {
    //we will call the server
    console.time("fetching hello");
    const response = await fetch("http://localhost:3001/api/get-hello");
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.timeEnd("fetching hello");

    const { message } = data;
    if (!message) throw new Error("No message found");

    const messageElement = document.querySelector("#message");
    if (!messageElement) throw new Error("No message element found");

    messageElement.innerHTML = message;
  } catch (error) {
    console.error(error);
  }
}

getHello(); //calling the function
