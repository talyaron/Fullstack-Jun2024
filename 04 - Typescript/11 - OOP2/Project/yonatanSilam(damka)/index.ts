interface Play {
  row: number;
  colum: number;
}
const lastPlay: Square[] = [];
const lastPosition: Play[] = [];
const statistics = {
  turn: true,
  whiteScore: 12,
  blackScore: 12,
};

class Square {
  color: string;
  occupied: boolean;
  piece?: Piece;
  html: HTMLElement;
  moveThere?: boolean;
  jumpThere?: boolean;
  constructor(color: string, occupied = false) {
    this.color = color;
    this.occupied = occupied;
  }
  eat(row: number, colum: number) {
    const lastOne = lastPlay.pop();
    const lastPos = lastPosition.pop();
    console.log(lastPos);

    if (lastOne?.piece) {
      putSolider(lastOne?.piece?.color, row, colum);
    }
    if (lastPos?.row != undefined && lastPos?.colum != undefined) {
      deleteSolider(lastPos?.row, lastPos?.colum);

      if (board[row][colum]?.piece?.color) {
        statistics.blackScore--;
        if (lastPos?.colum > colum) {
          deleteSolider(row + 1, colum + 1);
        }
        if (lastPos?.colum < colum) {
          deleteSolider(row + 1, colum - 1);
        }
      } else {
        statistics.whiteScore--;
        if (lastPos?.colum > colum) {
          deleteSolider(row - 1, colum + 1);
        }
        if (lastPos?.colum < colum) {
          deleteSolider(row - 1, colum - 1);
        }
      }
    }
    statistics.turn = !statistics.turn;
    renderGame();
  }
  move(row: number, colum: number) {
    const lastOne = lastPlay.pop();
    const lastPos = lastPosition.pop();
    if (lastOne?.piece) {
      putSolider(lastOne?.piece?.color, row, colum);
    }
    deleteSolider(Number(lastPos?.row), Number(lastPos?.colum));
    statistics.turn = !statistics.turn;
    fixBackground();
    renderGame();
  }
}

// regular piece
class Piece {
  color: boolean; //true for white,false for black
  imageUrl: string;
  constructor(color: boolean, image: string) {
    this.color = color;
    this.imageUrl = image;
  }
  canIMove(row: number, colum: number) {}
  getPosition() {}
  move(row: number, colum: number) {}
}

class Solider extends Piece {
  constructor(color: boolean, image: string) {
    super(color, image);
  }
  getPosition() {}

  canIMove(row: number, colum: number) {
    fixBackground();
    lastPlay.push(board[row][colum]);
    lastPosition.push({ row, colum });

    //black
    if (!this.color) {
      if (board[row + 1][colum + 1] != undefined) {
        if (!board[row + 1][colum + 1].occupied) {
          board[row + 1][colum + 1].html.style.backgroundColor = "red";
          board[row + 1][colum + 1].moveThere = true;
        } else if (
          board[row + 1][colum + 1].piece?.color &&
          board[row + 1][colum + 1].occupied
        ) {
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
        } else if (
          board[row + 1][colum - 1].piece?.color &&
          board[row + 1][colum - 1].occupied
        ) {
          if (board[row + 2][colum - 2]) {
            if (!board[row + 2][colum - 2].occupied) {
              board[row + 2][colum - 2].html.style.backgroundColor = "yellow";
              board[row + 2][colum - 2].jumpThere = true;
            }
          }
        }
      }
      //white
    } else {
      if (board[row - 1][colum - 1] != undefined) {
        if (!board[row - 1][colum - 1].occupied) {
          board[row - 1][colum - 1].html.style.backgroundColor = "red";
          board[row - 1][colum - 1].moveThere = true;
          console.log(board);
        } else if (
          !board[row - 1][colum - 1].piece?.color &&
          board[row - 1][colum - 1].occupied
        ) {
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
        } else if (
          !board[row - 1][colum + 1].piece?.color &&
          board[row - 1][colum + 1].occupied
        ) {
          if (board[row - 2][colum + 2]) {
            if (!board[row - 2][colum + 2].occupied) {
              board[row - 2][colum + 2].html.style.backgroundColor = "yellow";
              board[row - 2][colum + 2].jumpThere = true;
            }
          }
        }
      }
    }
  }
}
const Esteeple = new Solider(false, "");

