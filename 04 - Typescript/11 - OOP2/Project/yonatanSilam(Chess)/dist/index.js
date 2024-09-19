var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Square = /** @class */ (function () {
    function Square(color, occupied) {
        if (occupied === void 0) { occupied = false; }
        this.color = color;
        this.occupied = occupied;
    }
    return Square;
}());
// regular piece
var Piece = /** @class */ (function () {
    function Piece(color, image) {
        this.color = color;
        this.imageUrl = image;
    }
    Piece.prototype.canIMove = function (row, colum) { };
    Piece.prototype.getPosition = function () { };
    return Piece;
}());
var Solider = /** @class */ (function (_super) {
    __extends(Solider, _super);
    function Solider(color, image) {
        return _super.call(this, color, image) || this;
    }
    Solider.prototype.getPosition = function () { };
    Solider.prototype.canIMove = function (row, colum) {
        var _a, _b, _c, _d, _e, _f;
        fixBackground();
        //black
        if (!this.color) {
            if (!board[row + 1][colum].occupied) {
                board[row + 1][colum].html.style.backgroundColor = "red";
            }
            if ((_a = board[row + 1][colum + 1].piece) === null || _a === void 0 ? void 0 : _a.color) {
                board[row + 1][colum + 1].html.style.backgroundColor = "red";
            }
            if ((_b = board[row + 1][colum - 1].piece) === null || _b === void 0 ? void 0 : _b.color) {
                board[row + 1][colum - 1].html.style.backgroundColor = "red";
            }
            //white
        }
        else {
            if (!board[row - 1][colum].occupied) {
                board[row - 1][colum].html.style.backgroundColor = "red";
            }
            if (!((_c = board[row - 1][colum - 1].piece) === null || _c === void 0 ? void 0 : _c.color) &&
                ((_d = board[row - 1][colum - 1].piece) === null || _d === void 0 ? void 0 : _d.color) != undefined) {
                board[row - 1][colum - 1].html.style.backgroundColor = "red";
            }
            if (!((_e = board[row - 1][colum + 1].piece) === null || _e === void 0 ? void 0 : _e.color) &&
                ((_f = board[row - 1][colum + 1].piece) === null || _f === void 0 ? void 0 : _f.color) != undefined) {
                board[row - 1][colum + 1].html.style.backgroundColor = "red";
            }
        }
    };
    return Solider;
}(Piece));
var Steeple = /** @class */ (function (_super) {
    __extends(Steeple, _super);
    function Steeple(color, image) {
        return _super.call(this, color, image) || this;
    }
    Steeple.prototype.canIMove = function (row, colum) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        fixBackground();
        if (this.color) {
            for (var i = colum + 1; i < 8; i++) {
                if ((!((_a = board[row][i].piece) === null || _a === void 0 ? void 0 : _a.color) &&
                    ((_b = board[row][i].piece) === null || _b === void 0 ? void 0 : _b.color) != undefined) ||
                    !board[row][i].occupied) {
                    board[row][i].html.style.backgroundColor = "red";
                    if (!((_c = board[row][i].piece) === null || _c === void 0 ? void 0 : _c.color) &&
                        ((_d = board[row][i].piece) === null || _d === void 0 ? void 0 : _d.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
            for (var i = colum - 1; i >= 0; i--) {
                if ((!((_e = board[row][i].piece) === null || _e === void 0 ? void 0 : _e.color) &&
                    ((_f = board[row][i].piece) === null || _f === void 0 ? void 0 : _f.color) != undefined) ||
                    !board[row][i].occupied) {
                    board[row][i].html.style.backgroundColor = "red";
                    if (!((_g = board[row][i].piece) === null || _g === void 0 ? void 0 : _g.color) &&
                        ((_h = board[row][i].piece) === null || _h === void 0 ? void 0 : _h.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
            for (var i = row - 1; i >= 0; i--) {
                if ((!((_j = board[i][colum].piece) === null || _j === void 0 ? void 0 : _j.color) &&
                    ((_k = board[i][colum].piece) === null || _k === void 0 ? void 0 : _k.color) != undefined) ||
                    !board[i][colum].occupied) {
                    board[i][colum].html.style.backgroundColor = "red";
                    if (!((_l = board[i][colum].piece) === null || _l === void 0 ? void 0 : _l.color) &&
                        ((_m = board[i][colum].piece) === null || _m === void 0 ? void 0 : _m.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
            for (var i = row + 1; i < 8; i++) {
                if ((!((_o = board[i][colum].piece) === null || _o === void 0 ? void 0 : _o.color) &&
                    ((_p = board[i][colum].piece) === null || _p === void 0 ? void 0 : _p.color) != undefined) ||
                    !board[i][colum].occupied) {
                    board[i][colum].html.style.backgroundColor = "red";
                    if (!((_q = board[i][colum].piece) === null || _q === void 0 ? void 0 : _q.color) &&
                        ((_r = board[i][colum].piece) === null || _r === void 0 ? void 0 : _r.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
        }
        else {
            for (var i = colum + 1; i < 8; i++) {
                if ((((_s = board[row][i].piece) === null || _s === void 0 ? void 0 : _s.color) &&
                    ((_t = board[row][i].piece) === null || _t === void 0 ? void 0 : _t.color) != undefined) ||
                    !board[row][i].occupied) {
                    board[row][i].html.style.backgroundColor = "red";
                    if (((_u = board[row][i].piece) === null || _u === void 0 ? void 0 : _u.color) &&
                        ((_v = board[row][i].piece) === null || _v === void 0 ? void 0 : _v.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
            for (var i = colum - 1; i >= 0; i--) {
                if ((((_w = board[row][i].piece) === null || _w === void 0 ? void 0 : _w.color) &&
                    ((_x = board[row][i].piece) === null || _x === void 0 ? void 0 : _x.color) != undefined) ||
                    !board[row][i].occupied) {
                    board[row][i].html.style.backgroundColor = "red";
                    if (((_y = board[row][i].piece) === null || _y === void 0 ? void 0 : _y.color) &&
                        ((_z = board[row][i].piece) === null || _z === void 0 ? void 0 : _z.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
            for (var i = row - 1; i >= 0; i--) {
                if ((((_0 = board[i][colum].piece) === null || _0 === void 0 ? void 0 : _0.color) &&
                    ((_1 = board[i][colum].piece) === null || _1 === void 0 ? void 0 : _1.color) != undefined) ||
                    !board[i][colum].occupied) {
                    board[i][colum].html.style.backgroundColor = "red";
                    if (((_2 = board[i][colum].piece) === null || _2 === void 0 ? void 0 : _2.color) &&
                        ((_3 = board[i][colum].piece) === null || _3 === void 0 ? void 0 : _3.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
            for (var i = row + 1; i < 8; i++) {
                if ((((_4 = board[i][colum].piece) === null || _4 === void 0 ? void 0 : _4.color) &&
                    ((_5 = board[i][colum].piece) === null || _5 === void 0 ? void 0 : _5.color) != undefined) ||
                    !board[i][colum].occupied) {
                    board[i][colum].html.style.backgroundColor = "red";
                    if (((_6 = board[i][colum].piece) === null || _6 === void 0 ? void 0 : _6.color) &&
                        ((_7 = board[i][colum].piece) === null || _7 === void 0 ? void 0 : _7.color) != undefined)
                        break;
                }
                else {
                    break;
                }
            }
        }
    };
    return Steeple;
}(Piece));
var Horseman = /** @class */ (function (_super) {
    __extends(Horseman, _super);
    function Horseman(color, image) {
        return _super.call(this, color, image) || this;
    }
    return Horseman;
}(Piece));
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    function Runner(color, image) {
        return _super.call(this, color, image) || this;
    }
    return Runner;
}(Piece));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(color, image) {
        return _super.call(this, color, image) || this;
    }
    return Queen;
}(Piece));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(color, image) {
        return _super.call(this, color, image) || this;
    }
    return King;
}(Piece));
//create the board
var board = [];
function main() {
    var _a;
    try {
        var game = document.querySelector("#game");
        if (!game)
            throw new Error("not find #game");
        for (var i = 0; i < 8; i++) {
            var rowArray = [];
            for (var n = 0; n < 8; n++) {
                var isGreen = (i + n) % 2 === 0;
                var color = isGreen ? "green" : "white";
                rowArray.push(new Square(color));
            }
            board.push(rowArray);
        }
        //put pieces
        putSteeple(false, 0, 0);
        putHorseman(false, 0, 1);
        putRunner(false, 0, 2);
        putQueen(false, 0, 3);
        putKing(false, 0, 4);
        putRunner(false, 0, 5);
        putHorseman(false, 0, 6);
        putSteeple(false, 0, 7);
        putSteeple(true, 7, 0);
        putHorseman(true, 7, 1);
        putRunner(true, 7, 2);
        putQueen(true, 7, 3);
        putKing(true, 7, 4);
        putRunner(true, 7, 5);
        putHorseman(true, 7, 6);
        putSteeple(true, 7, 7);
        putSolider(false, 4, 6);
        putSolider(true, 2, 5);
        putSteeple(true, 4, 3);
        for (var i = 0; i < board[1].length; i++) {
            putSolider(false, 1, i);
        }
        for (var i = 0; i < board[6].length; i++) {
            putSolider(true, 6, i);
        }
        var _loop_1 = function (i) {
            var _loop_2 = function (n) {
                var square = document.createElement("div");
                square.addEventListener("click", function () { return active(i, n); });
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
                _loop_2(n);
            }
        };
        for (var i = 0; i < 8; i++) {
            _loop_1(i);
        }
    }
    catch (e) {
        console.error(e);
    }
}
function active(row, colum) {
    var piece = board[row][colum].piece;
    piece === null || piece === void 0 ? void 0 : piece.canIMove(row, colum);
    console.log(board[row][colum].piece);
}
function fixBackground() {
    for (var i = 0; i < 8; i++) {
        for (var n = 0; n < 8; n++) {
            var isGreen = (i + n) % 2 === 0;
            var color = isGreen ? "green" : "beige";
            board[i][n].html.style.backgroundColor = color;
        }
    }
}
function putSteeple(color, row, colum) {
    var imgBlack = "./chessPicecs/צילום_מסך_2024-09-15_230859-removebg-preview.png";
    var imgWhite = "./chessPicecs/צריח_לבן-removebg-preview.png";
    var img = color ? imgWhite : imgBlack;
    var steeple = new Steeple(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
}
function putHorseman(color, row, colum) {
    var imgBlack = "./chessPicecs/פרש_שחור-removebg-preview.png";
    var imgWhite = "./chessPicecs/פרש_לבן-removebg-preview.png";
    var img = color ? imgWhite : imgBlack;
    var steeple = new Horseman(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
}
function putRunner(color, row, colum) {
    var imgBlack = "./chessPicecs/רץ_שחור-removebg-preview.png";
    var imgWhite = "./chessPicecs/רץ_לבן-removebg-preview.png";
    var img = color ? imgWhite : imgBlack;
    var steeple = new Runner(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
}
function putQueen(color, row, colum) {
    var imgBlack = "./chessPicecs/מלכה_שחורה-removebg-preview.png";
    var imgWhite = "./chessPicecs/מלכה_לבנה_-removebg-preview.png";
    var img = color ? imgWhite : imgBlack;
    var steeple = new Queen(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
}
function putKing(color, row, colum) {
    var imgBlack = "./chessPicecs/מלך_שחור-removebg-preview.png";
    var imgWhite = "./chessPicecs/מלך_לבן-removebg-preview.png";
    var img = color ? imgWhite : imgBlack;
    var steeple = new King(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
}
function putSolider(color, row, colum) {
    var imgBlack = "./chessPicecs/חייל_שחור-removebg-preview.png";
    var imgWhite = "./chessPicecs/חייל_לבן-removebg-preview.png";
    if (row <= board.length && row <= board[row].length) {
        var img = color ? imgWhite : imgBlack;
        var steeple = new Solider(color, img);
        board[row][colum].piece = steeple;
        board[row][colum].occupied = true;
    }
}
// putSolider(false,2,0);
console.log(board);
