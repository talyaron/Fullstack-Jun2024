"use strict";

var Balloon =
/** @class */
function () {
  function Balloon(imageUrl, imageExplosion) {
    this.imageUrl = imageUrl;
    this.id = crypto.randomUUID();
    this.imageExplosion = imageExplosion;
  }

  Balloon.prototype.explode = function (balloonElement) {
    balloonElement.setAttribute('src', this.imageExplosion);
    balloonElement.classList.add('explode-animation');
  };

  return Balloon;
}();

var balloonInstance = new Balloon('./images/balloon1.png', './images/balloon2.png');

function main() {
  try {
    var balloonElement_1 = document.getElementById('balloon');
    if (!balloonElement_1) throw new Error('Balloon element not found');
    balloonElement_1.src = balloonInstance.imageUrl;
    balloonElement_1.addEventListener('click', function () {
      balloonInstance.explode(balloonElement_1);
    });
  } catch (error) {
    console.error(error.message);
  }
}

document.addEventListener('DOMContentLoaded', main);