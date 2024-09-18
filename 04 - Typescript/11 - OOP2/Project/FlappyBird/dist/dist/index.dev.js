"use strict";

var Bird =
/** @class */
function () {
  function Bird(position, velocity, gravity) {
    this.id = "-id" + crypto.randomUUID();
    this.position = position;
    this.imgUrl = "https://opengameart.org/sites/default/files/GIF-sample.gif";
    this.flyingBirdImgUrl = "https://w7.pngwing.com/pngs/253/78/png-transparent-flappy-bird-sprite-bird-animals-desktop-wallpaper-flappy-bird.png";
    this.gravity = gravity;
    this.velocity = velocity;
    this.renderBird();
    this.isFlying = false;
  }

  Bird.prototype.initialPosition = function () {};

  Bird.prototype.moveWings = function () {}; //methods 


  Bird.prototype.renderBird = function () {
    console.log("in render");

    try {
      this.element = document.createElement('img');

      if (this.isFlying) {
        this.element.src = this.flyingBirdImgUrl;
      } else {
        this.element.src = this.imgUrl;
      }

      this.element.id = this.id;
      this.element.style.position = 'absolute';
      this.element.style.left = this.position.x + '%';
      this.element.style.top = this.position.y + '%';
      this.element.classList.add('bird');
      document.body.appendChild(this.element);
    } catch (e) {
      console.error(e);
    }
  };

  return Bird;
}();

function main() {
  new Bird({
    x: 50,
    y: 50
  }, 0, 0);
  console.log("i");
}

;