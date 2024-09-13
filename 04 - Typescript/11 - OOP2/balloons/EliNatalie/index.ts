interface position {
  x: number;
  y: number;
}

class Ballon {
  id: string;
  ballonImgUrl: string;
  ExplosionUrl: string;
  exploded: boolean;
  position: position;
  constructor(
    id: string,
    ballonImgUrl: string,
    ExplosionUrl: string,
    exploded: boolean,
    position: position
  ) {
    this.id = `id-${crypto.randomUUID()}`;
    this.ballonImgUrl = ballonImgUrl;
    this.ExplosionUrl = ExplosionUrl;
    this.exploded = exploded;
  }
  get positionObj() {
    return this. position 
  }

  set positionObj(position: position) {
    this. position = position;
  }
}



function createNewBalloon () {
  const newBallon = new Ballon(
    "",
    "./dist/images/balloon.png",
    "./dist/images/balloonEX.png",
    false, {x:0, y:0}
  );
  renderBallon(newBallon);
  setTimeout(()=>{createNewBalloon();},1000)
  newBallon.positionObj = {x:0, y:100} 
}

function main() {
  createNewBalloon();
}

function renderBallon(ballon: Ballon) {
  try {
    const pageElement = document.getElementById("page") as HTMLElement;
    if (!pageElement) throw new Error("no pag found");

    const ballonElement = document.createElement("img");
    ballonElement.src = ballon.ballonImgUrl;
    ballonElement.classList.add("ballon");
    ballonElement.style.transform = `translate(0px ${ballon.position.y}px )`;

    ballonElement.id = ballon.id;
    ballonElement.addEventListener("click", () => {
      console.log(ballonElement.src);
      if (!ballon.exploded) {
        console.log("no else!");
        ballonElement.src = ballon.ExplosionUrl;
        ballonElement.classList.remove("ballon");
        ballon.exploded = true;
      } else {
        console.log("else!");
        ballonElement.src = ballon.ballonImgUrl;
        ballonElement.classList.add("ballon");
        ballon.exploded = false;
      }

    });
    ballonElement.addEventListener("mouseenter", () => {
        if(!ballon.exploded){
      const randomNumber = Math.random();
      const numberBetween0And1000 = randomNumber * 1000;
      const randomIntegerBetween0And1000 = Math.floor(numberBetween0And1000);
      ballonElement.style.transform = `translate(${randomIntegerBetween0And1000}px )`;}
    });

    pageElement.appendChild(ballonElement);
  } catch (error) {
    console.log(error);
  }
}
function pop(event: Event) {}
