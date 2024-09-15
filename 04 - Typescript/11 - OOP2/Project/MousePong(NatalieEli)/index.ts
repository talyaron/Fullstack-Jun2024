//vertex for the corners
interface vertex {
  x: number;
  y: number;
}
interface position {
  //holds twp points and each point has a X and Y
  spawnPos: vertex; //for the left top position of the rectangle
  edgePos: vertex; //for the bottom right position of the rectangle
}
interface mousePos {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
}
const mousePosition: mousePos = { x: 0, y: 0, oldX: 0, oldY: 0 };
class box {
  private id: string;
  protected domElement: HTMLDivElement;
  private position: position;
  width: number;
  height: number;
  constructor(spawnPos: vertex, width: number, height: number) {
    // only "spawn position" needs to be set the other point is calculated
    this.height = height;
    this.width = width;

    this.id = `id:-${crypto.randomUUID}`;
    this.position = {
      spawnPos: spawnPos,
      edgePos: { x: spawnPos.x + width, y: spawnPos.y + height }, //setting the position of the right bottom corner
    };
  }

  get pos() {
    return this.position;
  }
  set pos(position: position) {
    this.position = position;
  }
  spawn(box: box) {
    //setting the box element in the html page
    this.domElement = document.createElement("div");
    this.domElement.style.width = `${box.width}px`;
    this.domElement.style.height = `${box.height}px`;
    this.domElement.style.backgroundColor = "blue";
    this.domElement.style.position = "absolute";
    this.domElement.style.transform = `translate(${box.pos.spawnPos.x}px, ${box.pos.spawnPos.y}px)`;
  
    // this.domElement.style.transition = "transform 1s ease";
    //console.log(box.pos);
    containerElement.appendChild(this.domElement);
  }
}

class playCube extends box {
  //the player box with additional functions for movement;

  colliding: boolean; //to change based if its colliding or not
  radius: number = this.width / 2;
  gravity: boolean = true;
  acceleration: number = 0;
  maxAcceleration: number = 15;
  decelerate: number;
  yaw: number;
  move: number = 0;
  speed: number = 0.5;
  mouseCollidesWithBall: boolean = false;
  ballDirectionY;
  ballDirectionX;
  ballVelocityX;
  ballVelocityY;

  addListener() {
    this.domElement.addEventListener("mouseleave", (event: MouseEvent) => {
      this.mouseCollidesWithBall = false;
    });
    this.domElement.addEventListener("mouseenter", (event) => {
      const centerX = this.pos.spawnPos.x + this.width / 2;
      this.yaw = centerX - event.x;
      this.mouseCollidesWithBall = true;

      //  this.move = 50;

      const distanceFromCenter = event.x - centerX;

      this.yaw = Math.max(
        -1,
        Math.min(1, distanceFromCenter / (this.width / 2))
      );
      console.log("mouse", this.mouseCollidesWithBall);

      if (this.yaw > 0) {
        //    console.log("from the right");
      } else {
        //     console.log("from the left");
      }
    });
  }

  // moveUP() {
  //   if (isColliding(this)) {
  //     if (this.speed / Math.abs(this.yaw) > this.acceleration) {
  //       this.acceleration = this.acceleration - 0.1;
  //     }
  //     this.pos.spawnPos.y +=
  //       (this.speed / Math.abs(this.yaw)) * this.acceleration;
  //     this.pos.edgePos.y +=
  //       (this.speed / Math.abs(this.yaw)) * this.acceleration;
  //     //console.log(this.acceleration);
  //     this.updateTransform();
  //     this.pos.edgePos = {
  //       x: this.pos.spawnPos.x + this.width,
  //       y: this.pos.spawnPos.y + this.height,
  //     };
  //   } else if (this.decelerate > 0.1) {
  //     this.pos.spawnPos.y -= this.acceleration;
  //     this.pos.edgePos.y -= this.acceleration;
     
  //     this.decelerate = this.acceleration / 0.5;
  //     this.acceleration = -this.decelerate ;
  //     this.acceleration = this.acceleration * 0.5;
  //     console.log(this.acceleration, this.decelerate)
  //   }
  // }

  moveDown() {
    this.pos.spawnPos.y += 2;
    this.pos.edgePos.y += 2;
    if (isColliding(this)) {
      this.updateTransform(); // this is called to update the position of the elegant in the html
      this.pos.edgePos = {
        x: this.pos.spawnPos.x + this.width,
        y: this.pos.spawnPos.y + this.height,
      };
    } else {
      this.pos.spawnPos.y -= 2;
      this.pos.edgePos.y -= 2;
    }
  }

