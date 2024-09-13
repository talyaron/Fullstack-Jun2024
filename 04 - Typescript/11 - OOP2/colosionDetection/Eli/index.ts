interface vertex {
  x: number;
  y: number;
}
interface position {
  spawnPos: vertex;
  edgePos: vertex;
}

class box {
  private id: string;
  protected domElement: HTMLDivElement;
  private position: position;
  width: number;
  height: number;
  constructor(spawnPos: vertex, width: number, height: number) {
    this.height = height;
    this.width = width;

    this.id = `id:-${crypto.randomUUID}`;
    this.position = {
        spawnPos: spawnPos,
        edgePos: { x: spawnPos.x + width, y: spawnPos.y + height },
      };
  }

  get pos() {
    return this.position;
  }
  set pos(position: position) {
    this.position = position;
  }
  spawn(box: box) {
    this.domElement = document.createElement("div");
    this.domElement.style.width = `${box.width}px`;
    this.domElement.style.height = `${box.height}px`;
    this.domElement.style.backgroundColor = "blue";
    this.domElement.style.position = "absolute";
    this.domElement.style.transform = `translate(${box.pos.spawnPos.x}px, ${box.pos.spawnPos.y}px)`;
   // this.domElement.style.transition = "transform 1s ease";
    console.log(box.pos);
    containerElement.appendChild(this.domElement);
  }
}
class playCube extends box {
  moveUP() {
    this.pos.spawnPos.y -= 10;
    this.pos.edgePos.y-= 10;
    this.updateTransform();
  }

  moveDown() {
    this.pos.spawnPos.y += 10;
    this.pos.edgePos.y+= 10;
    this.updateTransform();
  }

  moveLeft() {
    this.pos.spawnPos.x -= 10;
    this.pos.edgePos.x -= 10;
    this.updateTransform();
  }

  moveRight() {
    this.pos.spawnPos.x += 10;
    this.pos.edgePos.x += 10;
    this.updateTransform();
  }

  private updateTransform() {
    this.domElement.style.transform = `translate(${this.pos.spawnPos.x}px, ${this.pos.spawnPos.y}px ) `;
  }
}

const player = new playCube({ x: 284, y: 22 }, 150, 200);
const containerElement = document.getElementById("boxContainer") as HTMLElement;
document.addEventListener("keydown", (event) => {

  if (event.key === "ArrowLeft") {
    player.moveLeft();
  }

  if (event.key === "ArrowRight") {
    player.moveRight();
  }
  if (event.key === "ArrowUp") {
    player.moveUP();
  }
  if (event.key === "ArrowDown") {
    player.moveDown();
  }
});

const boxes: box[] = [];

function newBox() {
  const newBox = new box({ x: 44, y: 22 }, 150, 200);
  const newBox2 = new box({ x: 204, y: 302 }, 150, 200);

  boxes.push(newBox,newBox2);
  renderplayer(player);
  renderBoxes(boxes);
}

function renderplayer(box: box) {
  box.spawn(box);
}

function renderBoxes(boxes: box[]) {
  boxes.forEach((box) => {
    box.spawn(box);
  });
}

function main() {
  newBox();

  physics(player);
}

function physics(player: playCube) {
    try {
    boxes.forEach((box) => {
        if  (!box.pos.edgePos || !player.pos.edgePos) throw new Error("no Position!");
     // console.log("player ",player.pos.spawnPos,player.pos.edgePos)
      //console.log("Enemy ",box.pos.spawnPos,box.pos.edgePos,)
      const overlapX = player.pos.spawnPos.x < box.pos.edgePos.x && player.pos.edgePos.x > box.pos.spawnPos.x;
      const overlapY = player.pos.spawnPos.y < box.pos.edgePos.y && player.pos.edgePos.y > box.pos.spawnPos.y;

      if (overlapX && overlapY) {
        console.log("Collision detected!");
      }
    });  } catch (error) {
        console.log(error)
    }
  }
  setInterval(() => physics(player), 50);
