class Balloon {
  public  imageUrl: string;
    private id: string;
   public imageExplosion: string;
   public onExplode: () => void; 

    constructor(imageUrl: string, imageExplosion: string, onExplode: () => void) {
        this.imageUrl = imageUrl;
        this.id = crypto.randomUUID();
        this.imageExplosion = imageExplosion;
        this.onExplode = onExplode; 
        console.log(`Balloon created with ID: ${this.id}, image: ${this.imageUrl}`);
    }

    explode(balloonElement: HTMLImageElement): void {
        const computedStyle = window.getComputedStyle(balloonElement);
        const currentBottom = computedStyle.getPropertyValue('bottom');
        const currentLeft = computedStyle.getPropertyValue('left');

        console.log(`Balloon exploded with ID: ${this.id}, bottom: ${currentBottom}, left: ${currentLeft}`);

        balloonElement.src = this.imageExplosion;

        balloonElement.classList.remove('balloon'); 
        balloonElement.classList.add('explode-animation'); 

        balloonElement.style.bottom = currentBottom;
        balloonElement.style.left = currentLeft;

        if (this.onExplode) {
            this.onExplode();
            console.log(`Balloon exploded callback executed. Total exploded: ${explodedBalloons}`);
        }
    }
}

let totalBalloons: number;
let explodedBalloons: number = 0;

function createBalloon(balloonInstance: Balloon) {
    const balloonContainer = document.getElementById('balloon-container') as HTMLElement;
    const balloonElement = document.createElement('img');

    balloonElement.src = balloonInstance.imageUrl;
    balloonElement.classList.add('balloon');
    balloonElement.style.left = `${Math.random() * 90}vw`;

    console.log(`Balloon added to DOM with ID: ${balloonInstance.id}`);

    balloonElement.addEventListener('click', () => {
        console.log(`Balloon clicked with ID: ${balloonInstance.id}`);
        balloonInstance.explode(balloonElement); 
    });

    balloonContainer.appendChild(balloonElement);
}

function main() {
    totalBalloons = 10; 
    console.log(`Starting game with total balloons: ${totalBalloons}`);
    for (let i = 0; i < totalBalloons; i++) {
        const balloonInstance = new Balloon(
            './images/balloon1.png',  
            './images/balloon2.png',
            () => {
                explodedBalloons++;
                console.log(`Balloons exploded so far: ${explodedBalloons}`);
                if (explodedBalloons === totalBalloons) {
                    console.log("All balloons exploded. Stopping timer.");
                    stopTimer(); 
                }
            }
        );
        createBalloon(balloonInstance);
    }
}

let startTime: number;
let timerInterval: number | undefined;

function startTimer() {
    startTime = Date.now();
    console.log("Timer started.");
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timerInterval !== undefined) {
        clearInterval(timerInterval);
        timerInterval = undefined; 
        console.log("Timer stopped.");
    }
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    const timerElement = document.getElementById('timer') as HTMLElement;
    timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    console.log(`Timer updated: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
}

function pad(number: number): string {
    return number.toString().padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded. Initializing game.");
    main();
    startTimer(); 
});
