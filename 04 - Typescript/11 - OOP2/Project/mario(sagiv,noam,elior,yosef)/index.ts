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
  public score:number;
  private scoreParagraph: HTMLParagraphElement;
  private scoreIntervalID: number | null;

  constructor(position: Position, ImageURL: string, score:number) {
    this.id = `id-${crypto.randomUUID()}`;
    this.position = position;
    this.ImageURL = ImageURL;
    this.isRunning = false;
    this.isJumping = false;
    this.intervalID = null;
    this.score = score;
  }
// שגיב
  renderScore() {
    try {
      const scoreDiv = document.getElementById("score");
      if (scoreDiv) {
        console.log("Score div found"); 
        this.scoreParagraph = document.createElement("p");
        this.scoreParagraph.innerText = `Score: ${this.score}`;
        scoreDiv.appendChild(this.scoreParagraph);
        console.log("Score paragraph added"); 
      } else {
        console.log("Score div not found");
      }
    } catch (error) {
      console.error(error);
    }
  }

  updateScore() { // update game score
    this.score += 1; // every secend add one point
    this.scoreParagraph.innerText = `Score: ${this.score}`;
  }

  startScoreTimer() { //enable game timer
    this.scoreIntervalID = setInterval(() => {
      this.updateScore();
    }, 100); 
  }

  stopScoreTimer() { // עוצר את טיימר הניקוד
    if (this.scoreIntervalID) {
      clearInterval(this.scoreIntervalID);
      this.scoreIntervalID = null;
    }
    
  }
  resetScore() {
    this.score = 0;
    if (this.scoreParagraph) {
      this.scoreParagraph.innerText = `Score: ${this.score}`;
    }
  }
  

// נועם
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
      this.renderScore(); //render score (שגיב)
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
      this.resetScore();
    }
  }

  startRunning() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalID = setInterval(() => {
        this.alwaysRun();
      }, 50);
      this.startScoreTimer(); //start the timer (שגיב)
    }
  }

  stopRunning() {
    if (this.isRunning && this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
      this.isRunning = false;
      this.stopScoreTimer(); //stop game timer (שגיב)
      alert("המשחק נעצר");
    }
  }

}


const mario = new Mario({ x: 600, y: 0 }, "./dist/images/mario.png", 0); // הדיפולט לא לגעת בזה, הגדרתי מיקום שיהיה על הרצפה ושיהיה צמוד לקיר (נועם)
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