"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var balloons = [];

var Balloon =
/** @class */
function () {
  function Balloon(imageUrl) {
    this.imageUrl = imageUrl;

    try {
      this.imageUrl = imageUrl;
      this.id = "id-" + crypto.randomUUID();
      this.explosionUrl = './explosion.png';
    } catch (error) {
      console.error(error);
    }
  } //methods
  //explode ballon


  Balloon.prototype.renderBallon = function (mainElement) {
    var _this = this;

    try {
      if (!mainElement) throw new Error('Main element is required');
      this.position = this.createRandomPosition();
      this.domElement = document.createElement('div');
      this.domElement.classList.add('balloon');
      this.domElement.style.position = 'absolute';
      this.domElement.style.left = this.position.x + "%";
      this.domElement.style.top = this.position.y + "%";
      this.domElement.style.backgroundImage = "url(" + this.imageUrl + ")";
      this.domElement.style.width = '10%';
      this.domElement.style.height = '10%';
      this.domElement.style.backgroundSize = 'contain';
      this.domElement.style.backgroundRepeat = 'no-repeat';
      this.domElement.addEventListener('click', function () {
        _this.explode();
      });
      this.domElement.addEventListener('transitionend', function () {
        _this.explode();
      });
      mainElement.appendChild(this.domElement);
    } catch (error) {
      console.error(error);
    }
  };

  Balloon.prototype.createRandomPosition = function () {
    return {
      x: Math.random() * 100,
      y: 50
    };
  };

  Object.defineProperty(Balloon.prototype, "getPosition", {
    get: function get() {
      return this.position;
    },
    enumerable: false,
    configurable: true
  });

  Balloon.prototype.flyBalloon = function () {
    this.domElement.style.top = "-20px";
  };

  Balloon.prototype.explode = function () {
    var _this = this;

    this.imageUrl = this.explosionUrl;
    this.domElement.style.backgroundImage = "url(" + this.imageUrl + ")";
    setTimeout(function () {
      _this.domElement.remove();
    }, 3000);
  };

  Object.defineProperty(Balloon.prototype, "balloonId", {
    get: function get() {
      return this.id;
    },
    enumerable: false,
    configurable: true
  });
  return Balloon;
}();

setInterval(function () {
  var ballon = new Balloon('./balloon.png'); // console.log(checkIfBallonHasSamePosition(ballon));

  balloons.push(ballon);
  ballon.renderBallon(document.querySelector("#balloons"));
  setTimeout(function () {
    ballon.flyBalloon();
    removeBallonFromList(ballon.balloonId);
  }, 20);
}, 1000);

function removeBallonFromList(id) {
  var index = balloons.findIndex(function (b) {
    return b.balloonId === id;
  });

  if (index !== -1) {
    balloons.splice(index, 1);
  }
}

var Dragon =
/** @class */
function (_super) {
  __extends(Dragon, _super);

  function Dragon(imageUrl) {
    return _super.call(this, imageUrl) || this;
  }

  Dragon.prototype.moveLeft = function () {
    this.position.x -= 10;
    this.domElement.style.left = this.position.x + "%";
  };

  Dragon.prototype.moveRight = function () {
    this.position.x += 10;
    this.domElement.style.left = this.position.x + "%";
  };

  return Dragon;
}(Balloon);

var dragon = new Dragon('./dragon.png');
dragon.renderBallon(document.querySelector("#balloons"));
console.log("test 2");
document.body.addEventListener('keydown', function (e) {
  console.log("test");

  if (e.key === 'ArrowLeft') {
    console.log("move left");
    dragon.moveLeft();
  }

  if (e.key === 'ArrowRight') {
    console.log("move right");
    dragon.moveRight();
  }
});