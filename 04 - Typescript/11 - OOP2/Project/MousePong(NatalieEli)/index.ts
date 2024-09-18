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

interface screen {
  viewportWidth: number;
  viewportHeight: number;
}

const myScreen: screen = {
  viewportWidth: window.innerWidth,
  viewportHeight: window.innerHeight,
};

const mousePosition: mousePos = { x: 0, y: 0, oldX: 0, oldY: 0 };

class Box {
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
  spawn(box: Box) {
    //setting the box element in the html page
    this.domElement = document.createElement("div");
    this.domElement.style.width = `${box.width}px`;
    this.domElement.style.height = `${box.height}px`;
    this.domElement.style.backgroundColor = "blue";
    this.domElement.style.position = "absolute";
    this.domElement.style.transform = `translate(${box.pos.spawnPos.x}px, ${box.pos.spawnPos.y}px)`;
    containerElement.appendChild(this.domElement);
    /// this.pos.spawnPos=box.pos.spawnPos;
    // this.pos.edgePos={ x: box.pos.spawnPos.x + box.width, y: box.pos.spawnPos.y + box.height }
  }
  die(box: Box) {
    //setting the box element in the html page
    this.domElement.remove();
  }
}
class Brick extends Box {
  broken: boolean = false;
}

class playCube extends Box {
  //the pinBall box with additional functions for movement;

  colliding: boolean; //to change based if its colliding or not
  radius: number = this.width / 2; //holds the radius of the pinball
  gravity: boolean = true; //to enable or disable gravity

  mouseEntryDirection: number;
  posChange = false;

  mouseCollidesWithBall: boolean = false;

  //if the ball was already created of not
  exist = false;

  ballDirectionY;
  ballDirectionX;
  ballVelocityX;
  ballVelocityY;

  addListener() {
    this.domElement.addEventListener("mouseleave", (event: MouseEvent) => {
      this.mouseCollidesWithBall = false;
    });
    this.domElement.addEventListener("mouseenter", (event) => {
      // holds the center of the ball on the x axis
      const centerX = this.pos.spawnPos.x + this.width / 2;

      //mouse is colliding with the ball so set it as happy
      this.mouseCollidesWithBall = true;

      //calculates the distance from the center
      const distanceFromCenter = event.x - centerX;

      // calculates the position the mouse entered from positive is right and negative is left
      this.mouseEntryDirection = Math.max(
        -1,
        Math.min(1, distanceFromCenter / (this.width / 2))
      );
      console.log("mouse", this.mouseCollidesWithBall);
    });
  }

  //updates the position of the html element to the current position of the ball
  updateTransform() {
    this.domElement.style.transform = `translate(${this.pos.spawnPos.x}px, ${this.pos.spawnPos.y}px ) `;
  }
}

//holds the container for the ball and boxes
const containerElement = document.getElementById("boxContainer") as HTMLElement;

//holds the sizes of the element
const containerRect = containerElement.getClientRects();
// width converted to number
const initialPlace = parseFloat(
  window.getComputedStyle(containerElement).width
);

//holds the pinBall and its positions - x - and that is - y - width height
const pinBall = new playCube({ x: initialPlace * 0.5, y: 440 }, 50, 50);

const boxes: Box[] = [];
const bricks: Brick[] = [];
const brickAmount: number = 30;

///////////////////////////////////////////////////////////////////////////////////////////////////////
//inside the newBox() function
//create a for loop using "brickAmount" to create each brick element
//use 2 variables for the x and y to set every brick next to each other
//you can use the last brick x and y + its height and width keep the width and height the same
//  const brick = new Brick({ x: -here, y-: -here Y- }, 75, 25);
//at the end inside the for loop do a bricks.push(brick);
//בהצלחה 😄
//////////////////////////////////////////////////////////////////////////////////////////////////////

//creates the boxes and calling the render function later
function newBox() {
  //holds the size of the element container
  const containerStyle = window.getComputedStyle(containerElement);
  const containerWidth = parseFloat(containerStyle.width);
  console.log("Width:", containerWidth);

  //some boxes

  const brick = new Brick({ x: 44, y: 50 }, 75, 25);
  const newBox2 = new Box({ x: 204, y: 602 }, 150, 50);
  const newBox3 = new Box({ x: 504, y: 602 }, 150, 50);
  //left wall
  const wallLeft = new Box({ x: 2, y: 0 }, 0, myScreen.viewportHeight);
  //right wall
  const wallRight = new Box(
    { x: containerWidth, y: 0 },
    0,
    myScreen.viewportHeight
  );
  //celling wall
  const wallTop = new Box({ x: 0, y: 2 }, containerWidth, 0);

  boxes.push(brick, newBox2, wallLeft, wallRight, wallTop, newBox3);
  //initializes the pinball
  if (!pinBall.exist) {
    renderPinBall(pinBall);
    pinBall.exist = true;
    pinBall.addListener();
  }
  renderBoxes(boxes);
}

