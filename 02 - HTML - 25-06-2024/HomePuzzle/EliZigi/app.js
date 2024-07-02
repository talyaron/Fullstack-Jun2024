const container1 = document.querySelector(".content-container-1");
const button1 = document.querySelector(".button1");

button1.addEventListener("click", () => {
    container1.classList.toggle("toggle");
    container3.classList.remove("toggle");
    container2.classList.remove("toggle");
});
const container2 = document.querySelector(".content-container-2");
const button2 = document.querySelector(".button2");

button2.addEventListener("click", () => {
    container2.classList.toggle("toggle");
    container1.classList.remove("toggle");
    container3.classList.remove("toggle");
});
const container3 = document.querySelector(".content-container-3");
const button3 = document.querySelector(".button3");

button3.addEventListener("click", () => {
    container3.classList.toggle("toggle");
    container2.classList.remove("toggle");
    container1.classList.remove("toggle");
});

const container4 = document.querySelector(".content-container-4");
const button4 = document.querySelector(".button4");

button4.addEventListener("click", () => {
    container4.classList.toggle("toggle");
  
});