interface Click {
  num?: number;
}
const click: Click = {};
function main() {
  try {
    const localStorageUsers = localStorage.getItem("clickNumber");
    const num = localStorageUsers ? JSON.parse(localStorageUsers) : 0;
    click.num = num;
    const num1 = document.querySelector("#number");
    if (!num1) throw new Error("not find number");
    num1.innerHTML=`${click.num}`
    const btn = document.querySelector("#btn");
    if (!btn) throw new Error("not find btn");
    btn?.addEventListener("click", counter);
  } catch (e) {
    console.error(e);
  }
}
function counter() {
  if (click.num != undefined) click.num++;
  console.log(click.num);
  localStorage.setItem("clickNumber", JSON.stringify(click.num));

  const num = document.querySelector("#number");
  if (!num) throw new Error("not find number");
  num.innerHTML=`${click.num}`
}
