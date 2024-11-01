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

  constructor(id:string,pos: vector, angle: number) {
    this.id=id;
    this.pos = pos;
    this.maxSpeed = 10;
    this.acceleration = 0.3;
    this.velocity = { x: 0, y: 0 };
    this.angle = angle; // Set the angle to the bullet's angle
    this.speed = this.maxSpeed; // Set initial speed to maxSpeed
    this.size = { x: 40, y: 20 }; // Define bullet size
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
       bullets = data.bullets.map(b => new Bullet(b.id, b.pos, b.angle));
      renderBullets();
  });
}
function updateBullets() {
  bullets.forEach(bullet => bullet.updatePosition());
  renderBullets();
}
let  bullets:Bullet[]=[];
function renderBullets() {
  // Get the canvas element

  // Clear existing bullets from the canvas
  const existingBullets = gameCanvas.getElementsByClassName("bullet");
  while (existingBullets.length > 0) {
      existingBullets[0].remove(); // Remove each existing bullet element
  }

  // Create and position new bullet elements
  const toRemove = [];
  bullets.forEach((bullet ,index)=> {
    if(bullet.pos.x<0 ||bullet.pos.x>width||bullet.pos.y<0||bullet.pos.y>height)
      {
     console.log("past my prime");
    deleteBullet(bullet,index);
     return;
      }
      const bulletElement = document.createElement("div");
      bulletElement.classList.add("bullet");
      bulletElement.style.position = "absolute";
      bulletElement.style.transform = `translate(${bullet.pos.x}px, ${bullet.pos.y}px) rotate(${bullet.angle}rad)`;
      bulletElement.style.width = "40px"; // Set bullet width
      bulletElement.style.height = "20px"; // Set bullet height
      
      bulletElement.style.backgroundColor = "red"; // Set bullet color
      bulletElement.style.borderRadius = "50%"; // Make it round

      // Append the bullet element to the canvas
      gameCanvas.appendChild(bulletElement);
  });
}

async function deleteBullet(bullet: Bullet, index: number) {
  try {
    // Send a POST request to delete a bullet on the server
    const response = await fetch('/api/deleteBullet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index: index,
        bullet: bullet
      }),
    });
    
    // Optionally handle non-OK responses
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error deleting bullet:', error);
  }
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
  Id: string;
  pos: vector;
  size: vector;
  boxHtmlElement: HTMLElement;
 
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

  fireBullet() {
    // Calculate the position in front of the tank
    const bulletPos = {
      x: this.pos.x + 20 * Math.cos(this.angle), // Spawn in front of the player
      y: this.pos.y + 20 * Math.sin(this.angle)
  };

  // Send a POST request to create a bullet on the server
  fetch('/api/createBullet', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          pos: bulletPos,
          angle: this.angle
      }),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data.message, data.bullet);
      // Optionally, create a bullet element in the client UI as well
      if (data.bullet) {
        const newBullet = new Bullet(data.bullet.id, data.bullet.pos, data.bullet.angle);
        // Optionally, you can push the new bullet into an array to manage bullets
        bullets.push(newBullet);
    }
  })
  .catch(error => console.error('Error creating bullet:', error));
}

  // Add a method to update bullets
  
  

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
    console.log("Collision detected:", colliding);
  }

  // Forward and reverse acceleration
  if (!colliding || (colliding && keys.s)) {
    // Allow forward movement only if there is no collision
    if (keys.w && !colliding) {
      playerContainer[0].speed += playerContainer[0].acceleration;
    }
    // Always allow reverse movement (backward)
    if (keys.s) {
      playerContainer[0].speed -= playerContainer[0].acceleration;
    }
  } else {
    // Stop forward movement on collision
    playerContainer[0].speed = 0;
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
    if (keys.a) playerContainer[0].angle -= 0.02; // turn left
    if (keys.d) playerContainer[0].angle += 0.02; // turn right
  } else {
    // Reverse rotation if moving backward
    if (keys.a) playerContainer[0].angle += 0.02; 
    if (keys.d) playerContainer[0].angle -= 0.02; 
  }

  // Calculate new position based on speed and angle
  const newPosX = playerContainer[0].pos.x + playerContainer[0].speed * Math.cos(playerContainer[0].angle);
  const newPosY = playerContainer[0].pos.y + playerContainer[0].speed * Math.sin(playerContainer[0].angle);

  // Boundary checks
  const tankWidth = playerContainer[0].size.x;
  const tankHeight = playerContainer[0].size.y;
  if (keys.g) {
    console.log("space");
    if(canShoot==true){
    playerContainer[0].fireBullet();
    canShoot=false;
  } // Fire a bullet from the tank
  }

  // Update bullet positions
  // Check for boundaries
  if (newPosX < 0) {
    playerContainer[0].pos.x = 0; // Prevent moving left
  } else if (newPosX + tankWidth > width) {
    playerContainer[0].pos.x = width - tankWidth; // Prevent moving right
  } else {
    playerContainer[0].pos.x = newPosX; // Update position if within bounds
  }

  if (newPosY < 0) {
    playerContainer[0].pos.y = 0; // Prevent moving up
  } else if (newPosY + tankHeight > height) {
    playerContainer[0].pos.y = height - tankHeight; // Prevent moving down
  } else {
    playerContainer[0].pos.y = newPosY; // Update position if within bounds
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

