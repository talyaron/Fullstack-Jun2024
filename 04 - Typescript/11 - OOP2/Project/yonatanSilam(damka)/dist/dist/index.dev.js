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

var lastPlay = [];
var lastPosition = [];
var statistics = {
  turn: true,
  whiteScore: 12,
  blackScore: 12
};

var Square =
/** @class */
function () {
  function Square(color, occupied) {
    if (occupied === void 0) {
      occupied = false;
    }

    this.color = color;
    this.occupied = occupied;
  }

  Square.prototype.eat = function (row, colum) {
    var _a, _b, _c;

    var lastOne = lastPlay.pop();
    var lastPos = lastPosition.pop();
    console.log(lastPos);

    if (lastOne === null || lastOne === void 0 ? void 0 : lastOne.piece) {
      putSolider((_a = lastOne === null || lastOne === void 0 ? void 0 : lastOne.piece) === null || _a === void 0 ? void 0 : _a.color, row, colum);
    }

    if ((lastPos === null || lastPos === void 0 ? void 0 : lastPos.row) != undefined && (lastPos === null || lastPos === void 0 ? void 0 : lastPos.colum) != undefined) {
      deleteSolider(lastPos === null || lastPos === void 0 ? void 0 : lastPos.row, lastPos === null || lastPos === void 0 ? void 0 : lastPos.colum);

      if ((_c = (_b = board[row][colum]) === null || _b === void 0 ? void 0 : _b.piece) === null || _c === void 0 ? void 0 : _c.color) {
        statistics.blackScore--;

        if ((lastPos === null || lastPos === void 0 ? void 0 : lastPos.colum) > colum) {
          deleteSolider(row + 1, colum + 1);
        }

        if ((lastPos === null || lastPos === void 0 ? void 0 : lastPos.colum) < colum) {
          deleteSolider(row + 1, colum - 1);
        }
      } else {
        statistics.whiteScore--;

        if ((lastPos === null || lastPos === void 0 ? void 0 : lastPos.colum) > colum) {
          deleteSolider(row - 1, colum + 1);
        }

        if ((lastPos === null || lastPos === void 0 ? void 0 : lastPos.colum) < colum) {
          deleteSolider(row - 1, colum - 1);
        }
      }
    }

    statistics.turn = !statistics.turn;
    renderGame();
  };

  Square.prototype.move = function (row, colum) {
    var _a;

    var lastOne = lastPlay.pop();
    var lastPos = lastPosition.pop();

    if (lastOne === null || lastOne === void 0 ? void 0 : lastOne.piece) {
      putSolider((_a = lastOne === null || lastOne === void 0 ? void 0 : lastOne.piece) === null || _a === void 0 ? void 0 : _a.color, row, colum);
    }

    deleteSolider(Number(lastPos === null || lastPos === void 0 ? void 0 : lastPos.row), Number(lastPos === null || lastPos === void 0 ? void 0 : lastPos.colum));
    statistics.turn = !statistics.turn;
    fixBackground();
    renderGame();
  };

  return Square;
}(); // regular piece


var Piece =
/** @class */
function () {
  function Piece(color, image) {
    this.color = color;
    this.imageUrl = image;
  }

  Piece.prototype.canIMove = function (row, colum) {};

  Piece.prototype.getPosition = function () {};

  Piece.prototype.move = function (row, colum) {};

  return Piece;
}();

