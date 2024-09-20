interface Position {
  x: number;
  y: number;
}

class Bird {
  private id: string;
  private position: Position;
  private velocity: number;
  private imgUrl: string;
  private gravity: number;
  private element: HTMLImageElement;
  private flyingBirdImgUrl: string;
  isGameActive: boolean;
  isFlying: boolean;
  obsticle: Obstical;
  private speedX: number; // מהירות התנועה בציר ה-X
  private direction: number; // כיוון התנועה: 1 לימין, -1 לשמאל

  constructor(position: Position, velocity: number, gravity: number) {
    this.id = `-id${crypto.randomUUID()}`;
    this.position = position;
    this.imgUrl = "./dist/images/bird-down.png";
    this.flyingBirdImgUrl = "./dist/images/bird-up.png";
    this.gravity = gravity;
    this.velocity = velocity;
    this.renderBird();
    this.isFlying = false;
    this.isGameActive = false;
    this.obsticle = new Obstical();
    this.speedX = 6;
    this.direction = 1; // תנועה ימינה ברירת מחדל

    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        this.handlePressKeyDown();
      }
    });

    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.code === "Space") {
        this.handlePressKeyDown();
      }
    });

    this.gameLoop();
  }

  //GETTERS
  getElement(): HTMLImageElement {
    return this.element;
  }

  // return the y of the bird.
  getY(): number {
    return this.position.y;
  }

  getGameActivity(): boolean {
    return this.isGameActive;
  }

  //SETTERS

  setGameActive(active: boolean) {
    this.isGameActive = active;
  }

  setIsFlying(isFlying: boolean) {
    this.isFlying = isFlying;
  }

  //METHODS

  //position of X and Y initially
  initialPosition(): Position {
    const posY = 300;
    const posX = 300;
    this.position = { x: posX, y: posY };
    this.initialPositionRender(posX, posY);
    return this.position;
  }

  // Method to make the bird fly horizontally
  flyHorizontally(): void {
    this.position.x += this.speedX * this.direction;

    // Update direction and position to prevent going off-screen
    if (this.position.x >= window.innerWidth - this.element.width) {
        this.position.x = window.innerWidth - this.element.width;
        this.direction = -1; // Change direction to left
    } else if (this.position.x <= 0) {
        this.position.x = 0;
        this.direction = 1; // Change direction to right
    }

    // Update the bird's position in the DOM
    this.element.style.left = this.position.x + "px";
}

  //render the bird's position in px
  initialPositionRender(positionX: number, positionY: number): void {
    this.element.style.left = positionX + "px";
    this.element.style.top = positionY + "px";
  }

  checkCollisionWithObstacle(): void {
    const birdRect = this.element.getBoundingClientRect();
    const obstacles = this.obsticle.getObstacles();

    obstacles.forEach(obstacle => {
        const obstacleRect = obstacle.getBoundingClientRect();

        // הוספת פד לקוליז'ן כדי לשפר את ההרגשה
        const padding = 129; // המרחק שנוסיף לחישוב

        const hit = (
            birdRect.right > obstacleRect.left + padding &&
            birdRect.left < obstacleRect.right - padding &&
            birdRect.bottom > obstacleRect.top + padding &&
            birdRect.top < obstacleRect.bottom - padding
        );

        if (hit) {
            console.log("Collision detected!");
            this.gameOver();
        }
    });
}
    

  //effect of moving the bird's wings
  moveWings(): HTMLImageElement {
    const element = this.getElement();
    setInterval(() => {
      element.src = this.imgUrl;
    }, 1000);
    setTimeout(() => {
      setInterval(() => {
        element.src = this.flyingBirdImgUrl;
      }, 1000);
    }, 200);
    return element;
  }

  //render bird
  renderBird(): void {
    console.log("in render");
    try {
      this.element = document.createElement("img");
      const container = document.getElementById("container");
      if (!container) throw new Error("Element not found");

      this.element.src = this.imgUrl;
      this.element.style.position = "absolute";
      this.element.style.zIndex = "999";
      this.element.classList.add("bird");
      container.appendChild(this.element);

      this.initialPositionRender(this.position.x, this.position.y);
    } catch (e) {
      console.error(e);
    }
  }

  startGame(): void {
    try {
      const startElement: HTMLElement = document.createElement("h1");
      const container = document.getElementById("container");
      if (!container) throw new Error("Element not found");

      // startElement.style.position = 'relative';
      startElement.textContent = `Press on 'Space' key to start the game`;
      startElement.classList.add("start");
      container.appendChild(startElement);
    } catch (e) {
      console.error(e);
    }
  }

  handlePressKeyDown(): void {
    console.log("in press", this.isGameActive);
    this.isGameActive = true;
    this.position.y = Math.max(this.position.y - 80, 0); // מונע מהעוף לצאת מהמסך
    this.velocity = -5;
    this.element.style.top = this.position.y + "px";
}

  applyGravity(): void {
    this.velocity += this.gravity;
    this.position.y += this.velocity;
    if (this.position.y > window.innerHeight - this.element.height) {
      this.position.y = window.innerHeight - this.element.height;
      this.velocity = 0;
    }

    this.element.style.top = this.position.y + "px";
  }

