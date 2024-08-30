function test() {
  const items: string[] = ['banana', 'pizza', 'document', 'followups']
  const array = document.getElementById("array") as HTMLElement;
  items.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    p.style.color = "blue";
    p.style.fontSize = "31px"
    p.style.fontFamily = "bold"
    array?.appendChild(p)
  });
}

test()