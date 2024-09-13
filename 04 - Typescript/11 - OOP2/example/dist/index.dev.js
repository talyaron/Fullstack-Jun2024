"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ballon =
/*#__PURE__*/
function () {
  function Ballon(imageUrl, position) {
    _classCallCheck(this, Ballon);

    try {
      this.imageUrl = imageUrl;
      this.position = position;
      this.id = "id-".concat(crypto.randomUUID());
    } catch (error) {
      console.error(error);
    }
  } //methods
  //explode ballon


  _createClass(Ballon, [{
    key: "explode",
    value: function explode() {
      console.log("Ballon ".concat(this.id, " exploded"));
    }
  }]);

  return Ballon;
}();

var ballon = new Ballon('ballon.png', {
  x: 0,
  y: 0
});
console.log(ballon);
ballon.id = "id-123";
console.log(ballon);