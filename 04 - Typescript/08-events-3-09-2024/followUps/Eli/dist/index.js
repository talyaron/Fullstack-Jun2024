var buttonElemnt = document.querySelector("#btn");
buttonElemnt.onclick = function (event) {
    alert("i was clicked");
};
var theInput = document.querySelector("#input");
var outputs = document.querySelector("#output");
theInput.oninput = function (event) {
    outputs.textContent = theInput.value;
};
document.body.style.textAlign = "center";
var ratsElements = document.querySelectorAll(".rat");
ratsElements.forEach(function (ratElement) {
    ratElement.classList.add('moving');
    ratElement.addEventListener('mouseenter', function () {
        alert("you failed!");
    });
});
