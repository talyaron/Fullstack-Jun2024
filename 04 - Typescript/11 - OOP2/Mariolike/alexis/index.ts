interface Position {
  x: number;
  y: number;
}

class Player {
  private id: string;
  playerElement: HTMLDivElement;
  position: Position;
  imageUrlRight: string;
  imageUrlLeft: string;

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

  setupControls() {
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
    alert("Click anywhere to restart!");
  }

  updatePlayerImage() {
    this.playerElement.style.backgroundImage = `${this.imageUrlRight}`;
  }

  updatePlayerPosition() {
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
    this.mushroom = document.createElement("div");
    this.id = crypto.randomUUID();
    this.renderTrouble(); // Render immediately
  }

  renderTrouble() {
    try {
      this.mushroom.classList.add("trouble");
      this.mushroom.style.position = "absolute";
      this.mushroom.style.left = `${this.position.x}px`;
      this.mushroom.style.top = `${this.position.y}px`;
      this.mushroom.style.backgroundSize = "contain";
      this.mushroom.style.backgroundRepeat = "no-repeat";
      this.mushroom.style.backgroundImage = `url(${this.imageUrl})`;
      this.mushroom.style.width = "30px";
      this.mushroom.style.height = "30px";

      this.updatePosition();
      const mushroom = document.querySelector("#trouble") as HTMLDivElement;
      if (!mushroom) throw new Error("Cannot find troubleElement");
      mushroom.appendChild(this.mushroom);
    } catch (error) {
      console.error("Cannot render mushroom:", error);
    }
  }
  updatePosition() {
    this.mushroom.style.left = `${this.position.x}px`;
    this.mushroom.style.top = `${this.position.y}px`;
  }
  moveMushroom() {
    this.position.x += 15; 
    this.updatePosition();
    if (this.position.x > window.innerWidth) {
      this.mushroom.remove();
    }
  }

  randomPosition(): Position {
    return {
      x: 10,
      y: Math.random() * window.innerHeight,
    };
  }
}

setInterval(() => {
  const mushroom = new Trouble(
    "https://mario.wiki.gallery/images/8/8b/SuperMushroom_-_2D_art.svg"
  );
  mushrooms.push(mushroom);

  console.error("Trouble container element not found");
}, 3000);

setInterval(() => {
  mushrooms.forEach((mushroom) => mushroom.moveMushroom());
}, 100);

function gameOver(player: Player, troubleElement: Trouble[]) {
  mushrooms.forEach((mushroom) => {
    const mushroomRect = mushroom.mushroom.getBoundingClientRect();
    const playerRect = player.playerElement.getBoundingClientRect();
    if (
      mushroomRect.left < playerRect.right &&
      mushroomRect.bottom > playerRect.top &&
      mushroomRect.top < playerRect.bottom &&
      mushroomRect.right > playerRect.left
    ) {
      player.explode();
      alert("Game Over!");
      mushrooms.forEach((mushroom)=>mushroom.mushroom.remove());
      mushrooms.length=0;
    }
  });
}

setInterval(()=>
gameOver(player,mushrooms),100);

