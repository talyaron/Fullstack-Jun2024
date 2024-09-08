interface Comp{
    title:string,
    year:number,
    director:string,
    rating:number,
    imageUrl: string,
    color?:string
}
const allComp:Comp[]= [];
function main() {
  try {
    const theForm = document.querySelector("#the-form");
    if (!theForm) throw new Error("not find #the-form");

    theForm.addEventListener("submit", createNewComp);
  } catch (e) {
    console.log(e);
  }

}
function removeBtn(){
  this.parentElement.classList.add('none');
  allComp.pop();

}
function createNewComp(event: Event) {
  try {
    event.preventDefault();
    if (!(event.target instanceof HTMLFormElement))
      throw new Error("event is null");
    const data:Comp = {
        title:'',
        year:0,
        director:'',
        rating:0,
        imageUrl: '',
        color:''
    };
    
    for (let i = 0; i < (event.target.length-1); i++) {
        const inputElement = event.target[i] as HTMLInputElement;
        data[inputElement.name] = inputElement.value;
        
    }
    if(data.rating==5){
      data.color="gold";
    }
    if(data.rating==1){
      data.color="red";
    }
    allComp.push(data);
    renderComps();


    
    
  } catch (e) {
    console.log(e);
  }
}

function renderComps(){
  try {


    const allCompToPrint= document.querySelector('#allComp');
    if(!allCompToPrint) throw new Error ('not find #allCompToPrint')
      allComp.sort((comp,secComp)=>secComp.rating-comp.rating)
  const toPrint =allComp.map((comp)=>`<div class="oneComp ${comp.color}"><h1>${comp.title}</h1> 
  <img src="${comp.imageUrl}" alt="${comp.title}"> 
  <h2> IMDB: ${comp.rating} <br> year: ${comp.year}</h2>
  <h3> director: ${comp.director}</h3>
  <button id="deleteBtn" class="deleteBtn">X</button> </div> `).join('');
  allCompToPrint.innerHTML= toPrint;

  const deleteBtn= document.querySelectorAll('#deleteBtn')
  if (!deleteBtn) throw new Error("not find #deleteBtn");
  deleteBtn.forEach((btn)=>btn.addEventListener("click",removeBtn))

  } catch (error) {
    console.log(error);
  }
}

