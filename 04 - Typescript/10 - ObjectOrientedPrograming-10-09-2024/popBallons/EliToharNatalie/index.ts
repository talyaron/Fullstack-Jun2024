class Ballon {
  id: string;
  ballonImgUrl: string;
  ExplosionUrl: string;
  constructor(id: string, ballonImgUrl: string, ExplosionUrl: string) {
    this.id = `id-${crypto.randomUUID()}`;
    this.ballonImgUrl = ballonImgUrl;
    this.ExplosionUrl = ExplosionUrl;
  }
}

const ballon1 = new Ballon("", "./dist/images/balloon.png", "");
const ballon2 = new Ballon("", "./dist/images/balloon.png", "");
const ballon3 = new Ballon("", "./dist/images/balloon.png", "");
function main() {
  renderBallon(ballon2);
}

function renderBallon(ballon: Ballon) {
  try {
    const pageElement = document.getElementById("page") as HTMLElement;
    if (!pageElement) throw new Error("no pag found");

    const ballonElement = document.createElement("img");
    ballonElement.src = ballon.ballonImgUrl;
    ballonElement.id = ballon.id;
    ballonElement.addEventListener("click", () => {
      ballonElement.src = ballon.ExplosionUrl;
    });

    pageElement.appendChild(ballonElement);
  } catch (error) {
    console.log(error);
  }
}
function pop(event: Event) {}
