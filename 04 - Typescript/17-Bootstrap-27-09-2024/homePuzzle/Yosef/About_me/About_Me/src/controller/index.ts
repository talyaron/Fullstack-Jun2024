import { Person } from "../model/information";


export function create_person(person: Person): string{
    const html_text = '<div class="yosef">' + `My name is: ${person.name} <br> I am: ${person.age} yers old <br> i am live in ${person.city} <br> My hobbies is : ${person.hobbies}</div>`;
    return html_text;

}

export function change_pic(){
    try{
    const pic = document.getElementById("how_are_you") as HTMLImageElement
    if (!pic) return console.error();

    pic.onclick = () => {
        pic.src = "./src/pics/yosef.jpg"
    }

    }
    catch(error){
        console.error(error);
    }
    
}