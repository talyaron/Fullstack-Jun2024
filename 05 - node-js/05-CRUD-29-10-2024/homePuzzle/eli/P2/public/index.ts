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
  velocity:vector; // initial velocity
  angle: number; // initial angle in radians
  speed: number; // initial speed
  maxSpeed: number;
  acceleration:number;
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
    this.velocity={ x: 0, y: 0 };
    this.angle=0; 
    this.speed=0;
    this.maxSpeed=5;
    this.acceleration=0.2;
    this.createElement();
    console.log("eldenRing");

  }

  createElement() {
    console.log("hello?");
    this.boxHtmlElement = document.createElement("div") as HTMLElement;
    this.boxHtmlElement.classList.add("box");
    this.boxHtmlElement.style.position = "absolute";
    this.boxHtmlElement.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) rotate(${this.angle}rad)`;
    this.boxHtmlElement.style.height = `${this.size.y}px`;
    this.boxHtmlElement.style.width = `${this.size.x}px`;
    if (!gameCanvas) console.log("aaaaaaaaaaa");
    gameCanvas.appendChild(this.boxHtmlElement);
  }
  moveME() {}
  translatePosition() {
    
    this.boxHtmlElement.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) rotate(${this.angle}rad)`;
    updateServerPos(this.id, this.pos,this.angle);
  }
}
const playerContainer: Player[] = [];
//const boxes:Box[] =[];
requestAccess();
async function updateServerPos(playerId: string, newPosition: vector,newAngle:number) {
    try {
      const response = await fetch("http://localhost:3000/api/movePlayer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerId: playerId,
          pos: newPosition,
          angle: newAngle,
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
    document.addEventListener("keydown", handKeydown);
    document.addEventListener("keyup", handKeyUp);
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
let keys = {
  w: false,
  s: false,
  a: false,
  d: false
};
setInterval(getPositions, 16);


function handKeydown(event) {
  if (event.key in keys) keys[event.key] = true;
}

function handKeyUp(event) {
  if (event.key in keys) keys[event.key] = false;
}

function updatePos() {
  // Forward and reverse acceleration
  if( playerContainer.length<1) return; 
  if (keys.w) {
    playerContainer[0].speed +=  playerContainer[0].acceleration;
  }
  if (keys.s) {
     playerContainer[0].speed -=  playerContainer[0].acceleration;
  }
  
  // Apply friction
   playerContainer[0].speed *= (1-.1);

  // Cap speed
   playerContainer[0].speed = Math.max(Math.min( playerContainer[0].speed,  playerContainer[0].maxSpeed), - playerContainer[0].maxSpeed);

  // Turning (rotation)
  if(!keys.s){
  if (keys.a)  playerContainer[0].angle -= 0.02; // turn left
  if (keys.d)  playerContainer[0].angle += 0.02; // turn right
  }else
  {
    if (keys.a)  playerContainer[0].angle += 0.02; // turn left
    if (keys.d)  playerContainer[0].angle -= 0.02; // turn right
  }

  // Calculate velocity based on angle and speed
   playerContainer[0].velocity.x = Math.cos( playerContainer[0].angle) *  playerContainer[0].speed;
   playerContainer[0].velocity.y = Math.sin( playerContainer[0].angle) *  playerContainer[0].speed;

  // Update position
   playerContainer[0].pos.x +=  playerContainer[0].velocity.x;
   playerContainer[0].pos.y +=  playerContainer[0].velocity.y;

  // Call a function to update the  playerContainer[0].'s position on screen
   playerContainer[0].translatePosition();
}

function gameLoop() {
  updatePos();
  requestAnimationFrame(gameLoop);
}

gameLoop();
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
          localPlayer.angle = serverPlayer.angle;
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

