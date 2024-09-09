const words:string[]=[];
function handleStart(){
    try{
        const input=document.querySelector('#input-word') as HTMLInputElement
        if(!input) throw new Error('there are no input-word')

            input.addEventListener('keyup',handleInput)
    }catch(e){
        console.log(e);
    }
}
function handleInput(event:any){
    if(event.key=="Enter"){
    words.push(event.target.value);
    console.log(words)
    event.target.value='';  
    }
    renderInput();
}

function renderInput(){
    try{
    const list = document.querySelector('#words')
    if(!list) throw new Error('not found words list');
    list.innerHTML= words.map((string)=>`<li>${string}</li>`).join('')
    }catch(e){
        console.log(e);
    }

}
