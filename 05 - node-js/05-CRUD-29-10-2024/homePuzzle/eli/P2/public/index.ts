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
    constructor(playing,id,lastContacted)
    {
        this.playing=playing;
        this.id=id;
        this.lastContacted=lastContacted;
    }
}
const boxes:Box[] =[];
requestAccess();
async function requestAccess() {
  try {
    //we will call the server
    console.time("getNewUser");
    const response = await fetch("http://localhost:3000/api/getNewUser");
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.timeEnd("getNewUser");

    const { message } = data;
    const { newUser } = data;
    // const message = data.message;
    if (!message) throw new Error("No message found");
    if (!newUser) return;
    //const messageElement = document.querySelector("#message");
    //  if(!messageElement) throw new Error('No message element found');
    console.log(message,"wwwwww",newUser.id);
   const newPlayer = new Player(true,newUser.id,0);
    getPositions() ;
  //  accessGranted(newUser.pos.x,newUser.pos.y,newUser.id)
    //  messageElement.innerHTML = message;
  } catch (error) {
    console.error(error);
  }
}
setInterval(getPositions,300)

async function getPositions() {
try {
    //we will call the server
    console.time("getUsers");
    const response = await fetch("http://localhost:3000/api/getUsers");
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.timeEnd("getUsers");

    const { message } = data;
    const { users } = data;
    
    // const message = data.message;
    if (!message) throw new Error("No message found");
    if (!users) return;
    //const messageElement = document.querySelector("#message");
    //  if(!messageElement) throw new Error('No message element found');
  
        gameCanvas.innerHTML="";
    users.forEach(element => {
        console.log(message,"wwwwww",element.id);
        createBoxes(element.pos.x,element.pos.y,element.id)
    });
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
    const box = new Box(id,{ x: x, y: y }, { x: 100, y: 100 });
    boxes.push(box);
    console.log(box);
}

function drawAll()
{

}
class Box {
  Id: string;
  pos: vector;
  size: vector;
  boxHtmlElement: HTMLElement;
  constructor(id:string,pos: vector, size: vector) {
    this.Id = id;
    this.pos = pos;
    this.size = size;
    this.createElement();
  }
  createElement() {
    this.boxHtmlElement = document.createElement("div") as HTMLElement;
    this.boxHtmlElement.id = "box";
    this.boxHtmlElement.style.position = "relative";
    this.boxHtmlElement.style.left = `${this.pos.x}px`;
    this.boxHtmlElement.style.top = `${this.pos.y}px`;
    this.boxHtmlElement.style.height = `${this.size.y}px`;
    this.boxHtmlElement.style.width = `${this.size.x}px`;
    gameCanvas.appendChild(this.boxHtmlElement);
  }
  moveME() {}
}

