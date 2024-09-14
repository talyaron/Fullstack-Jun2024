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
    this.playerElement.addEventListener("click", () => {
      this.explode();
    });
    this.playerElement.addEventListener("keydown", () => {
      this.setupControls();
    });
    mainElement.appendChild(this.playerElement);
    document.body.style.backgroundImage = "url(./images/back.png)";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.addEventListener("click", () => {
      document.body.appendChild(this.playerElement);
    });
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
      y: 310,
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
    this.position.y -= 15;
    this.updatePlayerPosition();
  }
  lower() {
    this.position.y += 15;
    this.updatePlayerPosition();
  }
  explode() {
    setTimeout(() => {
      this.playerElement.remove();
    }, 100);
    alert("Game over!");
    alert('Click anywhere to restart!');
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
const mushrooms: Trouble[] = [];

class Trouble {
  position: Position;
  imageUrl: string;
  id: string;
  mushroom: HTMLDivElement;
  constructor(imageUrl: string) {
    this.imageUrl = imageUrl;
    this.position = this.randomPosition();
    this.mushroom = document.createElement('div');
    this.id = crypto.randomUUID();
  }
  renderTrouble(troubleElement: HTMLDivElement) {
    try {
      if (!troubleElement) throw new Error("cannot find troubleElement");
      this.mushroom.classList.add("trouble");
      this.mushroom.style.position = "absolute";
      this.mushroom.style.top = `${this.position}px`;
      this.mushroom.style.left = `${this.position}px`;
      this.mushroom.style.backgroundSize="contain";
      this.mushroom.style.backgroundRepeat = "no-repeat";
      this.mushroom.style.backgroundImage = "url(./images/trouble.png)";
      this.mushroom.style.width = "15px";
      this.mushroom.style.height = "15px";
     
    } catch (error) {
      console.error("cannot render mushrooms");
    }
  }
  moveMushroom(){
    this.mushroom.style.left='15px';
  }
  randomPosition() {
    return {
      x: 100,
      y: Math.random() * 500,
    };
  }
}
setInterval(() => {
    const troubleElement = document.querySelector("#trouble") as HTMLDivElement;
    if (troubleElement) {
      const mushroom = new Trouble('./images/trouble.png');
      mushrooms.push(mushroom);
      document.body.appendChild(this.mushroom);

      setInterval(()=>{
          mushroom.moveMushroom();
      },3000);
      mushroom.renderTrouble(document.querySelector("#trouble") as HTMLDivElement);
    }
  }, 500);
