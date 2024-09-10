class Balloon {
    id: string;
    imageUrl: string;
    explosionImage: string;
  
    constructor(id: string, imageUrl: string, explosionImage: string) {
      this.id = id;
      this.imageUrl = imageUrl;
      this.explosionImage = explosionImage;
    }
  
    // פונקציה להצגת הבלון
    displayBalloon() {
      const balloon = document.getElementById('balloon');
      if (balloon) {
        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.id = this.id;
        img.style.cursor = 'pointer';
  
        // הוספת אירוע לחיצה על התמונה
        img.addEventListener('click', () => {
          this.explodeBalloon(img);
        });
  
        balloon.appendChild(img);
      }
    }
  
    // פונקציה לפיצוץ הבלון
    explodeBalloon(imgElement: HTMLImageElement) {
      imgElement.src = this.explosionImage; // החלפת התמונה בתמונת הפיצוץ
    }
  }
  
  // יצירת בלון והצגתו על המסך
  const firstBalloon = new Balloon('balloon1', 'images/balloon.png', 'images/explosion.png');
  firstBalloon.displayBalloon();
  