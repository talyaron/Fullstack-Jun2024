class Ballon {
    imageUrl: string;
    explosionImage: string;
    id: string;
    htmlElement: HTMLImageElement;

    constructor(parentElement: HTMLElement,imageUrl: string, explosionImage: string) {
        this.imageUrl = imageUrl;
        this.explosionImage = explosionImage;
        this.id = crypto.randomUUID();
        this.renderBallon(parentElement);
    }

    renderBallon(parentElement: HTMLElement) {
        this.htmlElement = document.createElement('img');
        this.htmlElement.src = this.imageUrl;
        this.htmlElement.addEventListener('click',()=> this.explode());
        parentElement.appendChild(this.htmlElement);
    }

    explode() {
        this.htmlElement.src = this.explosionImage
    }

}

function main() {
    const parentElement = document.getElementById('ballon');
    if(!parentElement) return;
    const ballon1 = new Ballon(parentElement, "https://supporters.de/media/image/product/489/lg/premium-luftballons-rot-30cm-durchmesser.jpg", "https://rukminim2.flixcart.com/image/850/1000/l1l1rww0/balloon/u/5/k/4-25-premium-quality-metallic-shining-blue-ballon-pack-of-25-original-imagd4fqkeqgfysg.jpeg?q=90&crop=false");

}

main();