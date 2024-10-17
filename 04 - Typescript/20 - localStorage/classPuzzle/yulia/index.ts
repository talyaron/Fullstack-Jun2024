let counter = Number(localStorage.getItem("counter")) || 0;
console.log(`Initial counter: ${counter}`);

function increaseCounter() {
  counter++; 
  localStorage.setItem("counter", JSON.stringify(counter)); 
    console.log(`Counter after click: ${counter}`);
    button.innerText = `${counter}`;
}

const button = document.createElement("button");
document.body.appendChild(button);
button.innerText = `${counter}`;
button.addEventListener("click", increaseCounter);
