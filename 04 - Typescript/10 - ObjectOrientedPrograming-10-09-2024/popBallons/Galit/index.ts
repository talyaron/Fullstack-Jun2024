class Balloon {
    imageUrl: string;
    id: string;
    imageExplosion: string;

    constructor(imageUrl: string, imageExplosion: string) {
        this.imageUrl = imageUrl;
        this.id = crypto.randomUUID();
        this.imageExplosion = imageExplosion;
    }

    explode(balloonElement: HTMLImageElement): void {
        const computedStyle = window.getComputedStyle(balloonElement);
        const currentBottom = computedStyle.getPropertyValue('bottom');
        const currentLeft = computedStyle.getPropertyValue('left');

        balloonElement.src = this.imageExplosion;

        balloonElement.classList.remove('balloon'); 
        balloonElement.classList.add('explode-animation'); 

        balloonElement.style.bottom = currentBottom;
        balloonElement.style.left = currentLeft;
    }
}

function createBalloon(balloonInstance: Balloon) {
    const balloonContainer = document.getElementById('balloon-container') as HTMLElement;
    const balloonElement = document.createElement('img');

    balloonElement.src = balloonInstance.imageUrl;
    balloonElement.classList.add('balloon');
    balloonElement.style.left = `${Math.random() * 90}vw`;

    balloonElement.addEventListener('click', () => {
        balloonInstance.explode(balloonElement); 
    });

    balloonContainer.appendChild(balloonElement);
}

function main() {
    const numberOfBalloons = 10; 
    for (let i = 0; i < numberOfBalloons; i++) {
        const balloonInstance = new Balloon(
            './images/balloon1.png',  
            './images/balloon2.png' 
        );
        createBalloon(balloonInstance);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main();

    const refreshButton = document.getElementById('refreshButton');
    if (refreshButton) {
        refreshButton.addEventListener('click', () => {
            console.log('Refresh button clicked');
            window.location.reload();
        });
    } else {
        console.log('Refresh button not found');
    }
});
