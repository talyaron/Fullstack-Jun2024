async function buttonPress() {
  try {
    const response = await fetch("/api/number")
    const data = await response.json()
    if(!data.number) throw new Error("Please check the number something wrong")
    const button = document.querySelector("#button") as HTMLButtonElement
    const divElement = document.querySelector("#divelement") as HTMLDivElement
    if(!button) throw new Error("Button Element not found please check that right now !")
    if(!divElement) throw new Error("Div Element not found please check that right now !")

      button.addEventListener("click", () => {
        divElement.innerHTML = `Number is: ${data.number}`;
      });
    } catch (error) {
    console.error(error)
  }

}

buttonPress()