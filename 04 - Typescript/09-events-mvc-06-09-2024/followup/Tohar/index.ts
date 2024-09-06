const list:string[] = [];

function handleEnter(): void {
    try {
        const input = document.getElementById("input-word");
        if(!input) throw new Error("Input field not found");

        input.addEventListener("keyup", handleInput);

    } catch (e) {
        console.error("Error", e);
    }
};


function handleInput(event:any): void {

    if(event.key === "Enter") {
        const newWord = event.target.value;
        console.log(newWord);

        if (newWord) {           
            list.push(newWord);
            event.target.value = '';
            console.log("the array: " + list);
        }
    }
    renderList(list);
};


function renderList(list:string[]):void {
    try {
    const listItem = document.getElementById("items") as HTMLUListElement;
    if (!listItem) throw new Error("list item not found");

    listItem.innerHTML = list.map((item) => `<li>${item}</li>`).join('');
    } catch(e) {
        console.error(e);
    }
}