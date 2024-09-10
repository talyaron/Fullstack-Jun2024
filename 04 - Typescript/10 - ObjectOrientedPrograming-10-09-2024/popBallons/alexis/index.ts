class Baloon {
  imageUrl: string;
  id: string;
  imageExplode: string;
  baloonElement: HTMLImageElement|HTMLElement;
  constructor(
    imageUrl: string,
    imageExplode: string,
    baloonElement: HTMLImageElement | null
  ) {
    try {
      this.imageUrl = imageUrl;
      this.imageExplode = imageExplode;
      this.id = crypto.randomUUID();
      if (!baloonElement) {
        throw new Error("baloon element is not found");
      }
      this.baloonElement = baloonElement;
    } catch (error) {
      console.error(error);
    }
  }

  renderBaloon() {
    this.baloonElement.src = this.imageUrl;
    this.baloonElement.classList.add('baloon');
  }
  explodeBaloon(){
    this.baloonElement.src=this.imageExplode;
    
  }
}
const baloon = document.getElementById("baloon");
if (!baloon) {
  throw new Error("no baloon");
}
const baloonOne = new Baloon(
  "../baloon1",
  "../baloon2",
  baloon);
function main() {
  try {
    if (!baloon) {
      throw new Error("no baloon");
    }
    baloonOne.baloonElement.addEventListener("click", explosionEvent);
    baloonOne.renderBaloon();
  } catch (error) {
    console.error(error);
  }
}

function explosionEvent() {
baloonOne.explodeBaloon();
  console.log(baloonOne);
}
function renderBaloon(baloonOne) {
  const baloon = document.createElement("img");
  baloon.src = baloonOne.imageUrl;
  baloon.id = baloonOne.id;
}
main();
