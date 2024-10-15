"use strict";

// var count_cliked = 0;
// const localStorageUsers2 = localStorage.getItem('button_clicked');
// const x = localStorageUsers2 ? JSON.parse(localStorageUsers2) : [];
// var total = Number((localStorageUsers2));
// function createButton(){
//     const main = document.getElementById("main");
//     const btn = document.createElement('button');
//     main?.appendChild(btn);
//     btn.textContent = 'Click me'
//     document.body.appendChild(btn);
//     btn.style.width = '90px'
//     btn.style.height = '60px';
//     btn.style.backgroundColor = 'red';
//     btn.id = 'btn';
//     btn.addEventListener('click', onClick);
// }
// function onClick(){
//     const btn = document.getElementById("btn");
//     if (!btn) throw new Error
//     btn.style.backgroundColor = 'yellow';
//     btn_counter();
//     btn.textContent = "Click me";
//     console.log(x);
// }
// function btn_counter(){
//     count_cliked += 1;
//     console.log(total);
//     total = total + 1;;
//     const counter = document.getElementById("counter_clicked")
//     if (!counter) throw new Error
//     counter.innerHTML = `You Clicked : ${count_cliked} times --- total is ${total}`;
//     localStorage.setItem('button_clicked', JSON.stringify(count_cliked));
//     localStorage.setItem('total_cliked',String(total));
// }
// createButton();
var count_cliked = 0;
var localStorageUsers2 = localStorage.getItem('button_clicked');
var x = localStorageUsers2 ? JSON.parse(localStorageUsers2) : [];
var total = Number(localStorage.getItem('total_clicked')) || 0; // קריאת total מה-localStorage

function createButton() {
  var main = document.getElementById("main");
  var btn = document.createElement('button');
  main === null || main === void 0 ? void 0 : main.appendChild(btn);
  btn.textContent = 'Click me';
  document.body.appendChild(btn);
  btn.style.width = '90px';
  btn.style.height = '60px';
  btn.id = 'btn';
  btn.addEventListener('click', onClick);
}

function onClick() {
  var btn = document.getElementById("btn");
  if (!btn) throw new Error();
  btn.style.backgroundColor = 'yellow';
  btn_counter();
}

function btn_counter() {
  count_cliked += 1;
  total += 1; // עדכון total

  var counter = document.getElementById("counter_clicked");
  if (!counter) throw new Error();
  counter.innerHTML = "You Clicked : " + count_cliked + " times <br> Total Clicked is: " + total;
  localStorage.setItem('button_clicked', JSON.stringify(count_cliked));
  localStorage.setItem('total_clicked', total); // שמירה של total ב-localStorage
}

createButton();