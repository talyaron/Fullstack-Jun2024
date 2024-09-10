class Balloon {
    ballon: string;
    ballonExplosion: string;
    balloonElement: HTMLImageElement;

    constructor(imageUrl: string, explosionImageUrl: string) {
        this.ballon = imageUrl;
        this.ballonExplosion = explosionImageUrl;
    }

    renderBalloon() {
        const balloonElement = document.createElement('img');
        balloonElement.src = this.ballon;
        balloonElement.style.width = '200px';
        balloonElement.style.height = '200px';
        balloonElement.addEventListener('click', () => this.explodeBalloon(balloonElement));

        this.balloonElement = balloonElement;

        const field = document.getElementById('field');
        if (field) {
            field.appendChild(balloonElement);
        }
    }

    explodeBalloon(balloonElement: HTMLImageElement) {
        balloonElement.src = this.ballonExplosion;
    }
}

const balloon = new Balloon('../image/2.png','../image/1.png' );
balloon.renderBalloon();