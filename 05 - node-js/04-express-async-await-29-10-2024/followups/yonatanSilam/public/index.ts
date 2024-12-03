async function getHello() {
  try {
    //we will call the server
    // console.time('fetching hello');
    const response = await fetch("http://localhost:3000/api/get-hello");
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    // console.timeEnd('fetching hello');

    const { message } = data;
    if (!message) throw new Error("No message found");

    const messageElement = document.querySelector("#message");
    if (!messageElement) throw new Error("No message element found");

    messageElement.innerHTML = message;
  } catch (error) {
    console.error(error);
  }
}

async function getRandomNumber() {
  try {
    const response = await fetch("http://localhost:3000/api/get-random-number");
    const data = await response.json();

    const { message } = data;
    if (!message) throw new Error("No message found");

    const RandomNumber = document.querySelector("#number");
    if (!RandomNumber) throw new Error("No Random Number found");
    if(message > 500) allBlue();
    if(message < 500) allRed();
    if(message == 1) allGreen();
    RandomNumber.innerHTML = message;
  } catch (error) {
    console.error(error);
  }
}
getNumber();
function getNumber() {
  try {
    const btn = document.querySelector("#getNumber");
    if (!btn) throw new Error("not btn found");
    btn.addEventListener("click", getRandomNumber);
  } catch (error) {
    console.error(error);
  }
}

getHello(); //calling the function

function allBlue() {
    document.body.style.backgroundColor= 'blue';
}
function allRed() {
    document.body.style.backgroundColor= 'red';
}
function allGreen() {
    document.body.style.backgroundColor= 'green';
}