  moveLeft() {
    this.pos.spawnPos.x -= 2;
    this.pos.edgePos.x -= 2;
    if (isColliding(this)) {
      this.updateTransform();
      this.pos.edgePos = {
        x: this.pos.spawnPos.x + this.width,
        y: this.pos.spawnPos.y + this.height,
      };
    } else {
      this.pos.spawnPos.x += 2;
      this.pos.edgePos.x += 2;
    }
  }

  moveRight() {
    this.pos.spawnPos.x += 2;
    this.pos.edgePos.x += 2;
    if (isColliding(this)) {
      this.updateTransform();
      this.pos.edgePos = {
        x: this.pos.spawnPos.x + this.width,
        y: this.pos.spawnPos.y + this.height,
      };
    } else {
      this.pos.spawnPos.x -= 2;
      this.pos.edgePos.x -= 2;
    }
  }

  fall() {
    if (!isColliding(this)) {
      if (this.maxAcceleration > this.acceleration) {
        
        this.acceleration = this.acceleration + 0.1;
      }
      this.pos.spawnPos.y += 0.98 * this.acceleration;
      this.pos.edgePos.y += 0.98 * this.acceleration;
      //console.log(this.acceleration);
      this.updateTransform();
      this.pos.edgePos = {
        x: this.pos.spawnPos.x + this.width,
        y: this.pos.spawnPos.y + this.height,
      };
    } else if (this.acceleration > 0.1) {
      this.pos.spawnPos.y -= 0.98 * this.acceleration;
      this.pos.edgePos.y -= 0.98 * this.acceleration;

      this.decelerate = this.acceleration / .5;
      this.acceleration = this.acceleration-this.decelerate  ;
      this.acceleration =this.acceleration/1/5
      //this.acceleration = this.acceleration ;
      console.log(this.acceleration, this.decelerate)
    }
  }

  updateTransform() {
    this.domElement.style.transform = `translate(${this.pos.spawnPos.x}px, ${this.pos.spawnPos.y}px ) `;
  }
}

const player = new playCube({ x: 184, y: 422 }, 50, 50); //adds the player and its position X and Y are position the rest is width and height

const containerElement = document.getElementById("boxContainer") as HTMLElement;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    player.moveLeft(); //calls the move left function inside the player class...
  }

  if (event.key === "ArrowRight") {
    player.moveRight();
  }
  if (event.key === "ArrowUp") {
 //   player.moveUP();
  }
  if (event.key === "ArrowDown") {
    player.moveDown();
  }
});

const boxes: box[] = [];

function newBox() {
  const brick = new box({ x: 44, y: 50 }, 75, 25);
  const newBox2 = new box({ x: 204, y: 602 }, 150, 50);
  const wallLeft = new box({ x: 2, y: 2 }, 20, 650);
  const wallRight = new box({ x: 1020, y: 2 }, 20, 650);
  const wallTop = new box({ x: 0, y: 2 }, 1020, 25);
  boxes.push(brick, newBox2, wallLeft, wallRight,wallTop);

  renderplayer(player);
  player.addListener();
  renderBoxes(boxes);
}

function renderplayer(box: box) {
  box.spawn(box);
}

function renderBoxes(boxes: box[]) {
  boxes.forEach((box) => {
    box.spawn(box);
  });
  this.player.domElement.id = "player";
}

function main() {
  newBox();

  isColliding(player);
}