//render the pinball
function renderPinBall(box: Box) {
  box.spawn(box);
}

//removes the boxes
function removeBoxes(boxes: Box[]) {
  boxes.forEach((box) => {
    box.die(box);
    const boxIndex = boxes.indexOf(box);
    if (boxIndex !== -1) {
      // removes the box from the array
      boxes.splice(boxIndex, 1);
    }
  });
  //empties the boxes array
  boxes.length = 0;
}

//does what it says
function renderBoxes(boxes: Box[]) {
  boxes.forEach((box) => {
    box.spawn(box);
  });
  //gives the player pinball id;
  this.pinBall.domElement.id = "pinBall";
}

//being called from the html element
function main() {
  //call for for the boxes to be created
  newBox();
  //isColliding(pinBall);
}

function isColliding(pinBall: playCube): {
  colliding: boolean;
  normal: vertex | null;
} {
  pinBall.colliding = false;
  let collisionNormal: vertex | null = null;

  boxes.forEach((box) => {
    //finds the closes x point to the ball on the collider
    const closestX = Math.max(
      box.pos.spawnPos.x,
      Math.min(
        pinBall.pos.spawnPos.x + pinBall.radius,
        box.pos.spawnPos.x + box.width
      )
    );
    //finds the closes y point to the ball on the collider
    const closestY = Math.max(
      box.pos.spawnPos.y,
      Math.min(
        pinBall.pos.spawnPos.y + pinBall.radius,
        box.pos.spawnPos.y + box.height
      )
    );

    const distanceX = pinBall.pos.spawnPos.x + pinBall.radius - closestX;
    const distanceY = pinBall.pos.spawnPos.y + pinBall.radius - closestY;

    // calculate the squared distance between the ball's center and the closest point
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    //check if collided
    if (distanceSquared <= pinBall.radius * pinBall.radius) {
      pinBall.colliding = true;

      // calculates the normal vector
      const normalX = distanceX;
      const normalY = distanceY;
      const length = Math.sqrt(normalX * normalX + normalY * normalY);

      // normalizes the normal 🥴(vector)
      if (length !== 0) {
        collisionNormal = {
          x: normalX / length,
          y: normalY / length,
        };
      } else {
        collisionNormal = { x: 0, y: 0 };
      }

      console.log("Colliding with normal:", collisionNormal);
    }
  });
  //returns  that the player is colliding and the normals of the object it collided with
  return { colliding: pinBall.colliding, normal: collisionNormal };
}

document.addEventListener("mousemove", (event: MouseEvent) => {
  //updates old and new positions when the mouse moves
  mousePosition.oldX = mousePosition.x;
  mousePosition.oldY = mousePosition.y;
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
});

setInterval(() => physics(pinBall), 8);

pinBall.gravity = false;

function windowResized() {
  //checks if pinball is outside the play area and brings it back inside if it is
  const containerStyle = window.getComputedStyle(containerElement);
  const containerWidth = parseFloat(containerStyle.width);
  if (pinBall.pos.edgePos.x > containerWidth) {
    console.log("outside");
    pinBall.pos.spawnPos.x = containerWidth - pinBall.width;
    pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x - pinBall.width;

    pinBall.updateTransform();
  }

  if (pinBall.pos.spawnPos.x < 0) {
    console.log("outside");
    pinBall.pos.spawnPos.x = 0;
    pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x + pinBall.width;

    pinBall.updateTransform();
  }

  if (pinBall.pos.spawnPos.y < 0) {
    pinBall.pos.spawnPos.y = 0;
    pinBall.pos.edgePos.y = pinBall.pos.spawnPos.y + pinBall.height;

    pinBall.updateTransform();
  }

  //lose condition is if the ball fell down too far (brings it back to the center for now)
  if (pinBall.pos.spawnPos.y > window.innerHeight) {
    console.log("you lost ! ");
    pinBall.pos.spawnPos.y = 440;
    pinBall.pos.edgePos.y = 440;
    pinBall.pos.spawnPos.x = innerWidth * 0.5;
    pinBall.pos.edgePos.x = innerWidth * 0.5;

    pinBall.ballDirectionX = 0;
    pinBall.ballDirectionY = 0;

    pinBall.ballVelocityX = 0;
    pinBall.ballVelocityY = 0;

    pinBall.updateTransform();
  }

  const windowSize = window.innerWidth;

  //check if the view window is resized and if it is rerender the boxes accordingly
  if (windowSize != myScreen.viewportWidth) {
    myScreen.viewportWidth = window.innerWidth;
    myScreen.viewportHeight = window.innerHeight;
    removeBoxes(boxes);
    newBox();
  }
}

