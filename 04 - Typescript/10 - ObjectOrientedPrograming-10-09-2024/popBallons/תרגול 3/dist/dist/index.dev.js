"use strict";

var Balloon =
/** @class */
function () {
  function Balloon(imageUrl, explosionImageUrl) {
    this.balloonElement = null;
    this.ballon = imageUrl;
    this.ballonExplosion = explosionImageUrl;
  }

  Balloon.prototype.renderBalloon = function () {
    var _this = this;

    var balloonElement = document.createElement('img');
    balloonElement.src = this.ballon;
    balloonElement.style.position = 'absolute';
    balloonElement.style.width = '200px';
    balloonElement.style.height = '100px';
    balloonElement.style.left = '50%';
    balloonElement.style.top = '50%';
    balloonElement.addEventListener('click', function () {
      return _this.explodeBalloon(balloonElement);
    });
    this.balloonElement = balloonElement;
    var field = document.getElementById('field');

    if (field) {
      field.appendChild(balloonElement);
    }
  };

  Balloon.prototype.explodeBalloon = function (balloonElement) {
    balloonElement.src = this.ballonExplosion;
  };

  return Balloon;
}();

var balloon = new Balloon('../image/2.png', '../image/1.png');
balloon.renderBalloon();