function isColliding(player: playCube): boolean {
  // For collision check
  player.colliding = false;

  boxes.forEach((box) => {
    // Check each box if it is being collided with the player
    if (!box.pos.edgePos || !player.pos.edgePos)
      throw new Error("no Position!");

    // find the closest point on the rectangle to the circle's center
    const closestX = Math.max(
      box.pos.spawnPos.x,
      Math.min(
        player.pos.edgePos.x - player.width * 0.5,
        box.pos.spawnPos.x + box.width
      )
    );
    const closestY = Math.max(
      box.pos.spawnPos.y,
      Math.min(
        player.pos.edgePos.y - player.height * 0.5,
        box.pos.spawnPos.y + box.height
      )
    );

    // Step 2: Calculate the distance from the circle's center to this closest point
    const distanceX = player.pos.edgePos.x - player.width * 0.5 - closestX;
    const distanceY = player.pos.edgePos.y - player.height * 0.5 - closestY;

    // check if the distance is less than the circle's radius
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    if (distanceSquared <= player.radius * player.radius) {
      player.colliding = true;
       console.log("collide",distanceY,distanceX);
    }
  });

  return player.colliding;
}
/*
  try {
    boxes.forEach((box) => {
      //check each boxes if it is being colided with the player
      if (!box.pos.edgePos || !player.pos.edgePos)
        throw new Error("no Position!");

      // console.log("player ",player.pos.spawnPos,player.pos.edgePos)
      //console.log("Enemy ",box.pos.spawnPos,box.pos.edgePos,)

      const overlapX = //a check for overlap on X axis
        player.pos.spawnPos.x < box.pos.edgePos.x &&
        player.pos.edgePos.x > box.pos.spawnPos.x;

      const overlapY = //a check for overlap on Y axis
        player.pos.spawnPos.y < box.pos.edgePos.y &&
        player.pos.edgePos.y > box.pos.spawnPos.y;

      if (overlapX && overlapY) {
        console.log("Collision detected!");

        player.colliding = true; //:O
      }
    });
  } catch (error) {
    console.log(error);
  }
  return !player.colliding;*/

document.addEventListener("mousemove", (event: MouseEvent) => {
  mousePosition.oldX = mousePosition.x;
  mousePosition.oldY = mousePosition.y;
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
});

setInterval(() => physics(player), 8);

player.gravity = false;



function physics(player: playCube) {
  const lastMouseX = mousePosition.oldX;
  const lastMouseY = mousePosition.oldY;

  const mouseCurrentX = mousePosition.x;
  const mouseCurrentY = mousePosition.y;

  const mouseDirX = mouseCurrentX - lastMouseX;
  const mouseDirY = mouseCurrentY - lastMouseY; 

  const slowMan = 1;

  // If mouse moves upwards and collides with ball
  if ( player.mouseCollidesWithBall) {
    // Calculate the magnitude of the direction vector
    const magnitude = Math.sqrt(mouseDirX * mouseDirX + mouseDirY * mouseDirY);
    const minMagnitude = 5;

    if (magnitude >= 0 &&mouseCurrentY>400) {
      // Normalize the direction
      if(player.yaw>0)
      player.ballDirectionX = -mouseDirX / magnitude;
    else player.ballDirectionX = mouseDirX / magnitude;
      player.ballDirectionY = -mouseDirY / magnitude;

      // Set ball velocity based on mouse movement direction and magnitude
      player.ballVelocityX = mouseDirX * slowMan;
      player.ballVelocityY = mouseDirY * slowMan;
    }
  }

  // Handle NaN directions (reset to 0 if needed)
  if (isNaN(player.ballDirectionX)) {
    player.ballDirectionX = 0;
    
  }
  if (isNaN(player.ballDirectionY)) {
    player.ballDirectionY = 0;
  }
  let posChange = false;
  let xPos =player.pos.spawnPos.x;
  let yPos=player.pos.spawnPos.y;
  // Move the ball if there's a direction and velocity
  if (player.ballVelocityX || player.ballVelocityY) {
    player.pos.spawnPos.x+= player.ballDirectionX* player.ballVelocityX;
    player.pos.spawnPos.y += player.ballDirectionY*player.ballVelocityY;
    posChange = true;
    // Update edge positions based on new ball position
    player.pos.edgePos.y = player.pos.spawnPos.y + player.height;
    player.pos.edgePos.x = player.pos.spawnPos.x + player.width;

    

    // console.log(
    //   player.ballDirectionY,
    //   player.ballDirectionX,
    //   player.ballVelocityX,
    //   player.ballVelocityY
    // );
  }
  // Handle collision (reverse direction when a collision happens)
  if (isColliding(player)) {
    // Reverse the ball's direction on collision
    player.ballDirectionX *= - 1;
    player.ballDirectionY *= -1;

    posChange=false;

    player.pos.spawnPos.x = xPos;
    player.pos.spawnPos.y= yPos;
  }

  // Apply gravity if enabled
  if (player.gravity) {
    player.fall();
    posChange= true;
  }
  if(posChange){
  player.updateTransform();
}
  // Update the old mouse position for the next frame
  mousePosition.oldX = mouseCurrentX;
  mousePosition.oldY = mouseCurrentY;
}