gameLoop(): void {
    const gameloop = setInterval(() => {
        if (this.isGameActive) {
            this.moveWings();
            this.applyGravity();
            this.flyHorizontally();
            this.obsticle.moveObstacles();
            this.checkCollisionWithObstacle();

            console.log(`Bird position: x=${this.position.x}, y=${this.position.y}`);

            if (this.checkGameOver()) {
                clearInterval(gameloop);
            }
        }
    }, 20); // Adjust if necessary
}

  checkGameOver(): boolean {
    if (this.position.y >= window.innerHeight - this.element.height) {
        this.gameOver();
        return true;
    }
    return false;
}

  gameOver(): void {
    if (!this.isGameActive) return; // מניעת הפעלה כפולה של gameOver

    this.setGameActive(false);
    console.log("המשחק נגמר");

    try {
      const gameoverdiv = document.getElementById("gameoverdiv");
      if (!gameoverdiv) throw new Error("Element not found");

      const gameoverimg: HTMLImageElement = document.createElement("img");
      gameoverimg.src = "./dist/images/gameOver.png";
      gameoverimg.style.position = "absolute";
      gameoverimg.classList.add("gameover-img");
      gameoverdiv.appendChild(gameoverimg);

      setTimeout(() => {
        gameoverimg.style.display = "none";
        this.element.style.visibility = "hidden";
        setTimeout(() => {
          this.element.style.visibility = "visible";
          this.initialPosition();
          this.setIsFlying(false);
        }, 2000);
      }, 2000);
    } catch (error) {
      console.error("Error in gameOver", error);
    }
  }
}

class Obstical {
  private imgUrl: string;
  private obsticalsVelocity: number;
  private elements: HTMLImageElement[] = [];
  private gapSize: number = 200;

  constructor() {
    this.imgUrl = "./dist/images/obstical.png";
    this.obsticalsVelocity = 4; // מהירות המכשולים
    this.render();
  }

  render(): void {
    try {
      const container = document.getElementById("obstical-1");
      if (container) {
        const elementTop = document.createElement("img");
        elementTop.src = this.imgUrl;
        elementTop.classList.add("obstical-1");
        container.appendChild(elementTop);

        const elementBottom = document.createElement("img");
        elementBottom.src = this.imgUrl;
        elementBottom.classList.add("obstical-2");
        container.appendChild(elementBottom);

        this.elements = [elementTop, elementBottom];
        this.setObstaclePositions(); // מקם את המכשולים בצורה נכונה
      }
    } catch (error) {
      console.error(error);
    }
  }

  setObstaclePositions(): void {
    const topHeight = Math.random() * (window.innerHeight - this.gapSize - 150); // Random height for top obstacle
    this.elements[0].style.height = `${topHeight}px`;
    this.elements[1].style.height = `${window.innerHeight - topHeight - this.gapSize}px`;
    this.elements[0].style.left = `${window.innerWidth + 50}px`; // Start position for the top obstacle
    this.elements[1].style.left = `${window.innerWidth + 50}px`; // Start position for the bottom obstacle
    this.elements[0].style.top = "0"; // Position of the top obstacle
    this.elements[1].style.bottom = "0"; // Position of the bottom obstacle
}

moveObstacles(): void {
    this.elements.forEach((element) => {
        let currentPos = parseFloat(element.style.left) || window.innerWidth;
        currentPos -= this.obsticalsVelocity;

        // Reset position if off-screen
        if (currentPos < -element.offsetWidth) {
            this.setObstaclePositions(); // Reset position
            currentPos = window.innerWidth + 50; // Start again from the right
        }

        element.style.left = `${currentPos}px`;
    });
}

  initialPosition(): Position {
    return { x: window.innerWidth, y: window.innerHeight / 2 }; // Adjust initial position
  }

  getObstacles(): HTMLImageElement[] {
    return this.elements;
  }
}

function main(): void {
  const bird1 = new Bird({ x: 300, y: 300 }, 0, 0.4);
  console.log("Game has started");
  console.log("Bird's initial position: ", bird1.getY());

  bird1.obsticle.getObstacles().forEach((obstacle, index) => {
    console.log(
      `Obstacle ${index} initial position: left=${obstacle.style.left}, top=${obstacle.style.top}`
    );
  });
}
