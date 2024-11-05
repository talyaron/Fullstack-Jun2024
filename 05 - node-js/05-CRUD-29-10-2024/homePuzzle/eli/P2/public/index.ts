type vector = {
  x: number;
  y: number;
};

const gameCanvas = document.getElementById("canvas") as HTMLElement;
const elementSize = gameCanvas.getBoundingClientRect();
const width = elementSize.width;
const height = elementSize.height;

let usersLength = 0;

class Bullet {
  id: string;
  velocity: vector; 
  speed: number; 
  maxSpeed: number;
  acceleration: number;
  angle: number; 
  pos: vector;
  size: vector;
  boxHtmlElement: HTMLElement;
  myCreatorID:string
  constructor(id:string,pos: vector, angle: number,cID:string) {
    this.id=id;
    this.pos = pos;
    this.maxSpeed = 10;
    this.acceleration = 0.3;
    this.velocity = { x: 0, y: 0 };
    this.angle = angle; // Set the angle to the bullet's angle
    this.speed = this.maxSpeed; // Set initial speed to maxSpeed
    this.size = { x: 40, y: 20 }; // Define bullet size
    this.myCreatorID= cID;
    this.createElement();
  }

  createElement() {
    this.boxHtmlElement = document.createElement("div") as HTMLElement;
    this.boxHtmlElement.classList.add("bullet"); // Use a different class for bullets
    this.boxHtmlElement.style.position = "absolute";
    this.boxHtmlElement.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) rotate(${this.angle}rad)`;
    this.boxHtmlElement.style.height = `${this.size.y}px`;
    this.boxHtmlElement.style.width = `${this.size.x}px`;
    gameCanvas.appendChild(this.boxHtmlElement);
  }

  updatePosition() {
    // Update the position based on speed and angle
    this.pos.x += this.speed * Math.cos(this.angle);
    this.pos.y += this.speed * Math.sin(this.angle);
    this.boxHtmlElement.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) rotate(${this.angle}rad)`;

    // Check for collision with other tanks
    if (playerContainer.length > 1) {
        playerContainer.forEach(player => {
            if (player.id === this.myCreatorID) return;

            const collide = this.checkCollision(player);
            if (collide) {
                console.log("HIT!", collide);
                killUser(player.id); 
            }
        });
      }
  }

  projectOntoAxis(vertices: { x: number; y: number }[], axis: { x: number; y: number }) {
    let min = Infinity;
    let max = -Infinity;
    for (const vertex of vertices) {
      const projection = vertex.x * axis.x + vertex.y * axis.y; // Dot product
      min = Math.min(min, projection);
      max = Math.max(max, projection);
    }
    return { min, max };
  }

  // Check collision with another rectangle using SAT
  checkCollision(other: Player): boolean {
    const axes = this.getAxes(other);
    if(this.myCreatorID===other.id) {return false;}
    for (const axis of axes) {
      const projectionA = this.projectOntoAxis(this.getVertices(), axis);
      const projectionB = this.projectOntoAxis(other.getVertices(), axis);

      if (projectionA.max < projectionB.min || projectionB.max < projectionA.min) {
        // No overlap on this axis, so no collision
        return false;
      }
    }
    // Overlaps on all axes means there is a collision
    return true;
  }
  getVertices(): { x: number; y: number }[] {
    const cos = Math.cos(this.angle);
    const sin = Math.sin(this.angle);
    const halfWidth = this.size.x / 2;
    const halfHeight = this.size.y / 2;

    return [
      { x: this.pos.x + cos * -halfWidth - sin * -halfHeight, y: this.pos.y + sin * -halfWidth + cos * -halfHeight },
      { x: this.pos.x + cos * halfWidth - sin * -halfHeight, y: this.pos.y + sin * halfWidth + cos * -halfHeight },
      { x: this.pos.x + cos * halfWidth - sin * halfHeight, y: this.pos.y + sin * halfWidth + cos * halfHeight },
      { x: this.pos.x + cos * -halfWidth - sin * halfHeight, y: this.pos.y + sin * -halfWidth + cos * halfHeight },
    ];
  }
  // Helper: Get the axes (normals to edges) for both rectangles
  getAxes(other: Player): { x: number; y: number }[] {
    const verticesA = this.getVertices();
    const verticesB = other.getVertices();

    const edges = [
      { x: verticesA[1].x - verticesA[0].x, y: verticesA[1].y - verticesA[0].y },
      { x: verticesA[1].x - verticesA[3].x, y: verticesA[1].y - verticesA[3].y },
      { x: verticesB[1].x - verticesB[0].x, y: verticesB[1].y - verticesB[0].y },
      { x: verticesB[1].x - verticesB[3].x, y: verticesB[1].y - verticesB[3].y },
    ];

    return edges.map((edge) => ({ x: -edge.y, y: edge.x })); // Get perpendicular (normal) for each edge
  }
  // Check if the bullet is out of bounds
  isOutOfBounds(canvasWidth: number, canvasHeight: number): boolean {
    return (
      this.pos.x < 0 || 
      this.pos.x > canvasWidth || 
      this.pos.y < 0 || 
      this.pos.y > canvasHeight
    );
  }
}
function fetchBullets() {
  fetch("/api/getBullets")
  .then(response => response.json())
  .then(data => {
       bullets = data.bullets.map(b => new Bullet(b.id, b.pos, b.angle,b.myCreatorID));
      renderBullets();
  });
}
function updateBullets() {
  bullets.forEach(bullet => bullet.updatePosition());
  renderBullets();
}
let  bullets:Bullet[]=[];
function renderBullets() {

  const existingBullets = gameCanvas.getElementsByClassName("bullet");
  while (existingBullets.length > 0) {
      existingBullets[0].remove(); 
  }


  bullets.forEach((bullet, index) => {
    if (bullet.pos.x < 0 || bullet.pos.x > width || bullet.pos.y < 0 || bullet.pos.y > height) {
     // console.log("Bullet out of bounds, deleting...");
      
      deleteBullet(bullet, index); 
      console.log(bullets);
      return; 
    }
    
    const bulletElement = document.createElement("div");
    bulletElement.classList.add("bullet");
    bulletElement.style.position = "absolute";
    bulletElement.style.transform = `translate(${bullet.pos.x}px, ${bullet.pos.y}px) rotate(${bullet.angle}rad)`;
    bulletElement.style.width = "40px"; 
    bulletElement.style.height = "20px"; 
    bulletElement.style.borderRadius = "20%"; 

    // Append the bullet element to the canvas
    gameCanvas.appendChild(bulletElement);
  });
}


