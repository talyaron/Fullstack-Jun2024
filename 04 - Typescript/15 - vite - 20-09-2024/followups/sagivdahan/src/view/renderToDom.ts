import { getRandomNumber } from "../Controller";

 export function renderToDom(){
    try {
        const element = document.getElementById("number");
        if(!element) throw new Error("adfasdtaert");
        const number = getRandomNumber();
        element.textContent = `${number}`;
        console.log("כשאלפשגםאחשגלםא")
    } catch (error) {
        console.error(error)
    }
}