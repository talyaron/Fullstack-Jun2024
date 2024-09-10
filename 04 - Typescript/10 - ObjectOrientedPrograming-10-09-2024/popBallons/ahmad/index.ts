interface Position {
    x: number;
    y: number;
}

class Balloon {
    id: string;
    imageUrl: string;
    explosionUrl: string;
    position: Position;
    balloonElement: HTMLElement | null = null;
    exploded: boolean = false;

    constructor(imageUrl: string, explosionUrl: string, position: Position) {
        this.id = `id-${crypto.randomUUID()}`;
        this.imageUrl = imageUrl;
        this.explosionUrl = explosionUrl;
        this.position = position;
    }

    setBalloonElement(balloonElement: HTMLElement) {
        this.balloonElement = balloonElement;
    }

    explode() {
        try {
            if (!this.balloonElement) throw new Error('Balloon element not found');
            if (this.exploded) return; 

            this.exploded = true;
            const balloonImg = this.balloonElement as HTMLImageElement;
            balloonImg.src = this.explosionUrl; 
        } catch (error) {
            console.error(error);
        }
    }
}



const balloon1 = new Balloon('./image/baloon2.png', './image/bang.png', { x: 1000, y: 500 });


function renderBalloon(balloon: Balloon) {
    try {
        const balloonElement = document.createElement('img');
        balloonElement.src = balloon.imageUrl;
        balloonElement.id = balloon.id;
        balloonElement.classList.add('balloon');
        balloonElement.style.position = 'absolute';
        balloonElement.style.left = balloon.position.x + 'px';
        balloonElement.style.top = balloon.position.y + 'px';

        balloonElement.addEventListener('click', () => {
            balloon.explode();
        });

        balloon.setBalloonElement(balloonElement);

        const field = document.getElementById('field');
        if (!field) {
            throw new Error('Field not found');
        }
        field.appendChild(balloonElement);
    } catch (error) {
        console.error(error);
    }
}


renderBalloon(balloon1);