class Player {
  playing: boolean;
  id: string;
  lastContacted: number;
  velocity:vector; // initial velocity
  angle: number; // initial angle in radians
  speed: number; // initial speed
  maxSpeed: number;
  acceleration:number;
  pos: vector;
  size: vector;
  boxHtmlElement: HTMLElement;
  dead:boolean;

  constructor(playing, id, lastContacted, pos) {
    this.playing = playing;
    this.id = id;
    this.lastContacted = lastContacted;
    this.size = { x: 100, y: 80 };
    this.pos = pos;
    this.velocity={ x: 0, y: 0 };
    this.angle=0; 
    this.speed=0;
    this.maxSpeed=5;
    this.acceleration=0.2;
    this.dead=false;
    this.createElement();
  }

  createElement() {
    console.log("hello?");
    this.boxHtmlElement = document.createElement("div") as HTMLElement;
    this.boxHtmlElement.classList.add("box");
    if(playerContainer.length<1){
    this.boxHtmlElement.id= "green";}
    else this.boxHtmlElement.id= "yellow";
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
  getVertices(): { x: number; y: number }[] {
    const cos = Math.cos(this.angle);
    const sin = Math.sin(this.angle);
    const halfWidth = this.size.x / 2;
    const halfHeight = this.size.y / 2;

    return [
      { x: this.pos.x + cos * -halfWidth - sin * -halfHeight, y: this.pos.y + sin * -halfWidth + cos * -halfHeight },
      { x: this.pos.x + cos * halfWidth - sin * -halfHeight, y: this.pos.y + sin * halfWidth + cos * -halfHeight },
      { x: this.pos.x + cos * halfWidth - sin * halfHeight, y: this.pos.y + sin * halfWidth + cos * halfHeight },
      { x: this.pos.x + cos * -halfWidth - sin * halfHeight, y: this.pos.y + sin * -halfWidth + cos * halfHeight },
    ];
  }

  // Helper: Project vertices onto an axis and return min and max projection values
  projectOntoAxis(vertices: { x: number; y: number }[], axis: { x: number; y: number }) {
    let min = Infinity;
    let max = -Infinity;
    for (const vertex of vertices) {
      const projection = vertex.x * axis.x + vertex.y * axis.y; // Dot product
      min = Math.min(min, projection);
      max = Math.max(max, projection);
    }
    return { min, max };
  }

  // Check collision with another rectangle using SAT
  checkCollision(other: Player): boolean {
    const axes = this.getAxes(other);

    for (const axis of axes) {
      const projectionA = this.projectOntoAxis(this.getVertices(), axis);
      const projectionB = this.projectOntoAxis(other.getVertices(), axis);

      if (projectionA.max < projectionB.min || projectionB.max < projectionA.min) {
        // No overlap on this axis, so no collision
        return false;
      }
    }
    // Overlaps on all axes means there is a collision
    return true;
  }

  // Helper: Get the axes (normals to edges) for both rectangles
  getAxes(other: Player): { x: number; y: number }[] {
    const verticesA = this.getVertices();
    const verticesB = other.getVertices();

    const edges = [
      { x: verticesA[1].x - verticesA[0].x, y: verticesA[1].y - verticesA[0].y },
      { x: verticesA[1].x - verticesA[3].x, y: verticesA[1].y - verticesA[3].y },
      { x: verticesB[1].x - verticesB[0].x, y: verticesB[1].y - verticesB[0].y },
      { x: verticesB[1].x - verticesB[3].x, y: verticesB[1].y - verticesB[3].y },
    ];

    return edges.map((edge) => ({ x: -edge.y, y: edge.x })); // Get perpendicular (normal) for each edge
  }

  fireBullet(id:string) {
    // Calculate the position in front of the tank
    const bulletPos = {
      x: this.pos.x + 150 * Math.cos(this.angle), // Spawn in front of the player
      y: this.pos.y + 150 * Math.sin(this.angle)
  };

  // Send a POST request to create a bullet on the server
  fetch('/api/createBullet', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          pos: bulletPos,
          angle: this.angle,
          id : id,
      }),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data.message, data.bullet);
      // Optionally, create a bullet element in the client UI as well
      if (data.bullet) {
        const newBullet = new Bullet(data.bullet.id, data.bullet.pos, data.bullet.angle,data.bullet.cID);
        // Optionally, you can push the new bullet into an array to manage bullets
        bullets.push(newBullet);
    }
  })
  .catch(error => console.error('Error creating bullet:', error));
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
     // console.log("Server response:", result);
     const { dead }=result;
     if (dead)
     {
      userDead(playerId);
     }
    } catch (error) {
      console.error("Error updating position:", error);
    }
  }

  let waitTime= 10;
  let canShoot=true
  setInterval(slowTime,300);
  function slowTime()
  {
    if(waitTime>=1){
    waitTime-=1;}
    else {canShoot=true
      waitTime=10;
    }

  }
 function userDead(playerId)
 {
  console.log("i died");
  const foundDeadUser =playerContainer.find(player=>playerId===player.id);
  if(!foundDeadUser){ console.log("no such user on client!");return;}
  foundDeadUser.dead =true;
  changeColor(foundDeadUser);
 }
