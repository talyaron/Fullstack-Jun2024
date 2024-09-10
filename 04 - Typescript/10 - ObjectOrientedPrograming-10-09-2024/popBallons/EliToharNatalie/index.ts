class Ballon {
  id: string;
  ballonImgUrl: string;
  ExplosionUrl: string;
  exploded: boolean;
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
}

const ballon1 = new Ballon(
  "",
  "./dist/images/balloon.png",
  "./dist/images/balloonEX.png",
  false
);
const ballon2 = new Ballon(
  "",
  "./dist/images/balloon.png",
  "./dist/images/balloonEX.png",
  false
);
const ballon3 = new Ballon(
  "",
  "./dist/images/balloon.png",
  "./dist/images/balloonEX.png",
  false
);
function main() {
  renderBallon(ballon2);
}

function renderBallon(ballon: Ballon) {
  try {
    const pageElement = document.getElementById("page") as HTMLElement;
    if (!pageElement) throw new Error("no pag found");

    const ballonElement = document.createElement("img");
    ballonElement.src = ballon.ballonImgUrl;
    ballonElement.classList.add("ballon");

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

      //alert("you did it");
    });
    ballonElement.addEventListener("mouseenter", () => {
        if(!ballon.exploded){
      const randomNumber = Math.random();
      const numberBetween0And1000 = randomNumber * 1000;
      const randomIntegerBetween0And1000 = Math.floor(numberBetween0And1000);
      ballonElement.style.left = randomIntegerBetween0And1000 + "px";}
    });

    pageElement.appendChild(ballonElement);
  } catch (error) {
    console.log(error);
  }
}
function pop(event: Event) {}
