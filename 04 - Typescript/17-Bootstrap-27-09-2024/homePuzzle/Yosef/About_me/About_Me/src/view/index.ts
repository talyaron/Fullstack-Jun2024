import { create_person } from "../controller";
import { yosef } from "../model/information";

export function render_person(){
    try{
    const print_to_screen = document.getElementById("print_to_screen");
    if (!print_to_screen) return console.error();

    print_to_screen.addEventListener("click", () => {
    print_to_screen.innerHTML = create_person(yosef);
    });

    }
      catch (error) {
        console.error(error);
    }
}