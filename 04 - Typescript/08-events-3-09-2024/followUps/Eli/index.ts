const buttonElemnt = document.querySelector("#btn") as HTMLElement;

buttonElemnt.onclick = (event) => {
  alert("i was clicked");
};

const theInput = document.querySelector("#input") as HTMLInputElement;
const outputs = document.querySelector("#output") as HTMLInputElement;
theInput.oninput = (event) => {
  outputs.textContent = theInput.value;
};

document.body.style.textAlign = "center";


const ratsElements = document.querySelectorAll(".rat");

ratsElements.forEach((ratElement) => {
  ratElement.classList.add('moving'); 
  ratElement.addEventListener('mouseenter', () => {
    alert("you failed!");
  });
});
