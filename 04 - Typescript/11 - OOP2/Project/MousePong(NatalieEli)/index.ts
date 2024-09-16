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
    containerElement.appendChild(this.domElement);
    /// this.pos.spawnPos=box.pos.spawnPos;
    // this.pos.edgePos={ x: box.pos.spawnPos.x + box.width, y: box.pos.spawnPos.y + box.height }
  }
  die(box: box) {
    //setting the box element in the html page
    this.domElement.remove();
  }
}

class playCube extends box {
  //the pinBall box with additional functions for movement;

  colliding: boolean; //to change based if its colliding or not
  radius: number = this.width / 2;
  gravity: boolean = true;
  acceleration: number = 0;
  maxAcceleration: number = 15;
  decelerate: number;
  yaw: number;

  mouseCollidesWithBall: boolean = false;
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
    });
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

      this.decelerate = this.acceleration / 0.5;
      this.acceleration = this.acceleration - this.decelerate;
      this.acceleration = this.acceleration / 1 / 5;
      //this.acceleration = this.acceleration ;
      console.log(this.acceleration, this.decelerate);
    }
  }

  updateTransform() {
    this.domElement.style.transform = `translate(${this.pos.spawnPos.x}px, ${this.pos.spawnPos.y}px ) `;
  }
}

const pinBall = new playCube({ x: window.innerWidth * 0.5, y: 440 }, 50, 50); //adds the pinBall and its position X and Y are position the rest is width and height

const containerElement = document.getElementById("boxContainer") as HTMLElement;

const boxes: box[] = [];

function newBox() {
  const brick = new box({ x: 44, y: 50 }, 75, 25);
  const newBox2 = new box({ x: 204, y: 602 }, 150, 50);
  const wallLeft = new box({ x: 2, y: 0 }, 0, myScreen.viewportHeight);
  const wallRight = new box(
    { x: myScreen.viewportWidth, y: 0 },
    0,
    myScreen.viewportHeight
  );
  const wallTop = new box({ x: 0, y: 2 }, myScreen.viewportWidth, 0);

  boxes.push(brick, newBox2, wallLeft, wallRight, wallTop);
  if (!pinBall.exist) {
    renderPinBall(pinBall);
    pinBall.exist = true;
    pinBall.addListener();
  }
  renderBoxes(boxes);
}

function renderPinBall(box: box) {
  box.spawn(box);
}
function removeBoxes(boxes: box[]) {
  boxes.forEach((box) => {
    box.die(box);
    const boxIndex = boxes.indexOf(box);
    if (boxIndex !== -1) {
      // Remove the box from the array
      boxes.splice(boxIndex, 1);
    }
  });
  boxes.length = 0;
}

function renderBoxes(boxes: box[]) {
  boxes.forEach((box) => {
    box.spawn(box);
  });
  this.pinBall.domElement.id = "pinBall";
}

function main() {
  newBox();

  isColliding(pinBall);
}

function isColliding(pinBall: playCube): {
  colliding: boolean;
  normal: vertex | null;
} {
  pinBall.colliding = false;
  let collisionNormal: vertex | null = null;

  boxes.forEach((box) => {
    const closestX = Math.max(
      box.pos.spawnPos.x,
      Math.min(
        pinBall.pos.spawnPos.x + pinBall.radius,
        box.pos.spawnPos.x + box.width
      )
    );
    const closestY = Math.max(
      box.pos.spawnPos.y,
      Math.min(
        pinBall.pos.spawnPos.y + pinBall.radius,
        box.pos.spawnPos.y + box.height
      )
    );

    const distanceX = pinBall.pos.spawnPos.x + pinBall.radius - closestX;
    const distanceY = pinBall.pos.spawnPos.y + pinBall.radius - closestY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    if (distanceSquared <= pinBall.radius * pinBall.radius) {
      pinBall.colliding = true;

      // Calculate the normal vector
      const normalX = distanceX;
      const normalY = distanceY;
      const length = Math.sqrt(normalX * normalX + normalY * normalY);

      // Normalize the normal vector
      collisionNormal = {
        x: normalX / length,
        y: normalY / length,
      };

      console.log("Colliding with normal:", collisionNormal);
    }
  });

  return { colliding: pinBall.colliding, normal: collisionNormal };
}

