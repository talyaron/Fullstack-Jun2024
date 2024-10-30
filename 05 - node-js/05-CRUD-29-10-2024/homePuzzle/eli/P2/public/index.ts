type vector = {
  x: number;
  y: number;
};

const gameCanvas = document.getElementById("canvas") as HTMLElement;

let usersLength=0;
class Player{
    playing:boolean;
    id:string;
    lastContacted:number;
   // myBox:Box;
    Id: string;
    pos: vector;
    size: vector;
    boxHtmlElement: HTMLElement;
    constructor(playing,id,lastContacted,pos )
    {
        this.playing=playing;
        this.id=id;
        this.lastContacted=lastContacted;
       
        this.size = {x:100,y:100}
        this.pos=pos;
        this.createElement();
        console.log("eldenRing")
    }
      
    createElement() {
        console.log("hello?")
        this.boxHtmlElement = document.createElement("div") as HTMLElement;
        this.boxHtmlElement.classList.add("box");
        this.boxHtmlElement.style.position = "absolute";
        this.boxHtmlElement.style.left = `${this.pos.x}px`;
        this.boxHtmlElement.style.top = `${this.pos.y}px`;
        this.boxHtmlElement.style.height = `${this.size.y}px`;
        this.boxHtmlElement.style.width = `${this.size.x}px`;
        if(!gameCanvas) console.log("aaaaaaaaaaa")
        gameCanvas.appendChild(this.boxHtmlElement);
      }
      moveME() {}
}

//const boxes:Box[] =[];
requestAccess();
async function requestAccess() {
  try {
    //we will call the server
   // console.time("getNewUser");
    const response = await fetch("http://localhost:3000/api/getNewUser");
//console.log(response);
    const data = await response.json();
   // console.log(data);
   // console.timeEnd("getNewUser");

    const { message } = data;
    const { newUser } = data;
    // const message = data.message;
    if (!message) throw new Error("No message found");
    if (!newUser) return;
    //const messageElement = document.querySelector("#message");
    //  if(!messageElement) throw new Error('No message element found');
    document.addEventListener('keydown', handleCLick);
        console.log(message,"wwwwww",newUser.id);

   const newPlayer = new Player(true,newUser.id,0,newUser.pos);
    getPositions() ;
  //  accessGranted(newUser.pos.x,newUser.pos.y,newUser.id)
    //  messageElement.innerHTML = message;
  } catch (error) {
    console.error(error);
  }
}


setInterval(getPositions,300)

function handleCLick(event)
{
const keyPressed = event.key;
if (keyPressed=="s")
{console.log("שמו שמים!!!")}
}
async function getPositions() {
try {
    //we will call the server
  //  console.time("getUsers");
    const response = await fetch("http://localhost:3000/api/getUsers");
  //  console.log(response);
    const data = await response.json();
  //  console.log(data);
  //  console.timeEnd("getUsers");

    const { message } = data;
    const { users } = data;
    
    // const message = data.message;
    if (!message) throw new Error("No message found");
    if (!users) return;
    //const messageElement = document.querySelector("#message");
    //  if(!messageElement) throw new Error('No message element found');
  
   
    usersLength= users.length
    //  messageElement.innerHTML = message;
  } catch (error) {
    console.error(error);
  }

}

async function  moveDown(){

}


function createBoxes(x,y,id)
{
  
}

function drawAll()
{

}


