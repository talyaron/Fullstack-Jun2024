type vector = {
  x: number;
  y: number;
};

const gameCanvas = document.getElementById("canvas") as HTMLElement;
const elementSize = gameCanvas.getBoundingClientRect();
const width = elementSize.width;
const height = elementSize.height;

let usersLength = 0;
class Player {
  playing: boolean;
  id: string;
  lastContacted: number;
  // myBox:Box;
  Id: string;
  pos: vector;
  size: vector;
  boxHtmlElement: HTMLElement;
  constructor(playing, id, lastContacted, pos) {
    this.playing = playing;
    this.id = id;
    this.lastContacted = lastContacted;
    this.size = { x: 100, y: 100 };
    this.pos = pos;
    this.createElement();
    console.log("eldenRing");
  }

  createElement() {
    console.log("hello?");
    this.boxHtmlElement = document.createElement("div") as HTMLElement;
    this.boxHtmlElement.classList.add("box");
    this.boxHtmlElement.style.position = "absolute";
    this.boxHtmlElement.style.left = `${this.pos.x}px`;
    this.boxHtmlElement.style.top = `${this.pos.y}px`;
    this.boxHtmlElement.style.height = `${this.size.y}px`;
    this.boxHtmlElement.style.width = `${this.size.x}px`;
    if (!gameCanvas) console.log("aaaaaaaaaaa");
    gameCanvas.appendChild(this.boxHtmlElement);
  }
  moveME() {}
  translatePosition() {
    this.boxHtmlElement.style.left = `${this.pos.x}px`;
    this.boxHtmlElement.style.top = `${this.pos.y}px`;
    updateServerPos(this.id, this.pos);
  }
}
const playerContainer: Player[] = [];
//const boxes:Box[] =[];
requestAccess();
async function updateServerPos(playerId: string, newPosition: vector) {
    try {
      const response = await fetch("http://localhost:3000/api/movePlayer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerId: playerId,
          pos: newPosition,
        }),
      });
  
      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error updating position:", error);
    }
  }
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
    document.addEventListener("keydown", handleCLick);
    console.log(message, "wwwwww", newUser.id);

    const newPlayer = new Player(true, newUser.id, 0, newUser.pos);
    playerContainer.push(newPlayer);
    getPositions();
    //  accessGranted(newUser.pos.x,newUser.pos.y,newUser.id)
    //  messageElement.innerHTML = message;
  } catch (error) {
    console.error(error);
  }
}

setInterval(getPositions, 16);

function handleCLick(event) {
  const keyPressed = event.key;
  if (keyPressed == "s"&&height> playerContainer[0].pos.y +playerContainer[0].size.y) {
    playerContainer[0].pos.y += 50;
    playerContainer[0].translatePosition();
  }
  if (keyPressed == "w"&&playerContainer[0].pos.y > 0 ) {
    playerContainer[0].pos.y -= 50;
    playerContainer[0].translatePosition();
  }
}

async function getPositions() {
    try {
      // Call the server to get users
      const response = await fetch("http://localhost:3000/api/getUsers");
      const data = await response.json();
  
      const { message, users } = data;
  
      if (!message) throw new Error("No message found");
      if (!users) return;
  
      console.log(users);
  
      users.forEach(serverPlayer => {
        // Find if the player already exists in the local playerContainer
        const localPlayer = playerContainer.find(player => player.id === serverPlayer.id);
  
        if (localPlayer) {
          localPlayer.pos = serverPlayer.pos;
          localPlayer.translatePosition(); 
        } else {
         if  ( playerContainer.length<2){
          const newPlayer = new Player(false, serverPlayer.id, 0, serverPlayer.pos);
          playerContainer.push(newPlayer);}
        }
      });
  
      console.log(playerContainer);
    } catch (error) {
      console.error(error);
    }
  }
async function moveDown() {}

function createBoxes(x, y, id) {}

function drawAll() {}