var Solider =
/** @class */
function (_super) {
  __extends(Solider, _super);

  function Solider(color, image) {
    return _super.call(this, color, image) || this;
  }

  Solider.prototype.getPosition = function () {};

  Solider.prototype.canIMove = function (row, colum) {
    var _a, _b, _c, _d;

    fixBackground();
    lastPlay.push(board[row][colum]);
    lastPosition.push({
      row: row,
      colum: colum
    }); //black

    if (!this.color) {
      if (board[row + 1][colum + 1] != undefined) {
        if (!board[row + 1][colum + 1].occupied) {
          board[row + 1][colum + 1].html.style.backgroundColor = "red";
          board[row + 1][colum + 1].moveThere = true;
        } else if (((_a = board[row + 1][colum + 1].piece) === null || _a === void 0 ? void 0 : _a.color) && board[row + 1][colum + 1].occupied) {
          if (board[row + 2][colum + 2]) {
            if (!board[row + 2][colum + 2].occupied) {
              board[row + 2][colum + 2].html.style.backgroundColor = "yellow";
              board[row + 2][colum + 2].jumpThere = true;
            }
          }
        }
      }

      if (board[row + 1][colum - 1] != undefined) {
        if (!board[row + 1][colum - 1].occupied) {
          board[row + 1][colum - 1].html.style.backgroundColor = "red";
          board[row + 1][colum - 1].moveThere = true;
        } else if (((_b = board[row + 1][colum - 1].piece) === null || _b === void 0 ? void 0 : _b.color) && board[row + 1][colum - 1].occupied) {
          if (board[row + 2][colum - 2]) {
            if (!board[row + 2][colum - 2].occupied) {
              board[row + 2][colum - 2].html.style.backgroundColor = "yellow";
              board[row + 2][colum - 2].jumpThere = true;
            }
          }
        }
      } //white

    } else {
      if (board[row - 1][colum - 1] != undefined) {
        if (!board[row - 1][colum - 1].occupied) {
          board[row - 1][colum - 1].html.style.backgroundColor = "red";
          board[row - 1][colum - 1].moveThere = true;
          console.log(board);
        } else if (!((_c = board[row - 1][colum - 1].piece) === null || _c === void 0 ? void 0 : _c.color) && board[row - 1][colum - 1].occupied) {
          if (board[row - 2][colum - 2]) {
            if (!board[row - 2][colum - 2].occupied) {
              board[row - 2][colum - 2].html.style.backgroundColor = "yellow";
              board[row - 2][colum - 2].jumpThere = true;
            }
          }
        }
      }

      if (board[row - 1][colum + 1] != undefined) {
        if (!board[row - 1][colum + 1].occupied) {
          board[row - 1][colum + 1].html.style.backgroundColor = "red";
          board[row - 1][colum + 1].moveThere = true;
        } else if (!((_d = board[row - 1][colum + 1].piece) === null || _d === void 0 ? void 0 : _d.color) && board[row - 1][colum + 1].occupied) {
          if (board[row - 2][colum + 2]) {
            if (!board[row - 2][colum + 2].occupied) {
              board[row - 2][colum + 2].html.style.backgroundColor = "yellow";
              board[row - 2][colum + 2].jumpThere = true;
            }
          }
        }
      }
    }
  };

  return Solider;
}(Piece);

var Esteeple = new Solider(false, ""); //create the board

var board = [];

function main() {
  var _a;

  try {
    statistics.blackScore = 12;
    statistics.whiteScore = 12;
    statistics.turn = true;
    console.log(statistics);
    lastPlay.length = 0;
    var turn = document.querySelector("#turn");
    if (!turn) throw new Error("not find #turn");
    var whoTurn = statistics.turn ? "white" : "red";
    turn.innerHTML = "<h1> " + whoTurn + " turn </h1>";
    var game = document.querySelector("#game");
    if (!game) throw new Error("not find #game");

    for (var i = 0; i < 8; i++) {
      var rowArray = [];

      for (var n = 0; n < 8; n++) {
        var isGreen = (i + n) % 2 === 0;
        var color = isGreen ? "green" : "white";
        rowArray.push(new Square(color));
      }

      board.push(rowArray);
    }

    var _loop_1 = function _loop_1(i) {
      var _loop_2 = function _loop_2(n) {
        var square = document.createElement("div");
        square.addEventListener("click", function () {
          return active(i, n);
        });
        var isGreen = (i + n) % 2 === 0;
        var color = isGreen ? "green" : "beige";
        square.classList.add("" + color);

        if (!isGreen) {
          if (i != 3 && i != 4) if (i < 3) putSolider(false, i, n);else {
            putSolider(true, i, n);
          }
        }

        if (board[i][n].occupied) {
          var img = document.createElement("img");
          img.src = ((_a = board[i][n].piece) === null || _a === void 0 ? void 0 : _a.imageUrl) || "";
          square.appendChild(img);
        }

        board[i][n].html = square;
        game.appendChild(square);
      };

      for (var n = 0; n < 8; n++) {
        _loop_2(n);
      }
    }; //put pieces
    // putSolider(false, 4, 3);
    // putSolider(true, 3, 4);


    for (var i = 0; i < 8; i++) {
      _loop_1(i);
    }
  } catch (e) {
    console.error(e);
  }
}

