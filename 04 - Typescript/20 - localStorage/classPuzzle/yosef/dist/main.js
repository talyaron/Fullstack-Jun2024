var count_cliked = 0;
var localStorageUsers = localStorage.getItem('button_clicked');
var total = Number(localStorage.getItem('total_clicked')) || 0;
function createButton() {
    var main = document.getElementById("main");
    var btn = document.createElement('button');
    main === null || main === void 0 ? void 0 : main.appendChild(btn);
    btn.style.backgroundColor = 'yellow';
    btn.textContent = 'Click me';
    btn.style.width = '90px';
    btn.style.height = '60px';
    btn.id = 'btn';
    btn.addEventListener('click', btn_counter);
}
function btn_counter() {
    count_cliked += 1;
    total += 1;
    var counter = document.getElementById("counter_clicked");
    if (!counter)
        throw new Error;
    counter.innerHTML = "You Clicked : " + count_cliked + " times <br> Total Clicked is: " + total;
    localStorage.setItem('total_clicked', total);
}
createButton();
