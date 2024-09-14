interface Position {
  x: number;
  y: number;
}

class Mario {
  private id: string;
  private position: Position;
  public ImageURL: string;
  private isRunning: boolean;
  private intervalID: number | null;
  private isJumping: boolean;

  constructor(position: Position, ImageURL: string) {
    this.id = `id-${crypto.randomUUID()}`;
    this.position = position;
    this.ImageURL = ImageURL;
    this.isRunning = false;
    this.isJumping = false;
    this.intervalID = null;
  }

  renderMario() {
    try {
      const mario = document.getElementById("mariocharacter");
      if (!mario) throw new Error("Mario character div not found.");
      const marioIMG = document.createElement("img");
      marioIMG.src = this.ImageURL;
      marioIMG.id = this.id;
      marioIMG.style.position = "absolute";
      marioIMG.style.left = `${this.position.y}px`;
      marioIMG.style.top = `${this.position.x}px`;
      marioIMG.style.width = "100px";
      marioIMG.style.height = "200px";
      mario.appendChild(marioIMG);
    } catch (error) {
      console.error(error);
    }
  }

  jump() {
    if (this.isJumping) return; 
    this.isJumping = true;
    const marioElement = document.getElementById(this.id);
    
    if (marioElement) {
      marioElement.classList.add("jump-animation");
  
      setTimeout(() => {
        marioElement.classList.remove("jump-animation");
      }, 500);
  
      setTimeout(() => {
        this.isJumping = false; 
      }, 600);
    }
  }

  alwaysRun() {
    const marioElement = document.getElementById(this.id);
    if (marioElement) {
      this.position.y += 12;
      marioElement.style.left = `${this.position.y}px`;
    }

    if (this.position.y >= 1820) {
      alert("ניצחת יאלה תתחיל מחדש");
      this.position.y = 0;
    }
  }

  startRunning() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalID = setInterval(() => {
        this.alwaysRun();
      }, 50);
    }
  }

  stopRunning() {
    if (this.isRunning && this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
      this.isRunning = false;
      alert("המשחק נעצר");
    }
  }
}

const mario = new Mario({ x: 600, y: 0 }, "./dist/images/mario.png"); // הדיפולט לא לגעת בזה, הגדרתי מיקום שיהיה על הרצפה ושיהיה צמוד לקיר (נועם)
mario.renderMario();

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    mario.jump();
  } else if(e.key === "w") {
    mario.stopRunning();
  }

});

setInterval(() => {
  mario.startRunning();
}, 300);