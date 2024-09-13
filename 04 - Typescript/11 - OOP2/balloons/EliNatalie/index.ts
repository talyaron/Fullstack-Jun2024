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
    exploded: boolean
  ) {
    this.id = `id-${crypto.randomUUID()}`;
    this.ballonImgUrl = ballonImgUrl;
    this.ExplosionUrl = ExplosionUrl;
    this.exploded = exploded;
  }
  get positionObj() {
    return this.position;
  }

  set positionObj(position: position) {
    this.position = position;
  }
}

function createNewBalloon() {
  const newBallon = new Ballon(
    "",
    "./dist/images/balloon.png",
    "./dist/images/balloonEX.png",
    false
  );
  const randomX = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  newBallon.positionObj = { x: randomX, y: 0 };
  renderBallon(newBallon);

  //newBallon.positionObj = { x: randomX, y: 100 };
  setTimeout(() => {
    createNewBalloon();
  }, 1000);

  // console.log(newBallon.positionObj);
}

function main() {
  createNewBalloon();
}

function renderBallon(ballon: Ballon) {
  try {
    const pageElement = document.getElementById("page") as HTMLElement;
    if (!pageElement) throw new Error("no pag found");

    const ballonElement = document.createElement("img");
    ballonElement.draggable = false; 
    ballonElement.src = ballon.ballonImgUrl;
    ballonElement.classList.add("ballon");
    ballonElement.style.bottom = "0";
    ballonElement.style.left = `${ballon.positionObj.x}vw`;

    ballonElement.id = ballon.id;
    ballonElement.addEventListener("click", () => {
      console.log(ballonElement.src);
      if (!ballon.exploded) {
        console.log("no else!");
        ballonElement.src = ballon.ExplosionUrl;
        ballonElement.classList.remove("ballon");
        ballon.exploded = true;
        setTimeout(() => {
          removeBallon(ballonElement);
        }, 300);
      } else {
      }
    });

    pageElement.appendChild(ballonElement);
  } catch (error) {
    console.log(error);
  }
}
function removeBallon(ballonElement: HTMLElement) {
  ballonElement.remove();
}
