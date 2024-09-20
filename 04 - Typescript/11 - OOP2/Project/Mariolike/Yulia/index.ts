interface Position {
  x: number;
  y: number;
}

class Mario {
  private position: Position;
  private domElement: HTMLDivElement;
  private isJumping: boolean = false;
  private isAlive: boolean = true;

  constructor() {
    this.position = { x: 0, y: 80 };
    this.domElement = document.createElement("div");
    this.domElement.classList.add("mario");
    document.body.appendChild(this.domElement);
    this.render();
  }

  render() {
    this.domElement.style.left = `${this.position.x}%`;
    this.domElement.style.top = `${this.position.y}%`;
  }

  move(direction: string) {
    if (!this.isAlive) return;

    switch (direction) {
      case "left":
        if (this.position.x > 0) this.position.x -= 5;
        break;
      case "right":
        if (this.position.x < 95) this.position.x += 5;
        break;
    }
    this.render();
  }

  jump() {
    if (!this.isAlive || this.isJumping) return;

    this.isJumping = true;
    const initialY = this.position.y;
    this.position.y -= 30;
    this.render();

    setTimeout(() => {
      this.position.y = initialY;
      this.render();
      this.isJumping = false;
    }, 300);
  }

  gameOver() {
    this.isAlive = false;
    const gameOverText = document.createElement("div");
    gameOverText.classList.add("game-over");
    gameOverText.innerText = "GAME OVER";
    document.body.appendChild(gameOverText);
  }

  getDomElement() {
    return this.domElement;
  }
}

class Mashroom {
  private position: Position;
  private domElement: HTMLDivElement;
  private movingLeft: boolean = Math.random() < 0.5;
  private maxY: number = 83;

  constructor() {
    this.position = { x: Math.random() * 95, y: 0 };
    this.domElement = document.createElement("div");
    this.domElement.classList.add("mashroom");
    document.body.appendChild(this.domElement);
    this.render();
  }

  render() {
    this.domElement.style.left = `${this.position.x}%`;
    this.domElement.style.top = `${this.position.y}%`;
  }

  fall() {
    const fallInterval = setInterval(() => {
      if (this.position.y < this.maxY) {
        this.position.y += 1;
        this.render();
      } else {
        clearInterval(fallInterval);
        this.moveSideways();
      }
    }, 100);
  }

  moveSideways() {
    const moveInterval = setInterval(() => {
      if (this.movingLeft) {
        if (this.position.x > 0) {
          this.position.x -= 0.5;
        } else {
          this.movingLeft = false;
        }
      } else {
        if (this.position.x < 95) {
          this.position.x += 0.5;
        } else {
          this.movingLeft = true;
        }
      }
      this.render();
    }, 50);
  }

  checkCollision(mario: Mario) {
    const marioRect = mario.getDomElement().getBoundingClientRect();
    const mashroomRect = this.domElement.getBoundingClientRect();

    if (
      marioRect.x < mashroomRect.x + mashroomRect.width &&
      marioRect.x + marioRect.width > mashroomRect.x &&
      marioRect.y < mashroomRect.y + mashroomRect.height &&
      marioRect.y + marioRect.height > mashroomRect.y
    ) {
      mario.gameOver(); 
    }

    if (
      marioRect.x < mashroomRect.x + mashroomRect.width &&
      marioRect.x + marioRect.width > mashroomRect.x
    ) {
      this.movingLeft = !this.movingLeft; 
    }
  }

  getPosition() {
    return this.position;
  }
}

const mario = new Mario();
const mashrooms: Mashroom[] = [];

let createdMashrooms = 0;
const mashroomCreationInterval = setInterval(() => {
  if (createdMashrooms < 7) {
    const mashroom = new Mashroom();
    mashroom.fall();
    mashrooms.push(mashroom);
    createdMashrooms++;
  } else {
    clearInterval(mashroomCreationInterval);
  }
}, 3000);

setInterval(() => {
  mashrooms.forEach((mashroom) => {
    mashroom.checkCollision(mario);
  });
}, 100);

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    mario.jump();
  } else {
    switch (event.code) {
      case "ArrowLeft":
        mario.move("left");
        break;
      case "ArrowRight":
        mario.move("right");
        break;
    }
  }
});