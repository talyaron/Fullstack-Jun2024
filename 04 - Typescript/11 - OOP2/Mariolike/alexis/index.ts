interface Position {
  x: number;
  y: number;
}

class Player {
  private id: string;
  playerElement: HTMLDivElement;
  private position: Position;
  private imageUrlRight: string;
  private imageUrlLeft: string;

  constructor(imageUrlRight: string, imageUrlLeft: string) {
    this.id = crypto.randomUUID();
    this.imageUrlRight = imageUrlRight;

    this.imageUrlLeft = imageUrlLeft;
    this.playerElement = document.createElement("div");
    this.setupControls();
  }

  renderPlayer(mainElement: HTMLDivElement) {
    if (!mainElement) {
      throw new Error("No main element provided for player rendering");
    }
    this.position = this.createRandomPosition();
    this.playerElement = document.createElement("div");
    this.playerElement.classList.add("player");
    this.playerElement.style.position = "absolute";
    this.playerElement.style.left = `${this.position.x}px`;
    this.playerElement.style.top = `${this.position.y}px`;

    this.playerElement.style.width = "10%";
    this.playerElement.style.height = "10%";
    this.playerElement.style.backgroundSize = "contain";
    this.playerElement.style.backgroundRepeat = "no-repeat";
    this.playerElement.style.backgroundImage = `url(${this.imageUrlRight})`;

    this.playerElement.addEventListener("keydown", () => {
      this.setupControls();
    });
    mainElement.appendChild(this.playerElement);
    document.body.style.backgroundImage =
    'url(./images/back.png)';
document.body.style.width="100%";
document.body.style.height="100%";
}

  private setupControls() {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        this.moveRight();
      }
      if (event.key === "ArrowLeft") {
        this.moveLeft();
      }
      if (event.key === "ArrowUp") {
        this.jump();
      }
      if (event.key === "ArrowDown") {
        this.lower();
      }
    });
  }
  createRandomPosition() {
    return {
      x: Math.random() * 1000,
      y: 300,
    };
  }
  moveRight() {
    this.position.x += 15;
    this.updatePlayerPosition();
    this.playerElement.style.backgroundImage = `url(${this.imageUrlRight})`;
    console.log("right method");
  }

  moveLeft() {
    this.position.x -= 15;
    this.updatePlayerPosition();
    this.playerElement.style.backgroundImage = `url(${this.imageUrlLeft})`;
    console.log("left method");
  }
  jump() {
    this.position.y -=15;
    this.updatePlayerPosition();
  }
  lower() {
    this.position.y +=15;
    this.updatePlayerPosition();
  }
  private updatePlayerImage() {
    this.playerElement.style.backgroundImage = `${this.imageUrlRight}`;
  }

  private updatePlayerPosition() {
    this.playerElement.style.left = `${this.position.x}px`;
    this.playerElement.style.top = `${this.position.y}px`;
  }
}

const mainElement = document.querySelector("#main") as HTMLDivElement;
if (mainElement) {
  const player = new Player("./images/right.png", "./images/left.png");
  player.renderPlayer(mainElement);
} else {
  console.error("Main element not found");
}