function changeColor(user:Player)
{
  user.boxHtmlElement.id="gray";
}

  async function killUser(id) {
    try {
      const response = await fetch("http://localhost:3000/api/killUser",
        {
          method:"POST",
          headers:{
             "Content-Type": "application/json"
          },
          body:JSON.stringify({ id }),
        });
      //console.log(response);
      const data = await response.json();
      // console.log(data);
      // console.timeEnd("getNewUser");
  
      const { message } = data;
      // const message = data.message;

      console.log(message);

      //  accessGranted(newUser.pos.x,newUser.pos.y,newUser.id)
      //  messageElement.innerHTML = message;
    } catch (error) {
      console.error(error);
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
   // console.log(message, "wwwwww", newUser.id);

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
  d: false,
  g:false
};
setInterval(getPositions, 16);


function handKeydown(event) {
  if (event.key in keys) keys[event.key] = true;
}

function handKeyUp(event) {
  if (event.key in keys) keys[event.key] = false;
}

function updatePos() {
  if (playerContainer.length < 1) return;

  // Check collision between the first two tanks (if they exist)
  let colliding = false;
  if (playerContainer.length > 1) {
    colliding = playerContainer[0].checkCollision(playerContainer[1]);
    if (colliding) {
      console.log("Collision detected:", colliding);

      // Push tanks apart slightly to avoid sticking
      const overlapX = (playerContainer[0].pos.x - playerContainer[1].pos.x) * 0.1;
      const overlapY = (playerContainer[0].pos.y - playerContainer[1].pos.y) * 0.1;

      playerContainer[0].pos.x += overlapX;
      playerContainer[0].pos.y += overlapY;
      
      playerContainer[1].pos.x -= overlapX;
      playerContainer[1].pos.y -= overlapY;

      // Reduce speed for both tanks on collision to simulate bounce
      playerContainer[0].speed *= 0.5;
      playerContainer[1].speed *= 0.5;
    }
  }

  const dead = playerContainer[0].dead;

  // Forward and reverse acceleration
  if (!colliding || (colliding && keys.s)) {
    if (keys.w && !dead) {
      playerContainer[0].speed += playerContainer[0].acceleration;
      if (colliding) { 
        playerContainer[0].speed = 0; // Stop further forward movement if colliding
      }
    }
    if (keys.s && !dead) {
      playerContainer[0].speed -= playerContainer[0].acceleration;
      if (colliding) { 
        playerContainer[0].speed = 0; // Stop further backward movement if colliding
      }
    }
  } else {
    playerContainer[0].speed = 0; // Stop forward movement on collision
  }

  // Apply friction to gradually reduce speed over time
  playerContainer[0].speed *= 0.9;

  // Cap speed to the tank's maximum and minimum allowed speeds
  playerContainer[0].speed = Math.max(
    Math.min(playerContainer[0].speed, playerContainer[0].maxSpeed),
    -playerContainer[0].maxSpeed
  );

  // Turning (rotation) is always allowed
  if (!keys.s) {
    if (keys.a && !colliding && !dead) playerContainer[0].angle -= 0.02; // turn left
    if (keys.d && !colliding && !dead) playerContainer[0].angle += 0.02; // turn right
  } else {
    if (keys.a && !colliding && !dead) playerContainer[0].angle += 0.02; // reverse turn
    if (keys.d && !colliding && !dead) playerContainer[0].angle -= 0.02;
  }

  // Calculate new position based on speed and angle
  const newPosX = playerContainer[0].pos.x + playerContainer[0].speed * Math.cos(playerContainer[0].angle);
  const newPosY = playerContainer[0].pos.y + playerContainer[0].speed * Math.sin(playerContainer[0].angle);

  // Boundary checks for collision with another tank
  if (colliding) {
    playerContainer[0].pos.x -= playerContainer[0].speed * Math.cos(playerContainer[0].angle);
    playerContainer[0].pos.y -= playerContainer[0].speed * Math.sin(playerContainer[0].angle);
  } else {
    // Boundary checks with screen edges
    const tankWidth = playerContainer[0].size.x;
    const tankHeight = playerContainer[0].size.y;

    if (newPosX < 0) {
      playerContainer[0].pos.x = 0;
    } else if (newPosX + tankWidth > width) {
      playerContainer[0].pos.x = width - tankWidth;
    } else {
      playerContainer[0].pos.x = newPosX;
    }

    if (newPosY < 0) {
      playerContainer[0].pos.y = 0;
    } else if (newPosY + tankHeight > height) {
      playerContainer[0].pos.y = height - tankHeight;
    } else {
      playerContainer[0].pos.y = newPosY;
    }
  }

  // Shooting
  if (keys.g && canShoot) {
    playerContainer[0].fireBullet(playerContainer[0].id);
    canShoot = false;
  }

  playerContainer[0].translatePosition(); // Update the HTML element position
}



function gameLoop() {
  updateBullets(); 
 //   renderBullets(); 

  updatePos();
  requestAnimationFrame(gameLoop);
}

gameLoop();

async function deleteBullet(bullet:Bullet, index: number) {
  try {
    // Send a POST request to delete a bullet on the server
    const response = await fetch('/api/deleteBullet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index: index, // Use bullet's unique identifier, not its index in the array
      }),
    });
    
    // Optionally handle non-OK responses
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }else{ 
      const data = await response.json();
      console.log(data.message);
    }
  } catch (error) {
    console.error('Error deleting bullet:', error);
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
      fetchBullets();
     // console.log(users);
  
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
  
     // console.log(playerContainer);
    } catch (error) {
      console.error(error);
    }
  }