//create the board
const board: Square[][] = [];
function main() {
  try {
    statistics.blackScore = 12;
    statistics.whiteScore = 12;
    statistics.turn = true;
    console.log(statistics);

    lastPlay.length = 0;
    const turn = document.querySelector("#turn");
    if (!turn) throw new Error("not find #turn");
    const whoTurn = statistics.turn ? "white" : "red";
    turn.innerHTML = `<h1> ${whoTurn} turn </h1>`;
    const game = document.querySelector("#game");
    if (!game) throw new Error("not find #game");
    for (let i = 0; i < 8; i++) {
      const rowArray: Square[] = [];
      for (let n = 0; n < 8; n++) {
        const isGreen = (i + n) % 2 === 0;
        const color = isGreen ? "green" : "white";
        rowArray.push(new Square(color));
      }
      board.push(rowArray);
    }
    //put pieces
    // putSolider(false, 4, 3);
    // putSolider(true, 3, 4);

    for (let i = 0; i < 8; i++) {
      for (let n = 0; n < 8; n++) {
        const square = document.createElement("div");
        square.addEventListener("click", () => active(i, n));
        const isGreen = (i + n) % 2 === 0;
        const color = isGreen ? "green" : "beige";
        square.classList.add(`${color}`);
        if (!isGreen) {
          if (i != 3 && i != 4)
            if (i < 3) putSolider(false, i, n);
            else {
              putSolider(true, i, n);
            }
        }

        if (board[i][n].occupied) {
          const img = document.createElement("img");
          img.src = board[i][n].piece?.imageUrl || "";
          square.appendChild(img);
        }
        board[i][n].html = square;
        game.appendChild(square);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
function active(row: number, colum: number) {
  const place = board[row][colum];
  const piece = place.piece;
  if (place.occupied && place.piece?.color == statistics.turn) {
    console.log(1);
    piece?.canIMove(row, colum);
  }
  if (place.moveThere) {
    console.log(2);
    place?.move(row, colum);
  }
  if (place.jumpThere) {
    console.log(3);
    place?.eat(row, colum);
  }
}

function fixBackground() {
  for (let i = 0; i < 8; i++) {
    for (let n = 0; n < 8; n++) {
      board[i][n].moveThere = false;
      board[i][n].jumpThere = false;
      const isGreen = (i + n) % 2 === 0;
      const color = isGreen ? "green" : "beige";
      board[i][n].html.style.backgroundColor = color;
    }
  }
}

function renderGame() {
  const turn = document.querySelector("#turn");
  if (!turn) throw new Error("not find #turn");
  const whoTurn = statistics.turn ? "white" : "red";
  turn.innerHTML = `<h1> ${whoTurn} turn </h1>`;
  const game = document.querySelector("#game");
  if (!game) throw new Error("not find #game");
  game.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    for (let n = 0; n < 8; n++) {
      const square = document.createElement("div");
      square.addEventListener("click", () => active(i, n));
      const isGreen = (i + n) % 2 === 0;
      const color = isGreen ? "green" : "beige";
      square.classList.add(`${color}`);
      if (board[i][n].occupied) {
        const img = document.createElement("img");
        img.src = board[i][n].piece?.imageUrl || "";
        square.appendChild(img);
      }
      board[i][n].html = square;
      game.appendChild(square);
    }
  }
}

function putSolider(color: boolean, row: number, colum: number) {
  const imgBlack: string = "./damka/red-removebg-preview.png";
  const imgWhite: string = "./damka/white-removebg-preview.png";
  if (row <= board.length && row <= board[row].length) {
    const img = color ? imgWhite : imgBlack;
    const steeple = new Solider(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
  }
}

function deleteSolider(row: number, colum: number) {
  const img: string = "";
  const Esteeple = new Solider(false, img);
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
function stopGame(white: boolean) {
  const game = document.querySelector("#game");
  if (!game) throw new Error("not find #game");
  game.innerHTML = "";
  
  if (white) {
    const win = document.querySelector("#win");
    if (!win) throw new Error("not find #win");
    win.innerHTML = `<h1> White win!!!! </h1>`;
  } else {
    const win = document.querySelector("#win");
    if (!win) throw new Error("not find #win");
    win.innerHTML = `<h1> Red win!!!! </h1>`;
  }
}

console.log(board);
