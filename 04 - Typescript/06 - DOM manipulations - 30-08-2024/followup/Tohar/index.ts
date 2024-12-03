interface Item {
    text: string;
    id: number;
}

const i: Item[] = []; 

function addItem(text:string, id:number): void {
    i.push({ text, id });
}

addItem("Hello", 1);
addItem("How are you?", 2);
addItem("Bye", 3);

// function main(items:Item[]): void {
//     const elements = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
//     console.log(elements);

//     elements.forEach(element => {
//         element.style.color = 'red';
//         element.textContent = 'Hello World';
//     });

//     const theOne = document.querySelector('#theOne') as HTMLElement;
//     theOne.style.color = 'blue';
//     theOne.textContent = 'I am special';
// }