document.addEventListener("mousemove", (event: MouseEvent) => {
  mousePosition.oldX = mousePosition.x;
  mousePosition.oldY = mousePosition.y;
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
});

setInterval(() => physics(pinBall), 8);

pinBall.gravity = false;

function physics(pinBall: playCube) {
  const lastMouseX = mousePosition.oldX;
  const lastMouseY = mousePosition.oldY;

  const mouseCurrentX = mousePosition.x;
  const mouseCurrentY = mousePosition.y;

  const mouseDirX = mouseCurrentX - lastMouseX;
  const mouseDirY = mouseCurrentY - lastMouseY;

  const slowMan = 1;

  // If mouse moves upwards and collides with ball
  if (pinBall.mouseCollidesWithBall) {
    // Calculate the magnitude of the direction vector
    const magnitude = Math.sqrt(mouseDirX * mouseDirX + mouseDirY * mouseDirY);
    const minMagnitude = 5;

    if (magnitude >= 0 && mouseCurrentY > 400) {
      // Normalize the direction
      if (pinBall.yaw > 0) pinBall.ballDirectionX = -mouseDirX / magnitude;
      else pinBall.ballDirectionX = mouseDirX / magnitude;
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
  let posChange = false;
  let xPos = pinBall.pos.spawnPos.x;
  let yPos = pinBall.pos.spawnPos.y;
  // Move the ball if there's a direction and velocity
  if (pinBall.ballVelocityX || pinBall.ballVelocityY) {
    pinBall.pos.spawnPos.x += pinBall.ballDirectionX * pinBall.ballVelocityX;
    pinBall.pos.spawnPos.y += pinBall.ballDirectionY * pinBall.ballVelocityY;
    posChange = true;
    // Update edge positions based on new ball position
    pinBall.pos.edgePos.y = pinBall.pos.spawnPos.y + pinBall.height;
    pinBall.pos.edgePos.x = pinBall.pos.spawnPos.x + pinBall.width;

    // console.log(
    //   pinBall.ballDirectionY,
    //   pinBall.ballDirectionX,
    //   pinBall.ballVelocityX,
    //   pinBall.ballVelocityY
    // );
  }
  // Apply gravity if enabled
  if (pinBall.gravity) {
    pinBall.fall();
    posChange = true;
  }
  const collision = isColliding(pinBall);

  if (collision.colliding && collision.normal) {
    // Reflect the ball's direction using the collision normal
    const normal = collision.normal;

    const dotProduct =
      pinBall.ballDirectionX * normal.x + pinBall.ballDirectionY * normal.y;
    pinBall.ballDirectionX -= 2 * dotProduct * normal.x;
    pinBall.ballDirectionY -= 2 * dotProduct * normal.y;

    pinBall.ballVelocityX *= 1;
    pinBall.ballVelocityY *= 1;

    console.log(
      "Bouncing with new direction:",
      pinBall.ballDirectionX,
      pinBall.ballDirectionY
    );
  }

  if (pinBall.gravity) {
    pinBall.fall();
    posChange = true;
  }

  if (posChange) {
    pinBall.updateTransform();
  }

  mousePosition.oldX = mouseCurrentX;
  mousePosition.oldY = mouseCurrentY;

  if (pinBall.pos.edgePos.x > window.innerWidth) {
    console.log("outside")
    pinBall.pos.spawnPos.x =window.innerWidth-pinBall.width;
    pinBall.pos.edgePos.x =pinBall.pos.spawnPos.x-pinBall.width;

    pinBall.updateTransform();
  }

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
  if (windowSize != myScreen.viewportWidth) {
    myScreen.viewportHeight = window.innerHeight;
    myScreen.viewportWidth = window.innerWidth;
    removeBoxes(boxes);
    newBox();
  }
}
