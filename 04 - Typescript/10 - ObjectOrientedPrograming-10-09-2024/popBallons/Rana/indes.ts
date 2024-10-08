class Balloon {
    image: string;
    id: string;
    constructor(image: string) {
      this.image = image;
      this.id = crypto.randomUUID();
    }
  }
  
  const balloon = document.getElementById("balloon") as HTMLImageElement;
  if (!balloon) throw new Error("No balloon");
  console.log(balloon);
  
  const baloonOne = new Balloon("./photos/boyorgirl1.png");
  console.log(baloonOne);
  function renderBalloon() {
    try {
      
      balloon.src = baloonOne.image;
      balloon.id = baloonOne.id;
    } catch (error) {
      console.error(error);
    }
    
  }
  
  function explode() {
    balloon.src = "./photos/girl2.png";
    console.log(explode);
  }
  
  function main() {
    renderBalloon();
    balloon.addEventListener("click", explode);
  }
  
  main();
  