function physics(pinBall: playCube) {
  //holds the previous mouse position
  const lastMouseX = mousePosition.oldX;
  const lastMouseY = mousePosition.oldY;

  //holds the new mouse position
  const mouseCurrentX = mousePosition.x;
  const mouseCurrentY = mousePosition.y;

  //calculates the direction of mouse
  const mouseDirX = mouseCurrentX - lastMouseX;
  const mouseDirY = mouseCurrentY - lastMouseY;

  //multiplier of speed 1 is good for now
  const slowMan = 1.2;

  // If mouse moves upwards and collides with ball
  if (pinBall.mouseCollidesWithBall) {
    // Calculate the magnitude of the direction vector
    const magnitude = Math.sqrt(mouseDirX * mouseDirX + mouseDirY * mouseDirY);

    if (magnitude >= 0 && mouseCurrentY > 400) {
      // check where the mouse came from and apply it to direction of the ball
      if (pinBall.mouseEntryDirection > 0) {
        pinBall.ballDirectionX = -mouseDirX / magnitude;
      } else {
        pinBall.ballDirectionX = mouseDirX / magnitude;
      }

      pinBall.ballDirectionY = -mouseDirY / magnitude;

      // Set ball velocity based on mouse movement direction and magnitude
      pinBall.ballVelocityX = mouseDirX * slowMan;
      pinBall.ballVelocityY = mouseDirY * slowMan;
    }
  }

  // Handle NaN directions (reset to 0 if needed)
  if (isNaN(pinBall.ballDirectionX)) {
    pinBall.ballDirectionX = 0;
  }
  if (isNaN(pinBall.ballDirectionY)) {
    pinBall.ballDirectionY = 0;
  }

  //let posChange = false;

  // move the ball if there's a direction and velocity
  if (pinBall.ballVelocityX || pinBall.ballVelocityY) {
    pinBall.pos.spawnPos.x += pinBall.ballDirectionX * pinBall.ballVelocityX;
    pinBall.pos.spawnPos.y += pinBall.ballDirectionY * pinBall.ballVelocityY;

    pinBall.posChange = true;

    // Update edge positions based on new ball position
    pinBall.pos.edgePos.y = pinBall.pos.spawnPos.y + pinBall.height;
    pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x + pinBall.width;
  }

  // Apply gravity if enabled
  if (pinBall.gravity) {
    // pinBall.fall();
    pinBall.posChange = true;
  }

  //holds the collider if teh ball its colliding
  const collision = isColliding(pinBall);

  // if the ball hits a collider change the ball's direction using the collision normal
  if (collision.colliding && collision.normal) {
    //const to hold the collider normal
    const normal = collision.normal;

    // calculates the alignment between the ball direction vector and the surface normal
    const dotProduct =
      pinBall.ballDirectionX * normal.x + pinBall.ballDirectionY * normal.y;

    //update the ball direction
    pinBall.ballDirectionX -= 2 * dotProduct * normal.x;
    pinBall.ballDirectionY -= 2 * dotProduct * normal.y;

    // moves the ball slightly out of the collider to prevent it from getting stuck
    pinBall.pos.spawnPos.x += normal.x * 0.5;
    pinBall.pos.spawnPos.y += normal.y * 0.5;

    //uncomment to make the ball lose speed with each collider hit
    //pinBall.ballVelocityX *= .9;
    // pinBall.ballVelocityY *= .9;

    console.log(
      "Bouncing with new direction:",
      pinBall.ballDirectionX,
      pinBall.ballDirectionY
    );
  }

  //if gravity is enabled make the ball fall
  if (pinBall.gravity) {
    pinBall.posChange = true;
    //no gravity for now we will be back on the next episode of dragon ball z
  }

  if (pinBall.posChange) {
    pinBall.updateTransform();
  }
  //update the old mouse pos
  mousePosition.oldX = mouseCurrentX;
  mousePosition.oldY = mouseCurrentY;

  windowResized();
}