function active(row, colum) {
  var _a;

  var place = board[row][colum];
  var piece = place.piece;

  if (place.occupied && ((_a = place.piece) === null || _a === void 0 ? void 0 : _a.color) == statistics.turn) {
    console.log(1);
    piece === null || piece === void 0 ? void 0 : piece.canIMove(row, colum);
  }

  if (place.moveThere) {
    console.log(2);
    place === null || place === void 0 ? void 0 : place.move(row, colum);
  }

  if (place.jumpThere) {
    console.log(3);
    place === null || place === void 0 ? void 0 : place.eat(row, colum);
  }
}

function fixBackground() {
  for (var i = 0; i < 8; i++) {
    for (var n = 0; n < 8; n++) {
      board[i][n].moveThere = false;
      board[i][n].jumpThere = false;
      var isGreen = (i + n) % 2 === 0;
      var color = isGreen ? "green" : "beige";
      board[i][n].html.style.backgroundColor = color;
    }
  }
}

function renderGame() {
  var _a;

  var turn = document.querySelector("#turn");
  if (!turn) throw new Error("not find #turn");
  var whoTurn = statistics.turn ? "white" : "red";
  turn.innerHTML = "<h1> " + whoTurn + " turn </h1>";
  var game = document.querySelector("#game");
  if (!game) throw new Error("not find #game");
  game.innerHTML = "";

  var _loop_3 = function _loop_3(i) {
    var _loop_4 = function _loop_4(n) {
      var square = document.createElement("div");
      square.addEventListener("click", function () {
        return active(i, n);
      });
      var isGreen = (i + n) % 2 === 0;
      var color = isGreen ? "green" : "beige";
      square.classList.add("" + color);

      if (board[i][n].occupied) {
        var img = document.createElement("img");
        img.src = ((_a = board[i][n].piece) === null || _a === void 0 ? void 0 : _a.imageUrl) || "";
        square.appendChild(img);
      }

      board[i][n].html = square;
      game.appendChild(square);
    };

    for (var n = 0; n < 8; n++) {
      _loop_4(n);
    }
  };

  for (var i = 0; i < 8; i++) {
    _loop_3(i);
  }
}

function putSolider(color, row, colum) {
  var imgBlack = "./damka/red-removebg-preview.png";
  var imgWhite = "./damka/white-removebg-preview.png";

  if (row <= board.length && row <= board[row].length) {
    var img = color ? imgWhite : imgBlack;
    var steeple = new Solider(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
  }
}

function deleteSolider(row, colum) {
  var img = "";
  var Esteeple = new Solider(false, img);
  board[row][colum].piece = Esteeple;
  board[row][colum].occupied = false;
  console.log(statistics);

  if (statistics.blackScore == 0) {
    stopGame(true);
  }

  if (statistics.whiteScore == 0) {
    stopGame(false);
  }
}

function stopGame(white) {
  var game = document.querySelector("#game");
  if (!game) throw new Error("not find #game");
  game.innerHTML = "";

  if (white) {
    var win = document.querySelector("#win");
    if (!win) throw new Error("not find #win");
    win.innerHTML = "<h1> White win!!!! </h1>";
  } else {
    var win = document.querySelector("#win");
    if (!win) throw new Error("not find #win");
    win.innerHTML = "<h1> Red win!!!! </h1>";
  }
}

console.log(board);